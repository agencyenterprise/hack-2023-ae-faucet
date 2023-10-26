import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import '@typeform/embed/build/css/popup.css';

import { useState } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import { SdsNavbar } from 'sds-projects';

import LeftSideTree from '@/components/LeftSideTree';
import ConfettiAnimation from '@/components/lottie/confetti';
import RightSideTree from '@/components/RightSideTree';
import {
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  HomeModernIcon,
} from '@heroicons/react/24/outline';

import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isAwesomeHovered, setAwesomeHovered] = useState(false);
  const normalBackground = `linear-gradient(to bottom right, #F8974B, #F85C4B)`;
  const easterBackground = `linear-gradient(to bottom right, #2FDAFF, #C92FFF)`;

  return (
    <div
      className={
        !isAwesomeHovered
          ? "bg-gradient-to-r from-[#f85c4b] to-[#f8974b]"
          : "bg-gradient-to-br from-[#2FDAFF] to-[#C92FFF]"
      }
    >
      <SdsNavbar
        projectName="AE Mumbai Faucet"
        navigation={[
          {
            name: "AE Mumbai Faucet",
            page: "/",
            icon: ArrowTrendingUpIcon,
          },
          {
            name: "Pricing",
            page: "/pricing",
            icon: CurrencyDollarIcon,
          },
          {
            name: "Who Made This?",
            page: "/who-made-this",
            icon: HomeModernIcon,
          },
        ]}
        customTheme={{
          darkLogo: true,
          colors: {
            background: !isAwesomeHovered
              ? "bg-gradient-to-r from-[#f85c4b] to-[#f8974b]"
              : "bg-gradient-to-br from-[#2FDAFF] to-[#C92FFF]",
            tabs: "text-white",
            hover: "hover:bg-white hover:text-[#f85c4b]",
            border: "border-transparent",
            text: "text-white",
            dropdown: "bg-white text-[#f85c4b] ring-[#f85c4b]",
            dropdownItem: "bg-white divide-[#f85c4b] text-[#f85c4b]",
            dropdownText: "text-[#f85c4b] hover:bg-[#f85c4b] hover:text-white",
          },
        }}
        hideSettingsButton
        hideYourProfileButton
        hideUserMenu
      >
        <main className="flex flex-col h-[91vh] w-full overflow-auto">
          <div
            style={{
              backgroundImage: isAwesomeHovered
                ? easterBackground
                : normalBackground,
            }}
            className="min-h-[90vh]"
          >
            {!isAwesomeHovered ? (
              <>
                <div className="absolute bottom-0 sm:left-[-150px] blur-sm hidden lg:block">
                  <LeftSideTree />
                </div>
                <div className="absolute bottom-0 sm:right-[0px] blur-sm overflow-x-hidden hidden lg:block">
                  <RightSideTree />
                </div>
              </>
            ) : (
              <>
                <div className="absolute bottom-20 left-20 hidden lg:block">
                  <ConfettiAnimation isAwesomeHovered={isAwesomeHovered} />
                </div>
                <div className="absolute bottom-74 left-0 hidden lg:block">
                  <ConfettiAnimation isAwesomeHovered={isAwesomeHovered} />
                </div>
                <div className="absolute bottom-96 right-0 overflow-x-hidden hidden lg:block">
                  <ConfettiAnimation isAwesomeHovered={isAwesomeHovered} />
                </div>
              </>
            )}
            <Head>
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/agencyenterprise/sds-utils@latest/dist/packages/badge/src/lib/badge.css"
              />
              <style>
                {`@import url('https://fonts.googleapis.com/css2?family=Handjet:wght@400;700&family=Inter:wght@400;600;700&family=Permanent+Marker&family=Russo+One&display=swap');`}
              </style>
              <link
                rel="icon"
                type="image/png"
                href="/images/coding-logo.png"
              />

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
            {router.asPath === "/" && (
              <div
                className={`${
                  !isAwesomeHovered ? `visible` : `invisible`
                } w-full flex flex-row justify-center items-center !rounded-none px-2 py-4 bg-gradient-to-br from-[#2FDAFF] to-[#C92FFF]`}
              >
                <a
                  href="https://ae.studio"
                  target="noopener _blank"
                  rel="noopener noreferrer"
                  className="text-xl text-center text-white uppercase"
                >
                  <span style={{ fontSize: "28px" }} className="mr-3">
                    🎉
                  </span>
                  {"We built and sold a startup. Let's help you next."}
                  <span style={{ fontSize: "28px" }} className="ml-3">
                    🎉
                  </span>
                </a>
              </div>
            )}
            <div className="flex flex-col justify-between w-full max-w-screen-xl px-4 mx-auto sm:px-2">
              {router.asPath === "/" && <Navbar />}
              <Component
                {...{
                  ...pageProps,
                  setAwesomeHovered: setAwesomeHovered,
                  isAwesomeHovered: isAwesomeHovered,
                }}
              />
              <ToastContainer
                autoClose={5000}
                position="top-center"
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
              />
              <div className="flex-grow" />
            </div>
            <script
              async
              src="https://scripts.simpleanalyticscdn.com/latest.js"
            ></script>
          </div>
        </main>
      </SdsNavbar>
    </div>
  );
}

export default MyApp;
