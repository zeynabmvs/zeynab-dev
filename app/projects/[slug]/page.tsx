import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { overrideComponents } from "@/app/components/mdx";

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

// TODO: Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  // const { projects } = await import("@/app/lib/data.js");

  // return projects.map((project) => ({
  //   slug: project.title.toLowerCase().replace(/\s+/g, "-"),
  // }));

  return [{ slug: "kanba" }];
}

// Page component
async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  try {
    const { default: Project } = await import(
      `@/app/projects/content/${slug}.mdx`
    );

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
