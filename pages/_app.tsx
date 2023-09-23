import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LeftSideTree from "@/components/LeftSideTree";
import RightSideTree from "@/components/RightSideTree";
import { useState } from 'react';
import ConfettiAnimation from "@/components/lottie/confetti";


function MyApp({ Component, pageProps }) {
  const [isAwesomeHovered, setAwesomeHovered] = useState(false);
  const normalBackground = `from-[#F8974B] to-[#F85C4B]`
  const easterBackground = `from-[#2FDAFF] to-[#C92FFF]`

  return (
    <div className={`min-h-screen bg-gradient-to-b ${isAwesomeHovered ? easterBackground : normalBackground} overflow-y-hidden overflow-x-hidden`}>
      {!isAwesomeHovered ? (<>
      <div className="absolute bottom-0 left-[-150px] blur-sm hidden lg:block">
      <LeftSideTree />
    </div>
    <div className="absolute bottom-0 right-[-180px] blur-sm overflow-x-hidden hidden lg:block">
      <RightSideTree />
    </div>
    </>) :
    (<>
      <div className="absolute bottom-74 left-0 hidden lg:block">
      <ConfettiAnimation/>
    </div>
    <div className="absolute bottom-96 right-0 overflow-x-hidden hidden lg:block">
      <ConfettiAnimation/>
    </div>
    </>)
    }

      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/agencyenterprise/sds-utils@latest/dist/packages/badge/src/lib/badge.css"
        />
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Handjet:wght@400;700&family=Inter:wght@400;600;700&family=Permanent+Marker&family=Russo+One&display=swap');`}
        </style>
        <link rel="icon" type="image/png" href="/images/coding-logo.png" />

        <title>AE Mumbai Faucet</title>
        <meta name="title" content="AE Mumbai Faucet" />
        <meta
          name="description"
          content="Get tokens with the most awesome agency in the world!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://faucet.ae.studio/" />
        <meta property="og:title" content="AE Mumbai Faucet" />
        <meta
          property="og:description"
          content="Get tokens with the most awesome agency in the world!"
        />
        <meta
          property="og:image"
          content="https://faucet.ae.studio/og.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://faucet.ae.studio/"
        />
        <meta property="twitter:title" content="AE Mumbai Faucet" />
        <meta
          property="twitter:description"
          content="Get tokens with the most awesome agency in the world!"
        />
        <meta
          property="twitter:image"
          content="https://faucet.ae.studio/og.png"
        ></meta>
      </Head>
      {/* {!isAwesomeHovered && (
              <div className="w-full flex flex-row justify-center items-center !rounded-none px-2 py-2 bg-gradient-to-b from-[#2FDAFF] to-[#C92FFF]">
              <a
                href="https://ae.studio"
                target="noopener _blank"
                rel="noopener noreferrer"
                className="text-sm text-center text-white uppercase"
              >
                <span className="mr-3">🎉</span>
                {"We built and sold a startup. Let's help you next."}
                <span className="ml-3">🎉</span>
              </a>
            </div>

      )} */}
      <div className="w-full flex flex-row justify-center items-center !rounded-none px-2 py-2 bg-gradient-to-b from-[#2FDAFF] to-[#C92FFF]">
        <a
          href="https://ae.studio"
          target="noopener _blank"
          rel="noopener noreferrer"
          className="text-sm text-center text-white uppercase"
        >
          <span className="mr-3">🎉</span>
          {"We built and sold a startup. Let's help you next."}
          <span className="ml-3">🎉</span>
        </a>
      </div>
      <div className="flex flex-col justify-between w-full max-w-screen-xl px-4 mx-auto sm:px-2">
        <Navbar />
        <Component {...{...pageProps, setAwesomeHovered:setAwesomeHovered, isAwesomeHovered:isAwesomeHovered}}/>
        <ToastContainer
          autoClose={5000}
          position="top-center"
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
        />
        <div className="flex-grow" />
        {/* <footer className="flex flex-row items-center justify-center gap-4 p-2 mt-32 text-ae-orange">
          <h1 className="text-sm text-gray-500">{"Made with ❤️ by"}</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="131"
            height="33"
            viewBox="0 0 131 33"
            fill="none"
          >
            <path
              d="M43.0293 22.6014L48.2318 10.3005H48.3449L53.5474 22.6014H51.3824L47.7148 13.2703L49.072 12.3453L44.8873 22.6014H43.0293ZM46.293 18.2198H50.3161L50.9623 19.8264H45.7275L46.293 18.2198ZM55.8775 10.7874H63.6813V12.6049H57.7679V15.7531H63.035V17.5869H57.7679V20.7838H63.9075V22.6014H55.8775V10.7874ZM65.6395 21.6115C65.6395 21.3302 65.7419 21.0976 65.9465 20.9137C66.1512 20.7189 66.3774 20.6216 66.6251 20.6216C66.8513 20.6216 67.0667 20.7189 67.2714 20.9137C67.476 21.0976 67.5784 21.3302 67.5784 21.6115C67.5784 21.9144 67.476 22.1578 67.2714 22.3417C67.0667 22.5148 66.8513 22.6014 66.6251 22.6014C66.3774 22.6014 66.1512 22.5148 65.9465 22.3417C65.7419 22.1578 65.6395 21.9144 65.6395 21.6115ZM76.0758 13.1891C75.6557 12.9727 75.2087 12.7888 74.7348 12.6374C74.2608 12.4751 73.8084 12.3939 73.3776 12.3939C72.7959 12.3939 72.3328 12.5238 71.9881 12.7834C71.6542 13.0431 71.4872 13.4001 71.4872 13.8545C71.4872 14.179 71.6057 14.4657 71.8427 14.7146C72.0797 14.9526 72.3813 15.1635 72.7475 15.3474C73.1137 15.5205 73.5015 15.6882 73.9108 15.8505C74.2662 15.9803 74.6163 16.1372 74.961 16.3211C75.3164 16.4942 75.6342 16.7106 75.9142 16.9703C76.1943 17.2299 76.4151 17.5545 76.5767 17.9439C76.749 18.3226 76.8352 18.7932 76.8352 19.3558C76.8352 19.9724 76.679 20.5404 76.3666 21.0597C76.0543 21.5682 75.6073 21.9739 75.0256 22.2768C74.444 22.5797 73.7331 22.7312 72.8929 22.7312C72.4082 22.7312 71.9289 22.6771 71.4549 22.5689C70.9918 22.4607 70.5501 22.3147 70.1301 22.1308C69.71 21.936 69.3222 21.7196 68.9668 21.4816L69.8069 20.0049C70.0654 20.1996 70.3616 20.3781 70.6956 20.5404C71.0295 20.7027 71.3741 20.8325 71.7296 20.9299C72.085 21.0164 72.419 21.0597 72.7313 21.0597C73.0652 21.0597 73.3938 21.0056 73.7169 20.8974C74.0508 20.7892 74.3255 20.6107 74.5409 20.3619C74.7671 20.1131 74.8802 19.7831 74.8802 19.372C74.8802 19.0366 74.7832 18.7499 74.5894 18.5119C74.3955 18.2739 74.1424 18.0683 73.83 17.8952C73.5284 17.7113 73.1945 17.549 72.8283 17.4084C72.462 17.2678 72.0851 17.1109 71.6973 16.9378C71.3203 16.7647 70.9702 16.5537 70.6471 16.3049C70.3239 16.0453 70.0601 15.7315 69.8554 15.3637C69.6507 14.9958 69.5484 14.5415 69.5484 14.0005C69.5484 13.3514 69.6992 12.7888 70.0008 12.3128C70.3024 11.8368 70.7171 11.4581 71.2449 11.1768C71.7835 10.8956 72.4028 10.7441 73.1029 10.7225C73.9323 10.7225 74.6378 10.8252 75.2195 11.0308C75.8119 11.2255 76.3343 11.4635 76.7867 11.7448L76.0758 13.1891ZM78.7433 10.7874H86.6117V12.6049H83.5742V22.6014H81.7V12.6049H78.7433V10.7874ZM91.0225 18.3496C91.0225 18.8148 91.141 19.2422 91.378 19.6316C91.6257 20.0103 91.9489 20.3186 92.3474 20.5566C92.746 20.7838 93.193 20.8974 93.6884 20.8974C94.2055 20.8974 94.6686 20.7838 95.0779 20.5566C95.4872 20.3186 95.8104 20.0103 96.0473 19.6316C96.2843 19.2422 96.4028 18.8148 96.4028 18.3496V10.7874H98.2608V18.3983C98.2608 19.253 98.0562 20.0103 97.6469 20.6702C97.2376 21.3194 96.6882 21.8278 95.9989 22.1957C95.3095 22.5527 94.5394 22.7312 93.6884 22.7312C92.8483 22.7312 92.0835 22.5527 91.3942 22.1957C90.7048 21.8278 90.1555 21.3194 89.7462 20.6702C89.3476 20.0103 89.1483 19.253 89.1483 18.3983V10.7874H91.0225V18.3496ZM101.625 22.6014V10.7874H104.969C106.144 10.7874 107.14 10.9659 107.958 11.3229C108.777 11.6691 109.44 12.1397 109.946 12.7347C110.452 13.3189 110.818 13.9735 111.044 14.6983C111.281 15.4124 111.4 16.1318 111.4 16.8567C111.4 17.7438 111.244 18.539 110.931 19.2422C110.619 19.9454 110.194 20.5512 109.655 21.0597C109.116 21.5574 108.492 21.9414 107.781 22.2119C107.081 22.4715 106.332 22.6014 105.535 22.6014H101.625ZM103.515 20.7838H105.196C105.82 20.7838 106.391 20.6973 106.908 20.5242C107.425 20.3403 107.872 20.0806 108.249 19.7452C108.637 19.399 108.933 18.9717 109.138 18.4632C109.353 17.9547 109.461 17.3759 109.461 16.7268C109.461 15.9912 109.337 15.3637 109.089 14.8444C108.852 14.3143 108.535 13.8869 108.136 13.5624C107.748 13.227 107.323 12.9836 106.86 12.8321C106.397 12.6806 105.939 12.6049 105.486 12.6049H103.515V20.7838ZM114.239 10.7874H116.13V22.6014H114.239V10.7874ZM118.963 16.7106C118.963 15.8884 119.119 15.1148 119.432 14.39C119.744 13.6651 120.175 13.0214 120.724 12.4589C121.274 11.8963 121.909 11.4581 122.631 11.1444C123.363 10.8198 124.144 10.6576 124.974 10.6576C125.792 10.6576 126.562 10.8198 127.284 11.1444C128.016 11.4581 128.657 11.8963 129.207 12.4589C129.767 13.0214 130.203 13.6651 130.515 14.39C130.839 15.1148 131 15.8884 131 16.7106C131 17.5436 130.839 18.3226 130.515 19.0474C130.203 19.7723 129.767 20.416 129.207 20.9786C128.657 21.5303 128.016 21.9631 127.284 22.2768C126.562 22.5797 125.792 22.7312 124.974 22.7312C124.133 22.7312 123.352 22.5797 122.631 22.2768C121.909 21.9631 121.274 21.5357 120.724 20.9948C120.175 20.443 119.744 19.8047 119.432 19.0799C119.119 18.3442 118.963 17.5545 118.963 16.7106ZM120.902 16.7106C120.902 17.2948 121.004 17.8412 121.209 18.3496C121.424 18.8581 121.721 19.3071 122.098 19.6966C122.475 20.0752 122.911 20.3727 123.406 20.5891C123.902 20.8055 124.44 20.9137 125.022 20.9137C125.582 20.9137 126.105 20.8055 126.589 20.5891C127.085 20.3727 127.516 20.0752 127.882 19.6966C128.248 19.3071 128.533 18.8581 128.738 18.3496C128.954 17.8412 129.061 17.2948 129.061 16.7106C129.061 16.1156 128.954 15.5638 128.738 15.0553C128.523 14.5469 128.232 14.0979 127.866 13.7084C127.499 13.3189 127.069 13.016 126.573 12.7997C126.078 12.5833 125.544 12.4751 124.974 12.4751C124.403 12.4751 123.87 12.5833 123.374 12.7997C122.879 13.016 122.442 13.3189 122.065 13.7084C121.699 14.0979 121.414 14.5523 121.209 15.0716C121.004 15.5801 120.902 16.1264 120.902 16.7106Z"
              fill="#242424"
            />
            <mask
              id="mask0_1529_733"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="33"
              height="33"
            >
              <path
                d="M32.2907 0.738525H0V32.9831H32.2907V0.738525Z"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_1529_733)">
              <path
                d="M0 2.59795V32.2872C0 32.6716 0.312024 32.9832 0.696922 32.9832H10.9184C11.3034 32.9832 11.6154 32.6716 11.6154 32.2872V26.18C11.6154 25.5365 12.4149 25.2377 12.838 25.7233L18.957 32.744C19.0894 32.8959 19.2811 32.9832 19.4827 32.9832H26.5785C27.1765 32.9832 27.4968 32.2807 27.1042 31.8302L1.22258 2.14103C0.799483 1.65568 0 1.95448 0 2.59795Z"
                fill="#F99556"
              />
              <path
                d="M5.18678 1.89138L31.0683 31.5806C31.4916 32.0661 32.291 31.7671 32.291 31.1238V23.7041V17.6727C32.291 17.2884 31.979 16.9768 31.594 16.9768H25.9843C25.7845 16.9768 25.5945 16.8913 25.4623 16.742L24.0236 15.1181C23.6257 14.669 23.9451 13.9611 24.5456 13.9611H31.594C31.979 13.9611 32.291 13.6496 32.291 13.2652V9.20562C32.291 8.82126 31.979 8.5097 31.594 8.5097H18.5569C18.3534 8.5097 18.1602 8.42092 18.0278 8.26668L16.4348 6.41088C16.0473 5.95945 16.3685 5.26204 16.9639 5.26204H31.594C31.979 5.26204 32.291 4.95048 32.291 4.56612V1.43445C32.291 1.0501 31.979 0.738525 31.594 0.738525H5.71243C5.11451 0.738525 4.79418 1.44104 5.18678 1.89138Z"
                fill="#FA6E62"
              />
            </g>
          </svg>
        </footer> */}
      </div>
      <script async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
    </div>
  );
}

export default MyApp;
