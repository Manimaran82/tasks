import React from 'react'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        About Us
      </h1>

      <p className="text-gray-700 text-lg mb-4 leading-relaxed">
        Welcome to our website! We are passionate about creating modern,
        responsive, and user-friendly web applications using the latest
        technologies. Our goal is to deliver high-quality digital experiences
        that are both functional and visually appealing.
      </p>

      <p className="text-gray-700 text-lg mb-4 leading-relaxed">
        This project is built using React, React Router, and Tailwind CSS.
        It demonstrates client-side routing, reusable components, and clean
        UI design practices commonly used in real-world applications.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed">
        Thank you for visiting our website. We are continuously learning and
        improving our skills to build better applications and provide the best
        experience for users.
      </p>
    </div>
  )
}

export default About