import PresentationCard from "./PresentationCard"

export default function LearningPath() {
  const colt = [
    "Introduction to Web Dev",
    "HTML",
    "CSS - responsive designe, flexbox, BOOTSTRAP",
    "JS - basics and DOM",
    "Basic terminal commands",
    "Nodejs - npm and Express",
    "EJS - templating",
    "AJAX- SPA",
    "REST API - CRUD",
    "DB - Mongo and ODM Mongoose",
    "Authentication, authorization - Cookies",
  ]
  const smilga = [
    "Vite build tool",
    "React - JSX",
    "React - JSX",
    "CSS - Styled components",
    "Error handling",
    "ES6 Modules",
    "Validation - server side",
    "Hashing",
  ]
  const alicea = [
    "Execution context",
    "JSON",
    "Closures",
    "Prototypal Inheritance",
    "Code execution",
    "Immediately Invoked Functions Expressions",
    "Typescript - js superset",
    "Async await",
    "Keyword 'this'",
  ]
  const malan = [
    "Computer science",
    "Binary code",
    "Algorithms",
    "Memory",
    "Data structure",
    "Frameworks",
    "Security",
  ]

  const lane = [
    "HTTP protocols - headers",
    "HTTPS - SSL",
    "DNS",
    "URL as a subset of URI",
    "Async JS",
  ]

  return (
    <section className="mb-10 flex flex-col items-center justify-center lg:mb-0 px-3">
      <header className="mb-10 flex w-full flex-col items-center justify-center lg:mb-0">
        <h2 className="moveable-title text-2xl text-yellow-600 font-semibold lg:text-4xl">
          Learning Path
        </h2>
        <span className="mb-10 h-1 w-full bg-yellow-500 mt-1"></span>
      </header>

      <h3 className="text-2xl lg:text-3xl py-5 mr-auto mb-5 font-semibold">
        Udemy
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
        <PresentationCard
          title="Web Dev Bootcamp"
          titileLink="https://www.udemy.com/course/the-web-developer-bootcamp/"
          teacher="Colt Steele"
          subtitle="Here I learnd my first steps"
          items={colt}
          projectDescription="I made code along project, it takes almost 1 minute to render so please
  be patient"
          projectLink="https://yelp-camp-q0p1.onrender.com/"
        />

        <PresentationCard
          title="MERN app"
          titileLink="https://www.udemy.com/course/mern-stack-course-mongodb-express-react-and-nodejs/"
          teacher="John Smilga"
          subtitle="I continued with React:"
          items={smilga}
          projectDescription="I made code along project, it takes almost 1 minute to render so please
  be patient"
          projectLink="https://developers-r9xd.onrender.com/"
        />

        <PresentationCard
          title="JS advanced"
          titileLink="https://www.udemy.com/course/understand-javascript/"
          teacher="Anthony Alicea"
          subtitle="Dived deeper into javascript"
          items={alicea}
          projectDescription="This is front-end app using firebase BaaS"
          projectLink="https://marvelous-cars.vercel.app/"
        />
      </div>

      <h3 className="text-2xl lg:text-3xl py-5 mr-auto mb-5 font-semibold">
        Youtube
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-20">
        <PresentationCard
          title="CS50 Hardvard"
          titileLink="https://www.youtube.com/watch?v=8mAITcNt710"
          teacher="David J. Malan"
          subtitle="Wrapping things up"
          items={malan}
          remove
        />

        <PresentationCard
          title="HTTP Networking"
          titileLink="https://www.youtube.com/watch?v=2JYT5f2isg4"
          teacher="Lane Wagner"
          subtitle="A bit more about backend"
          items={lane}
          remove
        />
      </div>
    </section>
  )
}

{
  /* <style>
  .moveable-text {
    transition: transform 0.6s ease-in-out;
  }

  .moveable-text:hover {
    transform: translateY(5px);
  }
  .moveable-title {
    transition: transform 0.5s ease-out;
  }

  .moveable-title:hover {
    transform: translateY(-5px);
  }
</style> */
}
