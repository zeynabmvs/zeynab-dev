"use client";
import Image from "next/image";
import Link from "next/link";
import {
  CodeBracketIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { TechStackList } from "@/app/components/TechStack";
import { useState, useRef, useEffect } from "react";

type ProjectCardProps = {
  id: string;
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
  id,
  title,
  description,
  repoUrl,
  imageUrl,
  techStack,
  liveSite,
  hasDetailsPage,
}) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const projectCardRef = useRef(null)

  useEffect(()=>{
    function listener(event) {
      if (event.target === document.documentElement || event.target === document.body) {
        // This is a click on the scrollbar
        return
      }
      if (!projectCardRef.current || projectCardRef.current.contains(event.target)) {
        // This is a click inside of ref
        return;
      }

      setShowOverlay(false)
    }

    window.addEventListener("mousedown", listener);
    window.addEventListener("touchstart", listener);

    return () => {
      window.removeEventListener("mousedown", listener);
      window.removeEventListener("touchstart", listener);
    };

  }, [projectCardRef])

  const handleInteraction = () => {
    setShowOverlay((prev) => !prev);
  };

  return (
    <article className="card overflow-hidden flex flex-col h-full">
      <div
        className={`project-image relative w-full aspect-3/2 group overflow-hidden rounded-t-lg ${
          showOverlay ? "active" : ""
        }`}
        onClick={handleInteraction}
        ref={projectCardRef}
      >
        <Image
          src={imageUrl}
          alt={`${title} preview`}
          fill
          className="object-cover transition-transform duration-300 "
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          className={`overlay invisible opacity-0 flex absolute inset-0 bg-primary/70 group-hover:opacity-100 group-hover:visible transition-opacity duration-300  items-center justify-center gap-4 ${
            showOverlay ? "visible" : ""
          }`}
        >
          <Link
            className="p-2 bg-white rounded-full hover:bg-gray-200 cursor-pointer"
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeBracketIcon className="size-6 text-primary" />
          </Link>

          <Link
            className="p-2 bg-white rounded-full hover:bg-gray-200 cursor-pointer"
            href={liveSite}
            target="_blank"
            rel="noopener noreferrer"
          >
            <EyeIcon className="size-6 text-primary" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col flex-grow p-4 ">
        <header className="mb-2">
          <span className="text-primary hover:text-primary-dark font-semibold">
            {title}
          </span>
          <p className="text-sm mt-2 text-muted">{description}</p>
        </header>
        <footer className="mt-auto flex items-center justify-between">
          {techStack && techStack.length > 0 && (
            <TechStackList techStackIds={techStack} />
          )}

          <div className="flex items-center justify-center gap-4 text-sm ">
            {hasDetailsPage && (
              <Link
                className="inline-flex items-center gap-1.5 text-primary hover:text-primary-dark hover:underline transition-colors"
                href={`/projects/${id}`}
                title="Case study"
              >
                Read more
              </Link>
            )}

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
      {sortedProjects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
