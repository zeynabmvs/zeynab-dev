'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { TechStackList } from "@/app/components/TechStack";

export type ProjectCardProps = {
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

const ViewSourceLink = ({ repoUrl }: { repoUrl: string }) => (
  <a
    href={repoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-dark hover:underline transition-colors"
    onClick={(e) => e.stopPropagation()}
  >
    View Source
    <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
  </a>
);

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  repoUrl,
  imageUrl,
  techStack,
}) => {
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link
      href={`/projects/${slug}`}
      className="block h-full hover:scale-[1.02] transition-transform"
      title="View project details"
    >
      <article className="card card-shadow overflow-hidden flex flex-col h-full">
        <div className="relative w-full aspect-3/2">
          <Image
            src={imageUrl}
            alt={`${title} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-col flex-grow p-4">
          <header>
            <h3 className="inline-block font-semibold">{title}</h3>
            <p className="text-sm mt-2 text-muted">{description}</p>
          </header>
          <div className="mt-auto pt-4 flex items-center justify-between">
            {techStack && techStack.length > 0 && (
              <TechStackList techStackIds={techStack} />
            )}
            <ViewSourceLink repoUrl={repoUrl} />
          </div>
        </div>
      </article>
    </Link>
  );
};