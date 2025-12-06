type Skill = {
  name: string;
  icon: string;
};

type SkillsGroupType = {
  languages: Skill[];
  react: Skill[];
  styling: Skill[];
  tools: Skill[];
};

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="inline-flex items-center px-3.5 py-1.5 bg-zinc-100 dark:bg-zinc-700 rounded-full cursor-default transition-all duration-200 opacity-85 scale-90 hover:scale-100 hover:opacity-100">
    <span className="text-primary dark:text-primary-dark text-xs">
      {skill.name}
    </span>
  </div>
);

const SkillsList: React.FC<{ skills: SkillsGroupType }> = ({ skills }) => {
  const allSkills = Object.values(skills).flat();

  return (
    <div className="card p-4 md:p-6 md:flex-1/3">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-2.5 lg:gap-3 ">
        {allSkills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
