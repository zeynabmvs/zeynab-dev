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

type SkillGroupProps = {
  title: string;
  skills: Skill[];
};

const SkillGroup: React.FC<SkillGroupProps> = ({ title, skills }) => (
  <div className="mb-6">
    <h3 className="text-sm mb-3 capitalize text-zinc-700">{title}</h3>
    <div className="flex flex-wrap gap-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="inline-flex items-center gap-1.5 rounded-full"
        >
          <Image
            src={skill.icon}
            alt={`${skill.name} icon`}
            width={16}
            height={16}
          />
          <span className="text-muted text-xs">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const SkillsList: React.FC<{ skills: SkillsGroupType }> = ({ skills }) => (
  <div className="card p-6">
    <h2 className="text-2xl font-bold mb-6">Skills</h2>
    
    {Object.entries(skills).map(([category, skillList]) => (
      <SkillGroup key={category} title={category} skills={skillList} />
    ))}
  </div>
);

export default SkillsList;
