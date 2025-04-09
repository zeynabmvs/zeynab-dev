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
  <div className="inline-flex items-center px-3 py-1 bg-zinc-100 rounded-full">
    <span className="text-primary text-xs">{skill.name}</span>
  </div>
);

const SkillsList: React.FC<{ skills: SkillsGroupType }> = ({ skills }) => {
  const allSkills = Object.values(skills).flat();

  return (
    <div className="card p-6">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {allSkills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
