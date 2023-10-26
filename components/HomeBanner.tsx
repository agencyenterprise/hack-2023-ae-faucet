import Image from 'next/image';

export default function HomeBanner({ isAwesomeHovered, setAwesomeHovered }) {
  const gifUrl = "/party_parrot.gif";
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 my-5 md:items-center md:flex-row">
        <div className="flex flex-col justify-center">
          <h1 className="text-white text-center font-extrabold text-[48px] md:text-[58px] md:leading-[63px]">
            {"GET FREE TOKENS FROM THE WORLD'S"}
            <br />
            MOST{" "}
            <span
              onMouseEnter={() => setAwesomeHovered(true)}
              onMouseLeave={() => setAwesomeHovered(false)}
              onClick={() => {
                if (window?.innerWidth < 600) {
                  setAwesomeHovered(!isAwesomeHovered);
                }
              }}
            >
              <span className="animate-bounce text-white text-center font-extrabold text-[48px] md:text-[58px] md:leading-[63px] awesome-link">
                AWESOME{" "}
                <span className="sm:hidden block text-[10px]">click here</span>
              </span>
            </span>{" "}
            AGENCY
            <span className="font-semibold text-[16px]">{" (THAT'S US)"}</span>
          </h1>
        </div>
      </div>
      {isAwesomeHovered && (
        <div className="flex w-full justify-center  text-white text-center font-bold text-[30px] mb-4 p-[20px] leading-[60px] rounded-[5px]">
          🎉 WE BUILT AND SOLD A STARTUP! 🎉
          <br />
          ... AND CAN DO THE SAME FOR YOU
        </div>
      )}
      <div
        id="gif-container"
        className={`flex flex-col items-center absolute top-[20%] sm:top-[80%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[9999] ${
          isAwesomeHovered ? "block" : "hidden"
        }`}
      >
        <Image src={gifUrl} alt="Awesome GIF" width="200" height="200" />
      </div>
    </>
  );
}
