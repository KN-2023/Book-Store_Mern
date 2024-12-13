import React from 'react';

import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div 
      className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12' 
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: '#f9fafb', // Light background color
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
      }}
    >
      <div className='md:w-1/2 w-full flex items-center md:justify-end'>
        <img src={bannerImg} alt="" />
      </div>
      
      <div className='md:w-1/2 w-full'>
        <h1 
          className='md:text-5xl text-2xl font-medium mb-7' 
          style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#1e293b',
            textShadow: '1px 1px 5px rgba(0, 0, 0, 0.1)',
          }}
        >
          Ketaki's Book Store
        </h1>
        <p 
          className='mb-10' 
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.6',
            color: '#64748b',
          }}
        >
          Dive into a world of imagination, knowledge, and adventure. Your next favorite story is just a click away – grab your book now!
        </p>

        <button 
          className='px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold text-lg rounded-md shadow-md transition-all duration-300'
          style={{
            fontSize: '1.125rem',
            fontWeight: '600',
            letterSpacing: '0.5px',
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
