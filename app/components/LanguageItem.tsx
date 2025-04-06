
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
  <div className="flex items-center space-x-2">
    <div
      className="size-3 rounded-full"
      style={{ backgroundColor: language.color }}
    />
    <span className="text-muted text-xs">{language.name}</span>
  </div>
);

export default LanguageItem;
