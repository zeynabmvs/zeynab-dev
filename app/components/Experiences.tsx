import { CalendarDaysIcon } from "@heroicons/react/24/outline";

type ExperienceCardProps = {
  title: string;
  role: string;
  duration: string;
  description: string;
  responsibilities: string[];
  priority: number
};

type ExperienceProps = {
  experiences: ExperienceCardProps[];
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  role,
  duration,
  description,
  responsibilities,
}) => (
  <div className="flex gap-4 not-last:border-b border-zinc-300 dark:border-zinc-600 pb-4">
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
      <p className="text-sm text-muted dark:text-muted-dark">{title}</p>
      <p className="text-xs text-muted dark:text-muted-dark mt-2 flex items-center gap-1">
        <CalendarDaysIcon className="size-4"/>
        {duration}
      </p>
      <p className="text-sm mt-2 mb-3 text-zinc-700 dark:text-zinc-200">{description}</p>
      <ul className="list-disc list-inside text-sm mt-2 space-y-1 text-zinc-700 dark:text-zinc-200">
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
    <div className="card space-y-6 p-4 md:p-6">
      {sortedExperiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </div>
  );
};

export { ExperienceList, ExperienceCard };
