import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    inquiryType: '',
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    position: '',
    phone: '',
    country: '',
    therapeuticArea: '',
    developmentStage: '',
    volumeRequirement: '',
    message: '',
    urgency: '',
    agreeToTerms: false,
    subscribeNewsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const inquiryTypes = [
    { value: 'partnership', label: 'New Partnership Inquiry' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'regulatory', label: 'Regulatory Questions' },
    { value: 'samples', label: 'Sample Request' },
    { value: 'pricing', label: 'Pricing Information' },
    { value: 'other', label: 'Other Inquiry' }
  ];

  const countries = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
    { value: 'in', label: 'India' },
    { value: 'cn', label: 'China' },
    { value: 'sg', label: 'Singapore' },
    { value: 'other', label: 'Other' }
  ];

  const therapeuticAreas = [
    { value: 'oncology', label: 'Oncology' },
    { value: 'hematology', label: 'Hematology' },
    { value: 'immunology', label: 'Immunology' },
    { value: 'rare-diseases', label: 'Rare Diseases' },
    { value: 'multiple', label: 'Multiple Areas' },
    { value: 'other', label: 'Other' }
  ];

  const developmentStages = [
    { value: 'preclinical', label: 'Preclinical' },
    { value: 'phase-1', label: 'Phase I' },
    { value: 'phase-2', label: 'Phase II' },
    { value: 'phase-3', label: 'Phase III' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'generic', label: 'Generic Development' }
  ];

  const volumeRequirements = [
    { value: 'research', label: 'Research Quantities (< 1kg)' },
    { value: 'pilot', label: 'Pilot Scale (1-10kg)' },
    { value: 'clinical', label: 'Clinical Supply (10-100kg)' },
    { value: 'commercial', label: 'Commercial Scale (> 100kg)' },
    { value: 'tbd', label: 'To Be Determined' }
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Standard (5-7 business days)' },
    { value: 'medium', label: 'Priority (2-3 business days)' },
    { value: 'high', label: 'Urgent (< 24 hours)' },
    { value: 'emergency', label: 'Emergency (Immediate)' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        inquiryType: '',
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        position: '',
        phone: '',
        country: '',
        therapeuticArea: '',
        developmentStage: '',
        volumeRequirement: '',
        message: '',
        urgency: '',
        agreeToTerms: false,
        subscribeNewsletter: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <section className="py-16 bg-accent/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-12 text-center shadow-lg border border-border">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={32} className="text-success" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Thank You for Your Inquiry!
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We've received your message and our team will respond within the timeframe specified. 
              You'll receive a confirmation email shortly with your inquiry reference number.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={() => setSubmitStatus(null)}
              >
                Submit Another Inquiry
              </Button>
              <Button
                variant="outline"
                iconName="Download"
                iconPosition="left"
              >
                Download Our Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-accent/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-lg border border-border">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Get in Touch with Our Experts
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below and our specialized team will respond according to your inquiry type and urgency level.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Inquiry Type */}
            <Select
              label="Inquiry Type"
              description="Select the type of inquiry to route to the appropriate team"
              required
              options={inquiryTypes}
              value={formData?.inquiryType}
              onChange={(value) => handleInputChange('inquiryType', value)}
              placeholder="Choose inquiry type"
            />

            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="First Name"
                type="text"
                required
                value={formData?.firstName}
                onChange={(e) => handleInputChange('firstName', e?.target?.value)}
                placeholder="Enter your first name"
              />
              <Input
                label="Last Name"
                type="text"
                required
                value={formData?.lastName}
                onChange={(e) => handleInputChange('lastName', e?.target?.value)}
                placeholder="Enter your last name"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Email Address"
                type="email"
                required
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                placeholder="your.email@company.com"
              />
              <Input
                label="Phone Number"
                type="tel"
                value={formData?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Company Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Company Name"
                type="text"
                required
                value={formData?.company}
                onChange={(e) => handleInputChange('company', e?.target?.value)}
                placeholder="Your pharmaceutical company"
              />
              <Input
                label="Position/Title"
                type="text"
                value={formData?.position}
                onChange={(e) => handleInputChange('position', e?.target?.value)}
                placeholder="Your role in the company"
              />
            </div>

            <Select
              label="Country"
              required
              searchable
              options={countries}
              value={formData?.country}
              onChange={(value) => handleInputChange('country', value)}
              placeholder="Select your country"
            />

            {/* Project Details */}
            {(formData?.inquiryType === 'partnership' || formData?.inquiryType === 'samples') && (
              <div className="space-y-6 p-6 bg-accent/50 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground flex items-center space-x-2">
                  <Icon name="Briefcase" size={20} />
                  <span>Project Details</span>
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Select
                    label="Therapeutic Area"
                    options={therapeuticAreas}
                    value={formData?.therapeuticArea}
                    onChange={(value) => handleInputChange('therapeuticArea', value)}
                    placeholder="Select therapeutic area"
                  />
                  <Select
                    label="Development Stage"
                    options={developmentStages}
                    value={formData?.developmentStage}
                    onChange={(value) => handleInputChange('developmentStage', value)}
                    placeholder="Select development stage"
                  />
                </div>

                <Select
                  label="Volume Requirement"
                  options={volumeRequirements}
                  value={formData?.volumeRequirement}
                  onChange={(value) => handleInputChange('volumeRequirement', value)}
                  placeholder="Select volume requirement"
                />
              </div>
            )}

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message <span className="text-destructive">*</span>
              </label>
              <textarea
                required
                rows={6}
                value={formData?.message}
                onChange={(e) => handleInputChange('message', e?.target?.value)}
                placeholder="Please provide details about your inquiry, specific API requirements, timeline, or any other relevant information..."
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              />
            </div>

            {/* Urgency Level */}
            <Select
              label="Urgency Level"
              description="This helps us prioritize your inquiry appropriately"
              required
              options={urgencyLevels}
              value={formData?.urgency}
              onChange={(value) => handleInputChange('urgency', value)}
              placeholder="Select urgency level"
            />

            {/* Checkboxes */}
            <div className="space-y-4">
              <Checkbox
                label="I agree to the Terms of Service and Privacy Policy"
                description="Required to process your inquiry"
                required
                checked={formData?.agreeToTerms}
                onChange={(e) => handleInputChange('agreeToTerms', e?.target?.checked)}
              />
              <Checkbox
                label="Subscribe to our newsletter for industry updates and product announcements"
                checked={formData?.subscribeNewsletter}
                onChange={(e) => handleInputChange('subscribeNewsletter', e?.target?.checked)}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                variant="default"
                size="lg"
                loading={isSubmitting}
                disabled={!formData?.agreeToTerms}
                iconName="Send"
                iconPosition="left"
                fullWidth
                className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
              >
                {isSubmitting ? 'Submitting Inquiry...' : 'Submit Inquiry'}
              </Button>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                Our team will respond within the timeframe specified based on your urgency level.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;