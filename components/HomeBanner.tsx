import Image from 'next/image';

export default function HomeBanner({ isAwesomeHovered, setAwesomeHovered }) {
  const gifUrl = '/party_parrot.gif';
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 mb-4 md:items-center md:flex-row">
        <div className="flex flex-col justify-center">
          <h1 className="text-white text-center font-extrabold text-[48px] md:text-[58px] md:leading-[63px]">
            {"GET FREE TOKENS FROM THE WORLD'S"}<br />
            MOST{' '}
            <span
              onMouseEnter={() => setAwesomeHovered(true)}
              onMouseLeave={() => setAwesomeHovered(false)}
            >
              <a
                href="https://ae.studio"
                className="text-white text-center font-extrabold text-[48px] md:text-[58px] md:leading-[63px] awesome-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                AWESOME
              </a>
            </span>{' '}
            AGENCY
            <span className="font-semibold text-[16px]">{" (That's us)"}</span>
          </h1>
        </div>
      </div>
      {isAwesomeHovered && (
        <div
          className="text-white text-center font-bold text-[35px] mb-4"
          style={{
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
          display: isAwesomeHovered ? 'block' : 'none',
          position: 'absolute',
          top: '85%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
        }}
      >
        <Image
          src={gifUrl}
          alt="Awesome GIF"
          width="200"
          height="200"
        />
      </div>
    </>
  );
}
