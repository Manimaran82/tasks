import React from 'react'

const SchoolCards = () => {
     const schools = [
        { schoolName: "ABC School",
          courses: ["LKG", "UKG", "Primary", "High School"]},

        { schoolName: "Green Valley School",
            courses: ["LKG", "UKG", "Primary"] },
        { schoolName: "Sunrise International School",
            courses: ["Primary", "Middle School", "High School"]}
    ]
  return (
   <>
   <div className="p-4">
    <h1 className="text-3xl font-bold mb-6">
        School Courses Dashboard
    </h1>

    <div className="space-y-6">
        {schools.map((school, i) => (
            <div
                key={i}
                className="border rounded-lg p-4 shadow-sm"
            >
                <h2 className="text-xl font-semibold mb-3">
                    {school.schoolName}
                </h2>

                <div className="flex flex-wrap gap-2">
                    {school.courses.map((course, index) => (
                 <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                            {course}
                        </span>
                    ))}
                </div>
            </div>
        ))}
    </div>
</div>
   </>
  )
}

export default SchoolCards
