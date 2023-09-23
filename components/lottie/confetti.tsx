import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import confetti from './animations/confetti.json';

const ConfettiAnimation = ({ isAwesomeHovered }) => {
  const [confettiCount, setConfettiCount] = useState(3); // Initialize with 3 confetti pieces
  const [confettiComponents, setConfettiComponents] = useState([]);

  useEffect(() => {
    // Function to generate random confetti properties
    const generateRandomConfetti = () => {
      const newConfettiCount = Math.floor(Math.random() * 5) + 3; // Generate a random number between 3 and 7
      const newConfettiComponents = [];

      for (let i = 0; i < newConfettiCount; i++) {
        const randomTransform = isAwesomeHovered
          ? `translate(${Math.random() * window.innerWidth}px, ${
              Math.random() * window.innerHeight
            }px)`
          : 'none';
        
        const randomRotation = Math.random() * 360; // Generate a random rotation angle between 0 and 360
        const randomScale = 0.5 + Math.random(); // Generate a random scale factor between 0.5 and 1.5

        newConfettiComponents.push(
          <div
            key={i}
            style={{
              position: isAwesomeHovered ? 'fixed' : 'static',
              transform: `${randomTransform} rotate(${randomRotation}deg) scale(${randomScale})`,
              transition: 'transform 0.2s ease-in-out',
              zIndex: 9999,
            }}
          >
            <Lottie
              options={{
                loop: true,
                animationData: confetti,
                autoplay: true,
              }}
            />
          </div>
        );
      }

      setConfettiCount(newConfettiCount);
      setConfettiComponents(newConfettiComponents);
    };

    generateRandomConfetti();
  }, [isAwesomeHovered]);

  return <>{confettiComponents}</>;
};

export default ConfettiAnimation;
