"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Birthday Cakes", "Anniversary Cakes", "Theme Cakes", "Seasonal Specials"];

const cakes = [
  {
    id: 1,
    category: "Birthday Cakes",
    image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&q=80",
    alt: "Colorful birthday cake with candles",
  },
  {
    id: 2,
    category: "Anniversary Cakes",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80",
    alt: "Elegant anniversary cake",
  },
  {
    id: 3,
    category: "Theme Cakes",
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=800&q=80",
    alt: "Creative theme cake",
  },
  {
    id: 4,
    category: "Birthday Cakes",
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&q=80",
    alt: "Chocolate birthday cake",
  },
  {
    id: 5,
    category: "Seasonal Specials",
    image: "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=800&q=80",
    alt: "Seasonal special cake",
  },
  {
    id: 6,
    category: "Theme Cakes",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80",
    alt: "Unicorn theme cake",
  },
  {
    id: 7,
    category: "Anniversary Cakes",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&q=80",
    alt: "Romantic anniversary cake",
  },
  {
    id: 8,
    category: "Birthday Cakes",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80",
    alt: "Strawberry birthday cake",
  },
  {
    id: 9,
    category: "Seasonal Specials",
    image: "https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=800&q=80",
    alt: "Holiday special cake",
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof cakes[0] | null>(null);

  const filteredCakes = selectedCategory === "All" 
    ? cakes 
    : cakes.filter(cake => cake.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--text-dark)] mb-4">
            Our Creations
          </h2>
          <div className="w-24 h-1 bg-[var(--rose)] mx-auto rounded-full mb-8" />
          <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
            Explore our collection of handcrafted cakes, each one made with love and attention to detail.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[var(--rose)] text-white shadow-lg scale-105"
                  : "bg-white text-[var(--text-dark)] hover:bg-[var(--blush)] shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCakes.map((cake, index) => (
              <motion.div
                key={cake.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
                onClick={() => setSelectedImage(cake)}
              >
                <Image
                  src={cake.image}
                  alt={cake.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">{cake.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </motion.button>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl w-full h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain rounded-2xl"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
