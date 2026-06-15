import React from 'react'

const StudentCards = () => {

    const student = [
        { name: "mani", std: 10, sec: "A", school: "Servite" },
        { name: "maran", std: 10, sec: "A", school: "Servite" },
        { name: "ranjith", std: 10, sec: "A", school: "Servite" },
        { name: "vishnu", std: 10, sec: "A", school: "Servite" }
    ]

    return (
        <>
            <div className="min-h-screen bg-gray-100 p-8">
                
                <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
                    Student Cards
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {student.map((e, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                {e.name}
                            </h2>

                            <div className="space-y-2 text-gray-600">
                                <h3>
                                    <span className="font-semibold">
                                        Standard:
                                    </span>{" "}
                                    {e.std}
                                </h3>

                                <h3>
                                    <span className="font-semibold">
                                        Section:
                                    </span>{" "}
                                    {e.sec}
                                </h3>

                                <h3>
                                    <span className="font-semibold">
                                        School:
                                    </span>{" "}
                                    {e.school}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default StudentCards