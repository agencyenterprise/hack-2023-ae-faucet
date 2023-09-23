import Lottie from 'react-lottie';
import confetti from './animations/confetti.json';

const ConfettiAnimation = ({ isAwesomeHovered }) => {
  const confettiCount = 5;
  const confettiComponents = [];

  for (let i = 0; i < confettiCount; i++) {
    const randomTransform = isAwesomeHovered
      ? `translate(${Math.random() * window.innerWidth}px, ${
          Math.random() * window.innerHeight
        }px)`
      : 'none';

    confettiComponents.push(
      <div
        key={i}
        style={{
          position: isAwesomeHovered ? 'fixed' : 'static',
          transform: randomTransform,
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

  return <>{confettiComponents}</>;
};

export default ConfettiAnimation;
