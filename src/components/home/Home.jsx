// import React from "react";

// const Home = () => {
//   return (
//     <div className="flex w-full h-full justify-center items-center">
//       <div className="flex flex-col items-center mt-[9rem] lg:mt-[12rem] gap-3">
//         <h1 className="text-4xl md:text-5xl text-center lg:text-6xl font-bold italic text-white">
//           <span className="text-blue-400">Welcome</span> to Our <span className="animate-pulse">chit chat</span> app
//         </h1>
//         <h2 className=" text-xl text-center lg:text-3xl font-semibold text-blue-100">create your account and let's start conversation</h2>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect } from "react";
import anime from "animejs";
import './home.css';

const Home = () => {
  useEffect(() => {
    // Wrap every letter in a span
    const textWrapper = document.querySelector('.ml6 .letters');
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    }

    anime.timeline({ loop: true })
      .add({
        targets: '.ml6 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
      }).add({
        targets: '.ml6',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  }, []);

  return (
    <div className="flex w-full h-full justify-center items-center p-10">
      <div className="flex flex-col items-center mt-[7rem] lg:mt-[12rem] gap-3">
        <h1 className="ml6 text-xl text-center font-normal italic text-white">
          <span className="text-wrapper letters">
            Welcome to Our chit chat app
          </span>
        </h1>
        <h2 className="text-xl  text-center lg:text-3xl font-semibold text-blue-100">
          Create your account and let's start the <span className="text-blue-400">conversation</span>
        </h2>
      </div>
    </div>
  );
};

export default Home;



