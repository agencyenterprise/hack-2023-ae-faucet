import { useState } from 'react';

export default function HomeBanner() {
  const gifUrl = '/party_parrot.gif';
  const [showText, setShowText] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 mb-4 md:items-center md:flex-row">
        <div className="flex flex-col justify-center">
          <h1 className="text-white text-center font-extrabold text-[48px] md:text-[58px] md:leading-[63px]">
            GET FREE TOKENS FROM THE WORLD'S<br />
            MOST{' '}
            <span
              onMouseEnter={() => setShowText(true)}
              onMouseLeave={() => setShowText(false)}
            >
              <a
                href="https://ae.studio"
                className="text-white text-center font-extrabold text-[48px] md:text-[58px] md:leading-[63px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                AWESOME
              </a>
            </span>{' '}
            AGENCY
            <span className="font-semibold text-[16px]"> (That's us)</span>
          </h1>
        </div>
      </div>
      {showText && (
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
          <br />
          ... AND CAN DO THE SAME FOR YOU
        </div>
      )}
      <div
        id="gif-container"
        className="flex flex-col items-center"
        style={{
          display: showText ? 'block' : 'none',
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
