
type Language = {
  id: string;
  name: string;
  color: string;
  icon: string;
  repo: string;
};

type LanguageItemProps = {
  language: Language;
};

const LanguageItem: React.FC<LanguageItemProps> = ({ language }) => (
  <div className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-full">
    <div
      className="w-2 h-2 rounded-full"
      style={{ backgroundColor: language.color }}
    />
    <span>{language.name}</span>
  </div>
);

export default LanguageItem;
