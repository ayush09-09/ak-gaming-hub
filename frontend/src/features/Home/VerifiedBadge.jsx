import React from "react";
import { BadgeCheck } from "lucide-react";

const VerifiedBadge = ({ className = "" }) => (
  <span title="Verified Seller" className={`inline-flex items-center ${className}`}>
    <BadgeCheck className="text-blue-600 w-5 h-5" />
    <span className="sr-only">Verified</span>
  </span>
);

export default VerifiedBadge;
