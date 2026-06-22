import { Link } from "react-router-dom";
import { assignments } from "../data/AssignmentList";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
      
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-blue-600 rounded-2xl mb-4">
            <svg 
              className="w-10 h-10 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            React Assignments
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore and complete your React.js assignments. Click on any assignment to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map((a, index) => (
            <Link
              key={a.id}
              to={`/${a.id}`}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full group-hover:text-white group-hover:bg-blue-700 transition-colors duration-300">
                    #{index + 1}
                  </span>
                  <svg 
                    className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                  {a.title}
                </h2>
                <p className="mt-2 text-sm text-gray-500 group-hover:text-blue-100 transition-colors duration-300">
                  Click to view assignment details →
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;