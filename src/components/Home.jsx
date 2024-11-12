import React from 'react';
import customSvg from '../assets/cloud.svg';
// import backgroundImage from '../assets/bgimg.png';
import backgroundImage from '../assets/bgimg4.png' // adjust the path as needed
import BadgeCreator from './BadgeCreator';
import Footer from './Footer';
import BadgeTry from './BadgeTry';
import CloudBox from './CloudBox';
import sidebarSvg from '../assets/ele1.svg'

function Home() {
  return (
    <div
      className="h-screen relative flex flex-col justify-between "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* <div className='flex justify-end align-bottom w-screen '>

      <img
          src={customSvg}
          alt="Sidebar decoration"
          className="absolute inset-24 max-w-96 flex justify-end p-6 align-middle"
          style={{
            height:'20%',
            zIndex: 1, // Behind the content
            backgroundRepeat: 'no-repeat',
          }}
          />
          </div> */}
    {/* <img
        src={sidebarSvg}
        alt="Sidebar decoration"
        className="absolute top-28 -left-8 h-full"
        style={{
          height: '10%', // Adjust to desired height
          width: 'auto', // Maintain aspect ratio
          objectFit: 'contain',
          transform: 'rotate(90deg)',
          zIndex: 1, // Ensure it appears above the background
        }}
      />   */}
      <div className="flex-grow">
        <BadgeCreator />
        {/* <BadgeTry/> */}
        {/* <CloudBox/>  */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
