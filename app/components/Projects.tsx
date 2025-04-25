import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { TechStackList } from "@/app/components/TechStack";

type ProjectCardProps = {
  title: string;
  description: string;
  repoUrl: string;
  imageUrl: string;
  projectLangs: number[];
  tags: string[];
  techStack: number[];
  liveSite: string;
  priority: number;
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
}) => {
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <article className="card card-shadow overflow-hidden flex flex-col h-full">
      <div className="relative w-full aspect-3/2">
        <Link
          href={`/projects/${slug}`}
          className="block w-full h-full"
          title="View project details"
        >
          <Image
            src={imageUrl}
            alt={`${title} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      </div>
      <div className="flex flex-col flex-grow p-4">
        <header>
          <Link
            className="inline-block font-semibold hover:text-primary hover:underline transition-colors"
            href={`/projects/${slug}`}
            title="View project details"
          >
            {title}
          </Link>
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
};

type ProjectListProps = {
  projects: ProjectCardProps[];
};

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const sortedProjects = projects
    .filter((item) => item.priority > 0)
    .sort((a, b) => a.priority - b.priority);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {sortedProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
