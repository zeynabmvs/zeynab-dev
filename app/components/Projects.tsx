import Image from "next/image";
import Link from "next/link";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
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
  hasDetailsPage: boolean;
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
  hasDetailsPage,
}) => {
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <article className="card card-shadow overflow-hidden flex flex-col h-full">
      <div className="relative w-full aspect-3/2 group overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={`${title} preview`}
          fill
          className="object-cover transition-transform duration-300 "
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <Link
            className="p-2 bg-white rounded-full hover:bg-gray-200 cursor-pointer"
            href={repoUrl}
            target="_blank"
          >
            <CodeBracketIcon className="size-6 text-primary" />
          </Link>

          <Link
            className="p-2 bg-white rounded-full hover:bg-gray-200 cursor-pointer"
            href={liveSite}
            target="_blank"
          >
            <EyeIcon className="size-6 text-primary" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col flex-grow p-4">
        <header>
          <Link
            className="inline-flex items-center gap-1.5 text-primary hover:text-primary-dark hover:underline transition-colors font-semibold"
            href={liveSite}
            target="_blank"
            title="View project details"
          >
            {title}
            <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />

          </Link>
          <p className="text-sm mt-2 text-muted">{description}</p>
        </header>
        <div className="mt-auto pt-4 flex items-center justify-between">
          {techStack && techStack.length > 0 && (
            <TechStackList techStackIds={techStack} />
          )}

          {hasDetailsPage && (
            <a
              href={`/projects/${slug}`}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-dark hover:underline transition-colors"
            >
              Read more
            </a>
          )}
          {/* <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-dark hover:underline transition-colors"
          >
            View Source
            <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
          </a> */}
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
