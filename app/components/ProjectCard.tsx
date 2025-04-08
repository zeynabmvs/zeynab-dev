import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Tag from "@/app/components/Tag";

type ProjectCardProps = {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  projectLangs: number[];
  tags: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  url,
  imageUrl,
  projectLangs,
  tags,
}) => (
  <article className="card card-shadow overflow-hidden flex flex-col h-full">
    <div className="relative w-full aspect-3/2">
      <Image
        src={imageUrl}
        alt={`${title} preview`}
        fill
        className="object-cover transition-transform hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div className="flex flex-col flex-grow p-5">
      <header>
        <a
          className="inline-block font-semibold hover:text-primary hover:underline transition-colors"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <p className="text-sm mt-2 text-muted">{description}</p>
      </header>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-4">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      )}

      <div className="mt-auto pt-4 flex justify-end">
        <a
          href={url}
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
