"use client"

import PersonalInfo from "@/components/userdetails/PersonalInfo"
import Services from "@/components/userdetails/Services"

export default function Home() {
  return (
    <div>

      {/* Personal Info Section */}
      <section
        id="personal-info"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <PersonalInfo />
      </section>

      {/* My Skills & Tools Section */}
      <section
        id="skills-tools"
        className="min-h-screen flex items-center justify-center bg-gray-200"
      >
        <Services />
      </section>

      {/* My Projects Section 
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center bg-gray-300"
      >
        <h1 className="text-4xl font-bold">My Projects Section</h1>
      </section>

      Certifications & Courses Section
      <section
        id="certifications"
        className="min-h-screen flex items-center justify-center bg-gray-400"
      >
        <h1 className="text-4xl font-bold">Certifications & Courses Section</h1>
      </section>
    */}

      {/* Client Reviews Section */}
      <section
        id="reviews"
        className="min-h-screen flex items-center justify-center bg-gray-500 text-white"
      >
        <h1 className="text-4xl font-bold">Client Reviews Section</h1>
      </section>

      {/* Contact Section */}
      <section
        id="contact-info"
        className="min-h-screen flex flex-col items-center justify-center bg-gray-700 text-white"
      >
        <h1 className="text-4xl font-bold">Client Contact Section</h1>
        <div>
          <a href="tel:+971526418106" className="text-blue-500 font-semibold">
            +971 52 641 8106
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hamza1958712@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold hover:underline">
            hamza1958712@gmail.com
          </a>
        </div>
      </section>

    </div>
  )
}
