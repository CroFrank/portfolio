import { useState, type FormEvent } from "react"
import { Modal } from "./Modal"

export default function Form({ secret }: { secret: string }) {
  const [isSubmiting, setIsSubmitting] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const formData = new FormData()
  formData.append("Name", name)
  formData.append("Email", email)
  formData.append("Message", message)

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch(`${secret}`, {
        method: "POST",
        body: formData,
      })
      const resData = await res.text()
      setResponse(resData)
      setIsModalOpen(true)
    } catch (error) {
      console.log(error)
    }
    setIsSubmitting(false)
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="Name"
            className="w-full border-2 border-gray-300 rounded-md p-2 text-gray-700"
            placeholder="John Doe"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="Email"
            className="w-full border-2 border-gray-300 rounded-md p-2 text-gray-700"
            placeholder="john.doe@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="Message"
            rows={4}
            className="w-full border-2 border-gray-300 rounded-md p-2 text-gray-700"
            placeholder="Your message here..."
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button
            type="submit"
            className="bg-yellow-700 px-4 py-2 rounded-md hover:scale-105 tracking-wider"
          >
            {isSubmiting ? "...Submitting" : "Submit"}
          </button>
          <a
            href="/"
            className="text-blue-500 hover:text-blue-400 hover:scale-105 font-semibold"
          >
            Exit
          </a>
        </div>
      </form>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-black">
          {response
            ? `${response}`
            : `Something went wrong, please try send me mail directly "fducekuce@gmail.com".`}
        </h2>
      </Modal>
    </>
  )
}
