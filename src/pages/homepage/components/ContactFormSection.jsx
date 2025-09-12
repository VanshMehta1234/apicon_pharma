import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactFormSection = () => {
  const initialForm = {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: '',
    message: '',
    agree: false
  };
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  // Single-column form now; no progress indicator needed

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData(initialForm);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#f5f7fa] to-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Get in <span className="text-gradient">Touch</span></h2>
          <p className="mt-3 text-lg text-muted-foreground">We typically respond within 24–48 business hours.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="flex items-center gap-3 rounded-lg border border-[#1976D2]/15 bg-white p-4">
            <Icon name="Mail" size={18} className="text-[#1976D2]" />
            <div className="text-sm">
              <div className="text-muted-foreground">Email</div>
              <div className="font-medium text-foreground">partnership@apiconpharma.com</div>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-[#1976D2]/15 bg-white p-4">
            <Icon name="Phone" size={18} className="text-[#1976D2]" />
            <div className="text-sm">
              <div className="text-muted-foreground">Phone</div>
              <div className="font-medium text-foreground">+1 (555) 123-4567</div>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-[#1976D2]/15 bg-white p-4">
            <Icon name="ShieldCheck" size={18} className="text-[#1976D2]" />
            <div className="text-sm text-foreground">GMP & ICH compliant • Mon–Fri 8:00–18:00 (UTC)</div>
          </div>
        </div>

        {submitted && (
          <div className="mb-6 rounded-lg border border-[#16a34a]/20 bg-[#16a34a]/5 text-[#166534] p-4 text-sm">
            Thank you for your inquiry. We will get back to you within 24–48 business hours.
          </div>
        )}

        <div className="rounded-2xl border border-[#1976D2]/15 bg-white p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData?.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    autoComplete="given-name"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData?.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    autoComplete="family-name"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData?.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    autoComplete="email"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData?.company}
                    onChange={handleInputChange}
                    placeholder="Your organization"
                    autoComplete="organization"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData?.phone}
                    onChange={handleInputChange}
                    placeholder="Optional"
                    autoComplete="tel"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Inquiry Type *</label>
                  <select
                    name="inquiryType"
                    required
                    value={formData?.inquiryType}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    <option value="">Select type</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="api">API Procurement</option>
                    <option value="custom">Custom Synthesis</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData?.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your requirements..."
                  className="form-input resize-vertical"
                />
              </div>

              <div className="flex items-start gap-3">
                <input id="agree" name="agree" type="checkbox" checked={!!formData?.agree} onChange={handleCheckboxChange} className="mt-1 h-4 w-4 rounded border-[#E5E7EB] text-[#1976D2] focus:ring-[#1976D2]" />
                <label htmlFor="agree" className="text-sm text-muted-foreground">I agree to the privacy policy</label>
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  iconName="Send"
                  iconPosition="left"
                  className={`bg-[#1976D2] hover:bg-[#1767B7] text-white ${!formData?.agree ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={!formData?.agree}
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
    </section>
  );
};

export default ContactFormSection;