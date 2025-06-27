import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import { useState } from "react";

interface faqDataType {
  question: string;
  answer: string;
}

const faqData: faqDataType[] = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima optio vero explicabo eos aut iste nemo voluptatem neque, non ea minus sapiente laudantium debitis, soluta beatae nihil labore possimus quis.",
  },
  {
    question: "Consectetur adipiscing elit, sed diam nonummy?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima optio vero explicabo eos aut iste nemo voluptatem neque, non ea minus sapiente laudantium debitis, soluta beatae nihil labore possimus quis.",
  },
  {
    question: "Sed diam nonummy nibh euismod tincidunt ut laoreet?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima optio vero explicabo eos aut iste nemo voluptatem neque, non ea minus sapiente laudantium debitis, soluta beatae nihil labore possimus quis.",
  },
];

export default function FrequentlyAskQuestion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-6">
        {/* Left Section */}
        <div className="flex-1 bg-white rounded-lg p-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet.
          </p>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-800 transition duration-300">
            Ask a Question
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Right Section - FAQ List */}
        <div className="flex-1 bg-white rounded-lg p-6">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b last:border-b-0 py-4 gap-2">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <h2 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h2>
                {openIndex === index ? (
                  <ChevronUp size={24} className="text-gray-600" />
                ) : (
                  <ChevronDown size={24} className="text-gray-600" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-2 text-base text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
