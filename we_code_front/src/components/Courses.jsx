import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Courses = () => {
  const courses = [
    'Competitive Programmer',
    'Backend Developer',
    'Frontend Developer',
    'DevOps Engineer',
    'Database Engineer'
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="text-white text-2xl md:text-4xl font-semibold">
        <Typewriter
          words={courses}
          loop={true}
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={1000}
        />
      </div>
    </div>
  );
};

export default Courses;
