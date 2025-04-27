import { notFound } from "next/navigation";
import Image from "next/image";

import { TagsList } from "@/app/components/Tags";
import { TechStackList } from "@/app/components/TechStack";
import { Metadata } from "next";
import {
  ArrowTopRightOnSquareIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

// TODO: Generate metadata for the page
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { slug } = await params;

//   const project = projects.find(
//     (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
//   );

//   return {
//     title: project ? `${project.title} | Project Details` : "Project Not Found",
//   };
// }

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   return projects.map((project) => ({
//     slug: project.title.toLowerCase().replace(/\s+/g, "-"),
//   }));
// }

// Page component
async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const { default: Project } = await import(`@/app/projects/content/${slug}.mdx`)


  // const project = projects.find(
  //   (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  // );

  // if (!project) {
  //   notFound();
  // }

  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-lg">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary mb-8"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        Back to home
      </Link>

      <article className="space-y-12">
        <Project />
      </article>
    </div>
  );
}

export default ProjectPage;
export const dynamicParams = false
