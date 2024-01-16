import PresentationCard from "./PresentationCard"

export default function Frontend() {
  const general = [
    "Internet",
    "HTTP/S",
    "Domain name",
    "Hosting",
    "DNS",
    "Browsers",
    "Computer science",
    "Hardware",
    "Networking",
  ]
  const basics = [
    "HTML",
    "Semantic HTML",
    "Accessibility,",
    "HTML-SEO",
    "CSS",
    "Responsive design",
    "JS",
    "DOM",
    "AJAX-Fetch API",
    "Git - Github",
  ]
  const thorough = [
    "PM - npm",
    "React",
    "Tailwind",
    "Build Tool-Vite",
    "Typescript",
    "SSR - Nextjs",
    "SSG - Astro",
  ]
  const inProgress = [
    "CSS Preprocessors - Sass",
    "Testing - Vitest/Jest",
    "GraphQL",
    "PWAs",
  ]
  return (
    <section className="mb-10 flex flex-col items-center justify-center lg:mb-0 px-3">
      <header className="mb-10 flex w-full flex-col items-center justify-center lg:mb-0">
        <h2 className="moveable-title text-2xl text-yellow-700 font-semibold lg:text-4xl">
          Frontend Web Developer
        </h2>
        <span className="mb-10 h-1 w-full bg-yellow-600 mt-1"></span>
      </header>

      <h3 className="text-xl lg:text-3xl py-5 mr-auto mb-5 font-semibold">
        My proficiency as a frontend developer:
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
        <PresentationCard
          title="General concept"
          subtitle="How internet and web works"
          items={general}
          remove={true}
        />
        <PresentationCard
          title="Basics"
          subtitle="Basic HTML, CSS, JS, Version control"
          items={basics}
          remove={true}
        />
        <PresentationCard
          title="Thorough Web Frontend"
          subtitle="Wider frontend approach"
          items={thorough}
          remove={true}
        />
        <PresentationCard
          title="In progress"
          subtitle="Familiar with, but learning at the moment"
          items={inProgress}
          remove={true}
        />
      </div>
    </section>
  )
}
