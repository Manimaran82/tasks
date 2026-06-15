import React from 'react'

const SkillsCard = ({ skills }) => {
  return (
    <div className="max-w-md w-full bg-white rounded-xl shadow-md p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">User Skills</h1>

      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((e, i) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium"
          >
            {e}
          </span>
        ))}
      </div>
    </div>
  )
}

const Skills = ({ homeName }) => {
  const skillsArray = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js"
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div>
        <div className="mb-4 text-center text-xl font-semibold">
          {homeName}
        </div>

        <SkillsCard skills={skillsArray} />
      </div>
    </div>
  )
}

export default Skills