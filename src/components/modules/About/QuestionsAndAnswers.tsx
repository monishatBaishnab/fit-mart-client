import { Accordion, AccordionItem } from "@nextui-org/react";
import FTPlus from "../../../assets/icons/FTPlus";
import FTMinus from "../../../assets/icons/FTMinus";
import FTSectionTitle from "../../ui/FTSectionTitle";
import FTCommentQuestion from "../../../assets/icons/FTCommentQuestion";

const faqs = [
  {
    key: "64c08d4c4e1e2b5b5c8f9e4d",
    question: "What is the warranty on FitMart products?",
    answer:
      "All FitMart products come with a standard one-year warranty covering defects in materials and workmanship. Extended warranty options are available for some items.",
  },
  {
    key: "64c08d4c4e1e2b5b5c8f9e4e",
    question: "Can I return a product if I’m not satisfied?",
    answer:
      "Yes, FitMart offers a 30-day return policy on most products. Please ensure the item is in its original condition and packaging for a full refund or exchange.",
  },
  {
    key: "64c08d4c4e1e2b5b5c8f9e4f",
    question: "Do you offer free shipping?",
    answer:
      "Free shipping is available on orders over $100. For orders below this amount, standard shipping fees apply.",
  },
  {
    key: "64c08d4c4e1e2b5b5c8f9e50",
    question: "How do I track my order?",
    answer:
      "Once your order has shipped, you will receive a tracking number via email. You can use this number to track your shipment on our website or through the carrier's tracking page.",
  },
];

const QuestionsAndAnswers = () => {
  return (
    <div>
      <div className="container grid gap-7 grid-cols-1 md:grid-cols-2">
        <div className="relative h-96">
          <div className="rounded-md overflow-hidden mr-7 h-[377px] w-[calc(100%_-_28px)]]">
            <img
              src="https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute right-0 -bottom-7 w-1/2 md:w-1/4 h-1/2 outline outline-4 outline-white rounded-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/14516256/pexels-photo-14516256.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-3">
          <FTSectionTitle
            icon={
              <FTCommentQuestion classNames={{ path: "stroke-indigo-600" }} />
            }
            title="Frequently asked questions"
            subtitle="FAQ Question"
          />

          <div className="ml-4">
            <Accordion defaultExpandedKeys={[faqs[0].key]}>
              {faqs?.map((faq) => (
                <AccordionItem
                  classNames={{
                    indicator: "data-[open=true]:-rotate-180",
                    base: [
                      "relative transition-all",
                      "after:absolute after:-left-5 after:top-3 after:bottom-3 after:w-1 after:bg-slate-300 after:rounded-sm",
                      "data-[open=true]:after:bottom-2 data-[open=true]:after:bg-indigo-600",
                    ],
                    trigger: "data-[focus-visible=true]:!outline-none",
                    title: "data-[open=true]:text-indigo-600",
                  }}
                  indicator={({ isOpen }) =>
                    isOpen ? (
                      <FTMinus
                        classNames={{
                          path: `${
                            isOpen ? "stroke-indigo-600" : "stroke-slate-500"
                          }`,
                        }}
                      />
                    ) : (
                      <FTPlus
                        classNames={{
                          path: `${
                            isOpen ? "stroke-indigo-600" : "stroke-slate-500"
                          }`,
                        }}
                      />
                    )
                  }
                  key={faq.key}
                  aria-label={faq.key}
                  title={faq.question}
                >
                  <div className="text-slate-500 text-justify">
                    {faq.answer}
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsAndAnswers;
