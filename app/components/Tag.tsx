import React from "react";

type TagProps = {
  label: string;
  icon?: React.ReactNode;
};

const Tag: React.FC<TagProps> = ({ label, icon }) => (
  <span className="text-xs text-muted flex items-center gap-1">
    {icon}#{label}
  </span>
);

export default Tag;
