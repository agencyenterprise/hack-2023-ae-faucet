import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const links = [
  {
    title: "ChatGPT / GPT-3",
    url: "/chatgpt-gpt3",
    description:
      "A language model trained by OpenAI. It is designed to generate human-like responses to input, allowing it to hold conversations with people.",
    icon: ChatBubbleBottomCenterIcon,
  },
];

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:px-8">
      <h1 className="text-2xl text-orange-500">
        {"Oops... This page doesn't exist"}
      </h1>
      <Link href="/">Go to Home</Link>
    </main>
  );
}
