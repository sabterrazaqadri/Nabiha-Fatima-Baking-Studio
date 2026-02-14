"use client";

import { motion } from "framer-motion";
import { Search, MessageCircle, CheckCircle } from "lucide-react";

const WHATSAPP_NUMBER = "923292159108";
const WHATSAPP_MESSAGE = "Hi%20I%20would%20like%20to%20order%20a%20cake";

const steps = [
  {
    icon: Search,
    title: "Choose Your Cake Design",
    description: "Browse our gallery and find the perfect cake for your celebration, or share your custom design idea.",
  },
  {
    icon: MessageCircle,
    title: "Message Us on WhatsApp",
    description: "Click the WhatsApp button and tell us about your cake requirements, date, and any special requests.",
  },
  {
    icon: CheckCircle,
    title: "Confirm Details & Delivery",
    description: "We'll confirm your order details, finalize the design, and arrange delivery for your special day.",
  },
];

export default function HowToOrder() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--text-dark)] mb-4">
            How to Order
          </h2>
          <div className="w-24 h-1 bg-[var(--rose)] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
            Ordering your dream cake is simple and easy. Just follow these three steps!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[var(--rose)] text-white flex items-center justify-center text-xl font-bold shadow-lg z-10">
                {index + 1}
              </div>

              {/* Card */}
              <div className="bg-[var(--blush)] rounded-3xl p-8 h-full hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-md">
                  <step.icon className="w-8 h-8 text-[var(--rose)]" />
                </div>
                <h3 className="text-2xl font-semibold text-[var(--text-dark)] mb-4">
                  {step.title}
                </h3>
                <p className="text-[var(--text-light)] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/3 -right-4 w-8 h-0.5 bg-[var(--rose)]/30" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-6 h-6" />
            Start Your Order Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
