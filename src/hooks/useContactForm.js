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

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData(defaultFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    handleChange,
    handleSelectField,
    handleSubmit,
  };
}
