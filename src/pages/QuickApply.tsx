
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { ChevronRight, ChevronLeft, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { ProfessionalCard } from "@/components/ui/professional-card";

const QuickApply = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    coverLetter: "",
    agreeToTerms: false
  });

  const totalSteps = 4;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const submitApplication = () => {
    console.log("Application submitted:", formData);
    setCurrentStep(totalSteps + 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-900">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-sm font-medium text-slate-600">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  placeholder="Enter your first name"
                  className="mt-1 bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-sm font-medium text-slate-600">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  placeholder="Enter your last name"
                  className="mt-1 bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-slate-600">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email"
                className="mt-1 bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-slate-600">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="Enter your phone number"
                className="mt-1 bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <Label htmlFor="location" className="text-sm font-medium text-slate-600">Current Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                placeholder="City, State"
                className="mt-1 bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-900">Work Experience</h3>
            <div>
              <Label htmlFor="experience" className="text-sm font-medium text-slate-600">Tell us about your relevant experience</Label>
              <Textarea
                id="experience"
                value={formData.experience}
                onChange={(e) => handleInputChange("experience", e.target.value)}
                placeholder="Describe your work experience, skills, and achievements..."
                rows={6}
                className="mt-2 bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-900">Cover Letter</h3>
            <div>
              <Label htmlFor="coverLetter" className="text-sm font-medium text-slate-600">Why are you interested in this position?</Label>
              <Textarea
                id="coverLetter"
                value={formData.coverLetter}
                onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                placeholder="Write a brief cover letter explaining your interest and fit for this role..."
                rows={6}
                className="mt-2 bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-900">Review & Submit</h3>
            <div className="bg-slate-50 p-6 rounded-xl space-y-3 border border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div><span className="font-medium text-slate-600">Name:</span> <span className="text-slate-900">{formData.firstName} {formData.lastName}</span></div>
                <div><span className="font-medium text-slate-600">Email:</span> <span className="text-slate-900">{formData.email}</span></div>
                <div><span className="font-medium text-slate-600">Phone:</span> <span className="text-slate-900">{formData.phone}</span></div>
                <div><span className="font-medium text-slate-600">Location:</span> <span className="text-slate-900">{formData.location}</span></div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                className="border-slate-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
              />
              <Label htmlFor="terms" className="text-sm text-slate-600">
                I agree to the Terms of Service and Privacy Policy
              </Label>
            </div>
          </div>
        );
      
      default:
        return (
          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle className="w-20 h-20 text-blue-600 mx-auto" />
            <h3 className="text-3xl font-semibold text-slate-900">Application Submitted!</h3>
            <p className="text-slate-600 text-lg">
              Thank you for your application. We'll review it and get back to you soon.
            </p>
          </motion.div>
        );
    }
  };

  if (currentStep > totalSteps) {
    return (
      <div className="min-h-[calc(100vh-8rem)] bg-white flex items-center justify-center py-12">
        <div className="max-w-md w-full mx-4">
          <ProfessionalCard variant="executive" className="border border-slate-200 shadow-card">
            <CardContent className="p-8">
              {renderStep()}
            </CardContent>
          </ProfessionalCard>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
            Quick Apply
          </h1>
          <p className="text-xl text-slate-600">
            Complete your application in just a few steps
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-slate-600">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm font-medium text-slate-600">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <motion.div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </motion.div>

        <ProfessionalCard variant="executive" delay={0.5} className="border border-slate-200 shadow-card">
          <CardHeader className="border-b border-slate-200">
            <CardTitle className="text-2xl text-slate-900">Application Form</CardTitle>
            <CardDescription className="text-base text-slate-600">
              Fill out the information below to complete your application
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            {renderStep()}
            
            {currentStep <= totalSteps && (
              <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="px-6 border-slate-300 text-slate-700 hover:bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                
                {currentStep < totalSteps ? (
                  <Button 
                    onClick={nextStep} 
                    className="px-6 bg-blue-600 hover:bg-blue-700 text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button 
                    onClick={submitApplication}
                    disabled={!formData.agreeToTerms}
                    className="px-8 bg-blue-600 hover:bg-blue-700 text-white disabled:bg-slate-300 disabled:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Submit Application
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </ProfessionalCard>
      </div>
    </div>
  );
};

export default QuickApply;
