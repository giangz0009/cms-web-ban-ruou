import React from "react";

interface ComingSoonProps {
  feature?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ feature }) => {
  return <div className="text-2xl p-8">Feature {feature ?? ""} ComingSoon</div>;
};

export default ComingSoon;
