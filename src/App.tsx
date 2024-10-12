// src/App.tsx
import React from 'react';
import SurveyPage from './pages/SurveyPage';

const App: React.FC = () => {
  return (
    <div className="bg-purple-600 h-screen flex justify-center items-center w-full">
      <div className='max-w-[1350px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full'>
      <SurveyPage />
      </div>
    </div>
  );
};

export default App;