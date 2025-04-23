import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-300">
          About GEICO
        </h1>

        <section className="mb-10">
          <p className="text-lg leading-7 mb-4">
            GEICO (Government Employees Insurance Company) was founded in 1936
            with a mission to serve U.S. government employees and military
            personnel. Over time, it has grown to become the
            <strong> third-largest private passenger auto insurer</strong> in
            the United States.
          </p>
          <p className="text-lg leading-7">
            Now a wholly owned subsidiary of Berkshire Hathaway, led by Warren
            Buffett, GEICO is known for its commitment to affordability,
            service, and innovation.
          </p>
        </section>

        <section className="mb-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
              Why Choose GEICO?
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>24/7 Roadside Assistance</li>
              <li>Digital Insurance ID Cards</li>
              <li>Easy Photo Estimate Tool</li>
              <li>AI-powered Virtual Assistant</li>
              <li>Vehicle Care powered by CARFAX®</li>
              <li>Fast online claims and customer service</li>
            </ul>
          </div>
          <img
            src="https://media.geico.com/images/public/images/desktop/homepage/gecko-homepage-hero.png"
            alt="GEICO Mascot"
            className="rounded-xl shadow-lg"
          />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
            Services We Offer
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm md:text-base">
            <div className="bg-blue-50 dark:bg-blue-800 p-4 rounded-lg shadow">
              <h3 className="font-bold mb-1">Auto Insurance</h3>
              <p>Comprehensive and collision coverage for personal vehicles.</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-800 p-4 rounded-lg shadow">
              <h3 className="font-bold mb-1">Homeowners & Renters</h3>
              <p>Coverage for property, valuables, and liability.</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-800 p-4 rounded-lg shadow">
              <h3 className="font-bold mb-1">Motorcycle & RV</h3>
              <p>Specialized policies for recreational and off-road vehicles.</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-800 p-4 rounded-lg shadow">
              <h3 className="font-bold mb-1">Business Insurance</h3>
              <p>General liability, professional liability, and BOP coverage.</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-800 p-4 rounded-lg shadow">
              <h3 className="font-bold mb-1">Identity Protection</h3>
              <p>Secure your digital identity and credit profile.</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-800 p-4 rounded-lg shadow">
              <h3 className="font-bold mb-1">Military Discounts</h3>
              <p>Exclusive offers for active duty and veterans.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 text-center">
          <p className="text-md text-gray-600 dark:text-gray-400 italic">
            "GEICO isn’t just an insurance company—it’s peace of mind in your
            pocket."
          </p>
        </section>
      </motion.div>
    </div>
  );
}

export default About;
