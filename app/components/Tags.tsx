type TagProps = {
  label: string;
  icon?: React.ReactNode;
};

const Tag: React.FC<TagProps> = ({ label, icon }) => (
  <span className="text-xs text-muted flex items-center gap-1">
    {icon}#{label}
  </span>
);

type TagsListProps = {
  tags: string[];
  className?: string;
  count: number;
};

export const TagsList: React.FC<TagsListProps> = ({
  tags,
  className = "",
  count = 4,
}) => {
  if (tags.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {tags.slice(0, count).map((tag) => (
        <Tag key={tag} label={tag} />
      ))}
    </div>
  );
};

export default TagsList;
