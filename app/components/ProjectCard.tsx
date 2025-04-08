import Image from "next/image";
import { languages } from "@/app/data/data";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import LanguageItem from "@/app/components/LanguageItem";

type ProjectCardProps = {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  projectLangs: number[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  url,
  imageUrl,
  projectLangs,
}) => (
  <div className="card card-shadow overflow-hidden">
    <div className="relative w-full h-48">
      <Image
        src={imageUrl}
        alt={`${title} preview`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div className="p-6">
      <a className="font-semibold hover:underline" href={url}>
        {title}
      </a>
      <p className="text-sm mt-1 text-muted">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <div className="flex flex-wrap gap-2">
          {projectLangs.map((index) => (
            <LanguageItem key={index} language={languages[index]} />
          ))}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm hover:underline transition-colors"
        >
          View Source
          <ArrowTopRightOnSquareIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
