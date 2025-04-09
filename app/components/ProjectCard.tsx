import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Tag from "@/app/components/Tag";
import { TechStackList } from "@/app/components/TechStack";

type ProjectCardProps = {
  title: string;
  description: string;
  repoUrl: string;
  imageUrl: string;
  projectLangs: number[];
  tags: string[];
  techStack: number[]; // array of tech stack indices
  liveSite?: string;
  priority?: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  repoUrl,
  imageUrl,
  projectLangs,
  tags,
  techStack,
  liveSite,
}) => (
  <article className="card card-shadow overflow-hidden flex flex-col h-full">
    <div className="relative w-full aspect-3/2">
      <a
        href={liveSite || repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        <Image
          src={imageUrl}
          alt={`${title} preview`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </a>
    </div>
    <div className="flex flex-col flex-grow p-5">
      <header>
        <a
          className="inline-block font-semibold hover:text-primary hover:underline transition-colors"
          href={liveSite || repoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <p className="text-sm mt-2 text-muted">{description}</p>
      </header>
      <div className="mt-auto pt-4 flex items-center justify-between">
        {techStack && techStack.length > 0 && (
          <TechStackList techStackIds={techStack} />
        )}
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-dark hover:underline transition-colors"
        >
          View Source
          <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  </article>
);

export default ProjectCard;
