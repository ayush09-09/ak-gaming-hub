import React, { useState } from "react";
import { Button } from '@/components/ui/button';
import { CheckCircle, CreditCard, Loader2 } from "lucide-react";

const steps = [
  { label: "Confirm Details", icon: <CheckCircle className="w-5 h-5" /> },
  { label: "Payment", icon: <CreditCard className="w-5 h-5" /> },
  { label: "Success", icon: <CheckCircle className="w-5 h-5 text-green-600" /> }
];

const PurchaseFlow = () => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const next = () => {
    if (step < steps.length - 1) {
      setLoading(true);
      setTimeout(() => {
        setStep(step + 1);
        setLoading(false);
      }, 1200);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-lg mx-auto my-8">
      <h3 className="text-xl font-bold mb-4">Purchase Flow</h3>
      <div className="flex justify-between mb-6">
        {steps.map((s, idx) => (
          <div key={s.label} className="flex flex-col items-center">
            <div className={`rounded-full p-2 ${idx === step ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>{s.icon}</div>
            <span className={`text-xs mt-1 ${idx === step ? 'font-bold text-primary' : ''}`}>{s.label}</span>
          </div>
        ))}
      </div>
      <div className="min-h-24 mb-4">
        {step === 0 && <div>Review your ID details and confirm to proceed.</div>}
        {step === 1 && <div>Enter payment details and complete your purchase.</div>}
        {step === 2 && <div className="text-green-600 font-semibold">Purchase Successful! 🎉</div>}
      </div>
      <Button onClick={next} disabled={step === steps.length - 1 || loading} className="w-full">
        {loading ? <Loader2 className="animate-spin w-5 h-5" /> : step === steps.length - 1 ? "Done" : "Next"}
      </Button>
    </div>
  );
};

export default PurchaseFlow;
