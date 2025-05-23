import { ProfileCard } from "@/app/components/ProfileCard";
import SkillsList from "@/app/components/Skills";
import { ExperienceList } from "@/app/components/Experiences";
import AboutMe from "@/app/components/AboutMe";
import { profile, skills, experiences, projects } from "@/app/lib/data.js";
import ProjectList from "@/app/components/Projects";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-lg space-y-6">
      {/* <Navigation /> */}

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <aside className="lg:w-[300px] flex-shrink-0 flex flex-col gap-8 md:flex-row lg:flex-col justify-start">
          <ProfileCard {...profile} />
          <SkillsList skills={skills} />
        </aside>
        <main className="flex-1 space-y-8">
          <AboutMe paragraphs={profile.aboutMe} />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <ProjectList projects={projects} />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Experience</h2>
            <ExperienceList experiences={experiences} />
          </section>
        </main>
      </div>
    </div>
  );
}
