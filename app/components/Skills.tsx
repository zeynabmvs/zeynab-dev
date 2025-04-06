import Image from "next/image";

type Skill = {
  name: string;
  icon: string;
};

type SkillsListProps = {
  skills: Skill[];
};

const SkillsList: React.FC<SkillsListProps> = ({ skills }) => (
  <div className="card p-6">
    <h2 className="text-2xl font-bold mb-3">Skills</h2>

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
          <span className="text-muted text-xs ">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default SkillsList;
