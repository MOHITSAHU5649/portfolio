
// Modern Portfolio Website - React + Tailwind CSS (Dark Aggressive Theme)

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="p-6 flex justify-between items-center shadow-md border-b border-gray-700">
        <h1 className="text-4xl font-extrabold tracking-widest text-red-500">MOHIT SAHU</h1>
        <nav className="space-x-6 text-lg">
          <a href="#about" className="hover:text-red-400">About</a>
          <a href="#skills" className="hover:text-red-400">Skills</a>
          <a href="#projects" className="hover:text-red-400">Projects</a>
          <a href="#certifications" className="hover:text-red-400">Certifications</a>
          <a href="#contact" className="hover:text-red-400">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section className="text-center py-20 bg-gradient-to-br from-gray-900 to-black" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-5xl md:text-7xl font-extrabold text-white">Tech-Savvy & Placement Ready</h2>
        <p className="mt-4 text-gray-400 text-xl max-w-3xl mx-auto">
          Java Developer | Spring Boot Enthusiast | Certified in AWS, Oracle Cloud, Azure | Club Secretary | Driven by Learning
        </p>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-12 px-6 md:px-20">
        <h3 className="text-3xl font-bold text-red-500 mb-4">About Me</h3>
        <p className="text-gray-300 text-lg">
          I’m an IT undergraduate passionate about building high-performance backend systems with Java and Spring Boot. I've developed projects like Revive Mart and Shiksha Hub. I have actively participated in national-level hackathons, and lead with responsibility as the Secretary of my college's English Club. I’m all about combining code, creativity, and community.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 px-6 md:px-20">
        <h3 className="text-3xl font-bold text-red-500 mb-4">Skills</h3>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-200">
          <li>Java</li>
          <li>Spring Boot</li>
          <li>AWS / Azure / Oracle Cloud</li>
          <li>SQL / DBMS</li>
          <li>HTML / CSS / JavaScript</li>
          <li>Bootstrap</li>
          <li>Python (Basic)</li>
          <li>Research Exposure: Edge AI</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 px-6 md:px-20">
        <h3 className="text-3xl font-bold text-red-500 mb-4">Projects</h3>
        <div className="space-y-6">
          <div className="bg-gray-800 p-4 rounded-xl shadow">
            <h4 className="text-2xl font-semibold">Revive Mart</h4>
            <p className="text-gray-400">
              A modern Spring Boot-based e-commerce platform selling refurbished educational tools like books, scientific calculators, drafters, and more. UI features image-based category management and dark theme integration.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl shadow">
            <h4 className="text-2xl font-semibold">Shiksha Hub</h4>
            <p className="text-gray-400">
              A futuristic educational tool featuring an AI-based assessment engine, virtual conferencing, and curated course recommendations based on PYQ analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-12 px-6 md:px-20">
        <h3 className="text-3xl font-bold text-red-500 mb-4">Certifications & Achievements</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Certified in AWS Cloud (AWS Academy)</li>
          <li>Microsoft Azure – Future Ready Talent Virtual Internship</li>
          <li>Oracle Cloud Infrastructure Certification</li>
          <li>NPTEL DBMS – IIT Kharagpur (Elite)</li>
          <li>Internal Hackathon Winner – Selected for SIH Nomination</li>
          <li>Secretary – English Club, College</li>
          <li>JavaScript Essentials Certificate</li>
          <li>Sailor Academy – Python & Problem Solving (Basic)</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-6 md:px-20">
        <h3 className="text-3xl font-bold text-red-500 mb-4">Contact Me</h3>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-xl text-gray-300 hover:text-red-400">
            <FaLinkedin />
          </a>
          <a href="#" className="text-xl text-gray-300 hover:text-red-400">
            <FaGithub />
          </a>
          <a href="mailto:youremail@example.com" className="text-xl text-gray-300 hover:text-red-400">
            <FaEnvelope />
          </a>
        </div>
      </section>

      <footer className="text-center text-gray-600 text-sm py-4">
        &copy; 2025 Mohit Sahu. All rights reserved.
      </footer>
    </div>
  );
}
