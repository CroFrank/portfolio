import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react"

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  )
}

export default function PresentationCard({
  title,
  titileLink,
  teacher,
  subtitle,
  items,
  projectDescription,
  projectLink,
  remove,
}: Udemy) {
  return (
    <Card color="gray" variant="gradient" className="w-full max-w-[22rem] p-8">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography variant="h4" color="white" className="font-normal">
          <a
            href={titileLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {title}
          </a>{" "}
          {remove ? "" : "by"} {teacher}
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mt-6 flex justify-center gap-1 text-7xl font-normal"
        >
          <span className="mt-2 text-xl">{subtitle}:</span>
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          {items.map((item: string, i: number) => {
            return (
              <li className="flex items-center gap-4" key={i}>
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">{item}</Typography>
              </li>
            )
          })}
        </ul>
      </CardBody>
      {remove ? (
        ""
      ) : (
        <CardFooter className="mt-12 p-0">
          <Typography className="font-normal pb-5">
            {projectDescription}
          </Typography>

          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            <Button
              size="md"
              className="hover:bg-yellow-600 text-black bg-yellow-700"
              ripple={false}
              fullWidth={true}
            >
              Project
            </Button>
          </a>
        </CardFooter>
      )}
    </Card>
  )
}
