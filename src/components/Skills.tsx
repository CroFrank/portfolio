import { Stepper, Step, Button } from "@material-tailwind/react"
import { useState } from "react"

export default function Skills() {
  return (
    <section className="mb-20 flex flex-col items-center justify-center px-3">
      <h2 className="text-2xl text-yellow-700 font-semibold lg:text-4xl">
        Preferred Tech Stack
      </h2>
      <span className="mb-10 h-1 w-full bg-yellow-600 mt-1"></span>
      <p className="mb-5">HTML - CSS(Tailwind) - JS(TS) - React</p>
      <p className="mb-5">SSG - Astro</p>
      <p>SSR - Nextjs - BaaS</p>
    </section>
  )
}
