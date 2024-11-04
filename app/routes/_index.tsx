import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "DSA Runtime Trainer" },
    {
      name: "description",
      content: "Practice Your Runtime Complexity Knowledge!",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-left">
      <h1 className="text-3xl font-bold mb-4">Runtime Complexity Practice</h1>

      <p className="text-lg mb-6 max-w-lg text-gray-700">
        Sharpen your Data Structures and Algorithms (DSA) skills by analyzing
        the runtime complexities of different pieces of code. Test your
        knowledge and improve your understanding of algorithm efficiency. Feel
        free to contribute with either more questions, or new suggestions!
      </p>

      <a
        href="https://github.com/your-github-profile/your-repo"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline mb-6"
      >
        Contribute on GitHub
      </a>

      <p className="text-sm text-gray-600">
        Created by <span className="font-semibold">Majd Al Mnayer</span>
      </p>
    </div>
  );
}
