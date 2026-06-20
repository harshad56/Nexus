import { useState } from 'react';

const WHATSAPP_NUMBER = '919076450014';

export default function useContactForm(initialFields = {}) {
  const defaultFields = {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    details: '',
    ...initialFields,
  };

  const [formData, setFormData] = useState(defaultFields);
  const [status, setStatus] = useState('idle'); // idle | loading | success
  const [errors, setErrors] = useState({}); // { fieldName: true } for empty required fields

  const REQUIRED_FIELDS = ['firstName', 'lastName', 'email', 'details'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear a field's error as soon as the visitor types into it.
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const handleSelectField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData(defaultFields);
    setErrors({});
  };

  /** Returns a map of empty required fields (Req 6.3). */
  const validate = () => {
    const found = {};
    REQUIRED_FIELDS.forEach((field) => {
      if (!formData[field] || !String(formData[field]).trim()) {
        found[field] = true;
      }
    });
    return found;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Block submission while any required field is empty; retain entered
    // values and indicate which fields need input (Req 6.3).
    const found = validate();
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }
    setErrors({});
    setStatus('loading');

    const message = [
      `Hi NexusWeb Solutions,`,
      ``,
      `I am ${formData.firstName} ${formData.lastName} from ${formData.company || 'N/A'}.`,
      `Email: ${formData.email}`,
      ``,
      `*Project Requirement*`,
      `Type: ${formData.projectType || 'Not specified'}`,
      `Budget: ${formData.budget || 'Not specified'}`,
      ``,
      `*Details:*`,
      formData.details,
    ].join('\n');

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');

    setStatus('success');
    resetForm();
    setTimeout(() => setStatus('idle'), 5000);
  };

  return {
    formData,
    status,
    errors,
    handleChange,
    handleSelectField,
    handleSubmit,
  };
}
