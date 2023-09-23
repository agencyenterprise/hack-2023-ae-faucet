import Lottie from 'react-lottie';

import confetti from './animations/confetti.json';

const ConfettiAnimation = () => (
  <Lottie
    options={{
      loop: true,
      animationData: confetti,
      autoplay: true,
    }}
  />
);

export default ConfettiAnimation;
