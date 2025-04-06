import Image from "next/image";

// Experience Card Component
type ExperienceCardProps = {
  company: string;
  role: string;
  duration: string;
  description: string;
  imageUrl: string;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  duration,
  description,
  imageUrl,
}) => (
  <div className="card card-shadow p-6 flex gap-4">
    <div className="flex-shrink-0 relative w-16 h-16">
      <Image
        src={imageUrl}
        alt={`${company} logo`}
        fill
        className="rounded-lg object-cover"
        sizes="64px"
      />
    </div>
    <div className="flex-grow">
      <h3 className="font-semibold">{role}</h3>
      <p className="text-sm text-muted">{company}</p>
      <p className="text-xs text-muted mt-2">{duration}</p>
      <p className="text-sm mt-2">{description}</p>
    </div>
  </div>
);

export default ExperienceCard;
