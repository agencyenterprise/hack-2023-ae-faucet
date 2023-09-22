import Lottie from 'react-lottie';

import cubeShifter from './animations/cubeShifter.json';

const LottieAnimation = () => (
  <Lottie
    options={{
      loop: true,
      animationData: cubeShifter,
      autoplay: true,
    }}
  />
);

export default LottieAnimation;
