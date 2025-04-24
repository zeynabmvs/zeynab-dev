import Image from "next/image";

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

const SkillItemWithIcon: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="inline-flex items-center gap-1.5 rounded-full">
    <Image src={skill.icon} alt={`${skill.name} icon`} width={16} height={16} />
    <span className="text-muted text-xs">{skill.name}</span>
  </div>
);

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="inline-flex items-center px-3 py-1 bg-zinc-100 rounded-full hover:bg-zinc-700 group cursor-default transition-all duration-150">
    <span className="text-primary text-xs group-hover:text-zinc-100">{skill.name}</span>
  </div>
);

const SkillsList: React.FC<{ skills: SkillsGroupType }> = ({ skills }) => {
  const allSkills = Object.values(skills).flat();

  return (
    <div className="card p-4 md:p-6 md:flex-1/3">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-3 lg:gap-4 ">
        {allSkills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
