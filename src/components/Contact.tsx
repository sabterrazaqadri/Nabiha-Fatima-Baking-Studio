"use client";

import { motion } from "framer-motion";
import { MessageCircle, Instagram, Clock, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "923292159108";
const WHATSAPP_MESSAGE = "Hi%20I%20would%20like%20to%20order%20a%20cake";

export default function Contact() {
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
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-[var(--rose)] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
            Ready to order your dream cake? We&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[var(--text-dark)] mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {/* WhatsApp */}
                <motion.a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-dark)] mb-1">WhatsApp</p>
                    <p className="text-[var(--text-light)]">+92 329 2159108</p>
                    <p className="text-sm text-green-600 mt-1">Click to message us</p>
                  </div>
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href="https://instagram.com/nabihafatimabakingstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-dark)] mb-1">Instagram</p>
                    <p className="text-[var(--text-light)]">@nabihafatimabakingstudio</p>
                    <p className="text-sm text-pink-600 mt-1">Follow for daily inspiration</p>
                  </div>
                </motion.a>

                {/* Business Hours */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--rose)] flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-dark)] mb-1">Business Hours</p>
                    <p className="text-[var(--text-light)]">Monday - Saturday</p>
                    <p className="text-[var(--text-light)]">9:00 AM - 8:00 PM</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--soft-brown)] flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-dark)] mb-1">Location</p>
                    <p className="text-[var(--text-light)]">Karachi, Pakistan</p>
                    <p className="text-sm text-[var(--text-light)] mt-1">Delivery available citywide</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-[var(--text-dark)] mb-6">
              Quick Message
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name");
                const message = formData.get("message");
                const whatsappText = `Hi, I'm ${name}. ${message}`;
                window.open(
                  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`,
                  "_blank"
                );
              }}
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-[var(--blush)] focus:border-[var(--rose)] focus:outline-none transition-colors duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[var(--blush)] focus:border-[var(--rose)] focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your cake requirements..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                Send via WhatsApp
              </motion.button>

              <p className="text-sm text-[var(--text-light)] text-center">
                This will open WhatsApp with your message
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
