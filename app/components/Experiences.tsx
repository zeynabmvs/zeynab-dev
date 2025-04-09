import Image from "next/image";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

type ExperienceCardProps = {
  title: string;
  role: string;
  duration: string;
  description: string;
  imageUrl: string;
  responsibilities: string[];
  priority: number;
};

type ExperienceProps = {
  experiences: ExperienceCardProps[];
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  role,
  duration,
  description,
  imageUrl,
  responsibilities,
  priority,
}) => (
  <div className="p-4 flex gap-4 not-last:border-b border-zinc-300">
    {/* <div className="flex-shrink-0 relative w-16 h-16">
      <Image
        src={imageUrl}
        alt={`${company} logo`}
        fill
        className="rounded-lg object-cover"
        sizes="64px"
      />
    </div> */}
    <div className="flex-grow mb-4">
      <h3 className="font-semibold mb-2">{role}</h3>
      <p className="text-sm text-muted">{title}</p>
      <p className="text-xs text-muted mt-2 flex items-center gap-1">
        <CalendarDaysIcon className="size-4"/>
        {duration}
      </p>
      <p className="text-sm mt-2 mb-3 text-zinc-700">{description}</p>
      <ul className="list-disc list-inside text-sm mt-2 space-y-1 text-zinc-700">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  </div>
);

const ExperienceList: React.FC<ExperienceProps> = ({ experiences }) => {
  const sortedExperiences = experiences
    .filter((exp) => exp.priority > 0)
    .sort((a, b) => b.priority - a.priority);

  return (
    <div className="card grid gap-4 p-6">
      {sortedExperiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </div>
  );
};

export { ExperienceList, ExperienceCard };
