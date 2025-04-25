import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/app/lib/data";
import { TagsList } from "@/app/components/Tags";
import { TechStackList } from "@/app/components/TechStack";
import {
  ArrowTopRightOnSquareIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}

// Page component
async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    notFound();
  }

  // Placeholder data for missing sections
  const placeholderData = {
    tagline: "Building the future of digital experiences",
    purpose: {
      problem:
        "Users needed a more efficient way to manage and organize their digital content while maintaining a smooth, intuitive experience.",
      solution:
        "Created a modern web application that simplifies content management through an intuitive interface and powerful features.",
      impact:
        "Helping users save time and reduce complexity in their daily workflows.",
    },
    goals: [
      {
        title: "User Experience",
        description:
          "Create an intuitive and responsive interface that makes complex tasks feel simple",
      },
      {
        title: "Performance",
        description:
          "Ensure fast load times and smooth interactions across all devices",
      },
      {
        title: "Scalability",
        description:
          "Build a foundation that can easily accommodate new features and growing user base",
      },
      {
        title: "Accessibility",
        description:
          "Make the application usable for everyone, following WCAG guidelines",
      },
    ],
    role: {
      title: "Frontend Developer",
      responsibilities: [
        "Built frontend interface using React and modern web technologies",
        "Implemented responsive design and animations",
        "Integrated with backend APIs",
        "Collaborated with design and backend teams",
      ],
    },
    challenges: [
      {
        challenge: "Complex state management across components",
        solution:
          "Implemented efficient state management using React hooks and context",
      },
      {
        challenge: "Performance optimization for large datasets",
        solution: "Applied pagination, virtualization, and caching strategies",
      },
    ],
    learnings: [
      "Deepened understanding of React component architecture",
      "Improved TypeScript skills and type safety practices",
      "Gained experience with modern build tools and deployment",
      "Enhanced collaboration skills through team-based development",
    ],
    nextSteps: [
      "Implement user authentication and profiles",
      "Add more interactive features",
      "Optimize performance and accessibility",
      "Expand test coverage",
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-lg">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary mb-8"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        Back to projects
      </Link>

      <article className="space-y-12">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-xl text-muted italic">{placeholderData.tagline}</p>
        </header>

        {/* Purpose */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Purpose & Goals</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">The Problem</h3>
              <p className="text-muted">{placeholderData.purpose.problem}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">The Solution</h3>
              <p className="text-muted">{placeholderData.purpose.solution}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">The Impact</h3>
              <p className="text-muted">{placeholderData.purpose.impact}</p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-lg text-muted">{project.description}</p>

          <div className="flex flex-wrap gap-4 pt-4">
            {project.liveSite && (
              <a
                href={project.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-primary text-white hover:bg-primary/90"
              >
                View Live Site
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </a>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-zinc-200 hover:bg-zinc-50"
            >
              View Source
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Project Image */}
        <section>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={`${project.title} preview`}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </section>

        {/* My Role */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">My Role</h2>
          <p className="text-lg font-medium">{placeholderData.role.title}</p>
          <ul className="list-disc list-inside space-y-2 text-muted">
            {placeholderData.role.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Technologies */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tools & Technologies</h2>
          <div className="space-y-4">
            <TechStackList techStackIds={project.techStack} />
            <TagsList tags={project.tags} count={project.tags.length} />
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Challenges & Solutions</h2>
          <div className="space-y-6">
            {placeholderData.challenges.map((item, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-medium">Challenge:</h3>
                <p className="text-muted">{item.challenge}</p>
                <h3 className="text-lg font-medium">Solution:</h3>
                <p className="text-muted">{item.solution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What I Learned */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What I Learned</h2>
          <ul className="list-disc list-inside space-y-2 text-muted">
            {placeholderData.learnings.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* What's Next */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What's Next</h2>
          <ul className="list-disc list-inside space-y-2 text-muted">
            {placeholderData.nextSteps.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Final Thoughts */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Final Thoughts</h2>
          <blockquote className="border-l-4 border-primary pl-4 italic text-muted">
            This project showcased my ability to build modern, user-focused web
            applications while working collaboratively in a team environment.
            I'm proud of the results and would love to discuss the technical
            decisions and learning experiences in more detail.
          </blockquote>
        </section>
      </article>
    </div>
  );
}

export default ProjectPage;
