"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Ahmed",
    review: "The birthday cake was absolutely stunning! My daughter was thrilled with the unicorn design. It tasted as amazing as it looked. Highly recommend!",
    rating: 5,
  },
  {
    name: "Ali Hassan",
    review: "Ordered an anniversary cake and it exceeded all expectations. Beautiful presentation, delicious taste, and delivered on time. Will definitely order again!",
    rating: 5,
  },
  {
    name: "Fatima Khan",
    review: "Best custom cakes in town! The attention to detail is incredible. Made our celebration extra special. Thank you for the wonderful service!",
    rating: 5,
  },
  {
    name: "Zainab Malik",
    review: "Absolutely loved the theme cake for my son's birthday party. All the guests were impressed! Fresh, delicious, and beautifully crafted.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--text-dark)] mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-[var(--rose)] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our happy customers have to say!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[var(--rose)] flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review */}
              <p className="text-[var(--text-light)] leading-relaxed mb-6 italic">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              {/* Name */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--blush)] flex items-center justify-center">
                  <span className="text-[var(--rose)] font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-[var(--text-dark)]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[var(--text-light)]">
                    Verified Customer
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
