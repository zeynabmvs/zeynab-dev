import Image from "next/image";
import Link from "next/link";
import {
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

const ProjectImage = ({ url, title }: { url: string; title: string }) => (
  <Image
    src={url}
    alt={`${title} preview`}
    fill
    className="object-cover transition-transform duration-300 "
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
);

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  repoUrl,
  imageUrl,
  techStack,
  liveSite,
  hasDetailsPage,
}) => {
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <article className="card overflow-hidden flex flex-col h-full">
      <div className="relative w-full aspect-3/2 group overflow-hidden">
        {hasDetailsPage ? (
          <Link href={`/projects/${slug}`} title="Read case study">
            <ProjectImage url={imageUrl} title={title} />
          </Link>
        ) : (
          <ProjectImage url={imageUrl} title={title} />
        )}
      </div>
      <div className="flex flex-col flex-grow p-4 ">
        <header className="mb-2">
          {hasDetailsPage ? (
            <Link
              className="inline-flex items-center gap-1.5 text-primary hover:text-primary-dark hover:underline transition-colors font-semibold"
              href={`/projects/${slug}`}
              title="Case study"
            >
              {title}
            </Link>
          ) : (
            <span className="text-primary hover:text-primary-dark font-semibold">
              {title}
            </span>
          )}

          <p className="text-sm mt-2 text-muted">{description}</p>
        </header>
        <footer className="mt-auto flex items-center justify-between">
          {techStack && techStack.length > 0 && (
            <TechStackList techStackIds={techStack} />
          )}

          <div className="flex items-center justify-center gap-4 text-sm ">
            <a
              className="flex items-center gap-1 hover:underline"
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CodeBracketIcon className="size-4 text-primary" />
              Source
            </a>

            <a
              className="flex items-center gap-1 hover:underline"
              href={liveSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              <EyeIcon className="size-4 text-primary" />
              live site
            </a>
          </div>
        </footer>
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
