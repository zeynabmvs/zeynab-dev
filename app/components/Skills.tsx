import Image from "next/image";

type Skill = {
  name: string;
  icon: string;
};

type SkillsListProps = { 
  skills: Skill[] 
};

const SkillsList: React.FC<SkillsListProps> = ({ skills }) => (
  <section className="space-y-4">
    <div className="rounded-lg border bg-card shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-3">Skills</h2>

      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <div
            key={skill.name}
            className="inline-flex items-center gap-2 rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold hover:bg-muted/80"
          >
            <Image
              src={skill.icon}
              alt={`${skill.name} icon`}
              width={16}
              height={16}
              className="opacity-70"
            />
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsList;