
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ConsultationForm from '@/components/forms/ConsultationForm';

interface ConsultationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ConsultationDialog = ({ open, onOpenChange }: ConsultationDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Get Your Free IT Consultation
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Share your details and let's discuss how we can transform your business with cutting-edge IT solutions.
          </DialogDescription>
        </DialogHeader>
        <ConsultationForm onClose={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationDialog;
