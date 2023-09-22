import { useState } from 'react'; // Import useState

export default function HomeBanner() {
  const gifUrl = '/party_parrot.gif'; // Adjust the path as needed
  const [showText, setShowText] = useState(false); // State to control text visibility

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 mb-4 md:items-center md:flex-row">
        <div className="flex flex-col justify-center">
          <h1 className="text-white text-center font-extrabold text-[48px] md:text-[58px] md:leading-[63px]">
            GET FREE TOKENS FROM THE WORLD'S<br />
            MOST{' '}
            <span
              className="text-white text-center font-extrabold text-[48px] md:text-[58px] md:leading-[63px]"
              onMouseEnter={() => setShowText(true)} // Show text on hover
              onMouseLeave={() => setShowText(false)} // Hide text on hover out
            >
              AWESOME
            </span>{' '}
            AGENCY
            <span className="font-semibold text-[16px]"> (That's us)</span>
          </h1>
        </div>
      </div>
      {showText && ( // Render the text only when showText is true
        <div
          className="text-white text-center font-bold text-[20px] mb-4"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '20px',
            borderRadius: '5px',
            whiteSpace: 'nowrap',
          }}
        >
          🎉 WE BUILT AND SOLD A STARTUP! 🎉
          <br></br>
          ... AND CAN DO THE SAME FOR YOU
        </div>
      )}
      <div
        id="gif-container"
        className="flex flex-col items-center"
        style={{
          display: showText ? 'block' : 'none', // Show the GIF container when showText is true
          position: 'absolute',
          top: '85%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
        }}
      >
        <img
          src={gifUrl}
          alt="Awesome GIF"
          width="200"
          height="200"
        />
      </div>
    </>
  );
}
