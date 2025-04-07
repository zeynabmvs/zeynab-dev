
import { ProfileCard } from "@/app/components/ProfileCard";
import SkillsList from "@/app/components/Skills";
import ExperienceCard from "@/app/components/Experience";
import ProjectCard from "@/app/components/ProjectCard";
import AboutMe from "@/app/components/AboutMe";
import { profile, skills, experiences, projects } from "@/app/data/data";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-[922px]">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-[300px] flex-shrink-0 space-y-8">
          <ProfileCard {...profile} />
          <SkillsList skills={skills} />
        </aside>    
        <main className="flex-1 space-y-8">
          <AboutMe paragraphs={profile.aboutMe} />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Experience</h2>
            <div className="grid gap-4">
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} {...experience} />
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
