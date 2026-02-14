"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Cookie } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    icon: Cookie,
    title: "Fresh Ingredients",
    description: "Only the finest, freshest ingredients in every cake",
  },
  {
    icon: Sparkles,
    title: "Custom Designs",
    description: "Unique designs tailored to your celebration",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every cake is crafted with passion and care",
  },
];

export default function About() {
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
            About Us
          </h2>
          <div className="w-24 h-1 bg-[var(--rose)] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/icon.jpg"
              alt="Baker creating custom cake"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-[var(--text-light)] leading-relaxed mb-8">
              Welcome to <span className="font-semibold text-[var(--text-dark)]">Nabiha Fatima Baking Studio</span>, 
              where every cake tells a story. As a passionate home baker, I pour my heart into creating custom cakes 
              that make your special moments even more memorable.
            </p>
            <p className="text-lg text-[var(--text-light)] leading-relaxed mb-12">
              From birthdays to anniversaries, and every celebration in between, each cake is handcrafted with love, 
              using only the finest ingredients. Your joy is my inspiration, and your satisfaction is my greatest reward.
            </p>

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--blush)] hover:bg-[var(--rose)]/20 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                    <highlight.icon className="w-6 h-6 text-[var(--rose)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text-dark)] mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-[var(--text-light)]">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
