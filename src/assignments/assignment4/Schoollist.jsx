import React from 'react'

const Schoollist = ({ schools, school }) => {
    const list = schools ?? school ?? []

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
                School Courses Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {list.map((schoolItem) => (
                    <div
                        key={schoolItem.id}
                        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
                    >
                        <h2 className="text-xl font-bold text-gray-800 mb-2">
                            {schoolItem.schoolName}
                        </h2>

                        <p className="text-gray-600 mb-4">
                            📍 {schoolItem.city}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {schoolItem.courses?.map((course, i) => (
                                <span
                                    key={i}
                                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {course}
                                </span>
                            ))}
                        </div>

                        <hr className="my-4" />

                        <div className="text-sm text-gray-600 space-y-1">
                            <p>
                                <span className="font-semibold">
                                    Principal:
                                </span>{" "}
                                {schoolItem.principal?.name}
                            </p>

                            <p>
                                <span className="font-semibold">
                                    Students:
                                </span>{" "}
                                {schoolItem.students}
                            </p>

                            <p>
                                <span className="font-semibold">
                                    Teachers:
                                </span>{" "}
                                {schoolItem.teachers}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Schoollist