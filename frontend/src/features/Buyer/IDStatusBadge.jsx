import React from "react";
import { BadgeCheck, ShieldAlert, Ban } from "lucide-react";

const statusMap = {
  verified: {
    label: "Verified",
    icon: <BadgeCheck className="text-blue-600 w-5 h-5" />,
    color: "bg-blue-100 text-blue-700"
  },
  under_review: {
    label: "Under Review",
    icon: <ShieldAlert className="text-yellow-500 w-5 h-5" />,
    color: "bg-yellow-50 text-yellow-700"
  },
  sold: {
    label: "Sold",
    icon: <Ban className="text-gray-400 w-5 h-5" />,
    color: "bg-gray-100 text-gray-500"
  }
};

const IDStatusBadge = ({ status = "verified" }) => {
  const s = statusMap[status] || statusMap.verified;
  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${s.color}`}>
      {s.icon}
      {s.label}
    </span>
  );
};

export default IDStatusBadge;
