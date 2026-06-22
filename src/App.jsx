import React from 'react';
import AppRoutes from './route/AppRoutes';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
      
        <div className="bg-white rounded-t-xl shadow-sm p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            📚 React Assignments
          </h1>
          <p className="text-center text-gray-500 text-sm mt-1">
            Completed  assignments 
          </p>
        </div>

       
        <div className="bg-white rounded-b-xl shadow-sm p-6">
          <AppRoutes />
        </div>

        
      </div>
    </div>
  );
};

export default App;