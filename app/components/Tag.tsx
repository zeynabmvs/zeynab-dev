import React from "react";

type TagProps = {
  label: string;
};

const Tag: React.FC<TagProps> = ({ label }) => (
  <span className="text-xs text-muted">#{label}</span>
);

export default Tag;
