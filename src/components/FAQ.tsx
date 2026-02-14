"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How many days in advance should I order?",
    answer: "We recommend placing your order at least 3-5 days in advance to ensure availability and allow enough time for custom design work. For elaborate custom designs, please order 7-10 days ahead. However, we'll do our best to accommodate last-minute orders when possible!",
  },
  {
    question: "Do you offer custom designs?",
    answer: "Absolutely! Custom designs are our specialty. Share your ideas, theme, colors, or inspiration images with us on WhatsApp, and we'll work with you to create the perfect cake for your celebration. Every cake is uniquely crafted to match your vision.",
  },
  {
    question: "Do you provide delivery?",
    answer: "Yes, we offer delivery services within the city. Delivery charges may vary based on your location. We ensure your cake arrives fresh and in perfect condition. Contact us on WhatsApp to confirm delivery availability for your area.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including bank transfer, mobile payment apps, and cash on delivery. Payment details will be shared when you confirm your order through WhatsApp. A deposit may be required for large custom orders.",
  },
  {
    question: "What flavors do you offer?",
    answer: "We offer a wide variety of flavors including chocolate, vanilla, red velvet, strawberry, lemon, and more! We can also create custom flavor combinations. Let us know your preferences when placing your order, and we'll make sure your cake tastes as amazing as it looks.",
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer: "Yes! We can create cakes for various dietary needs including eggless options. Please inform us about any dietary restrictions or allergies when placing your order so we can accommodate your requirements safely.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--text-dark)] mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-[var(--rose)] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[var(--text-light)]">
            Got questions? We&apos;ve got answers!
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--blush)] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[var(--rose)]/10 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-[var(--text-dark)] pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-[var(--rose)]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-[var(--text-light)] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
