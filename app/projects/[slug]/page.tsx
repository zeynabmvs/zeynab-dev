import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { overrideComponents } from "@/app/components/mdx";
import { projects, profile } from "@/app/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

const siteUrl = "https://zeynab-dev.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | ${profile.name}`,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${profile.name}`,
      description: project.description,
      type: "website",
      url: `${siteUrl}/projects/${slug}`,
      images: [
        {
          url: `${siteUrl}${project.imageUrl}`,
          width: 1200,
          height: 630,
          alt: `${project.title} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${profile.name}`,
      description: project.description,
      images: [`${siteUrl}${project.imageUrl}`],
    },
  };
}

export async function generateStaticParams() {
  return projects
    .filter((project) => project.hasDetailsPage)
    .map((project) => ({
      slug: project.id,
    }));
}

// Page component
async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  try {
    const { default: Project } = await import(
      `@/app/projects/content/${slug}.mdx`
    );

    return (
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted dark:text-muted-dark hover:text-primary dark:hover:text-primary-dark mb-8"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to home
        </Link>

        <article className="space-y-12">
          <Project components={overrideComponents} />
        </article>
      </div>
    );
  } catch {
    // This will catch cases where the MDX file doesn't exist
    notFound();
  }
}

export default ProjectPage;
export const dynamicParams = false;
