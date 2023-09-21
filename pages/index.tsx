import dynamic from "next/dynamic";
import { Fragment, RefObject, useRef, useState } from "react";
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { Dialog, Transition } from '@headlessui/react'
import { ethers } from "ethers";

const HomeBanner = dynamic(() => import("@/components/HomeBanner"), {
  ssr: false,
});

export default function Home() {
  const [userAddress, setUserAddress] = useState<string>("");
  const [userAddressIsValid, setUserAddressIsValid] = useState<boolean>(true);
  const [captchaToken, setCaptchaToken] = useState<string>();
  const [transactionHash, setTransactionHash] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const recaptcha: RefObject<ReCAPTCHA> = useRef(null);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const handleSendMatic = async (e) => {
    e.preventDefault();

    const response = await axios.post('/api/sendMatic', {
      userAddress,
      captchaToken
    });

    setTransactionHash(response.data.transactionHash);
    openModal();

    setUserAddress('');
    recaptcha.current.reset();

    console.log(response);
  }

  const handleChangeUserAddress = (e) => {
    setUserAddress(e.target.value);
    setUserAddressIsValid(ethers.isAddress(e.target.value));
  };

  const handleChangeCaptcha = (token: string | null) => {
    if (token) {
      setCaptchaToken(token);
    }
  };

  return (
    <>
      <HomeBanner />
      <div className="flex justify-center space-x-2">
        <form onSubmit={handleSendMatic}>
          <div className="mb-3">
            <input 
              type="text"
              placeholder="Wallet you want to send MATIC to" 
              className="input input-bordered input-primary w-full max-w-xl" 
              value={userAddress}
              onChange={handleChangeUserAddress}
              required
            />
            {!userAddressIsValid && <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              Invalid address
            </span>}
          </div>

          <div className="mb-3">
            <ReCAPTCHA
              size="normal"
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY}
              onChange={handleChangeCaptcha}
              ref={recaptcha}
            />
          </div>

          <button
            type="submit"
            className="btn w-full rounded-md px-4 py-2 text-white text-bold border border-transparent bg-orange-500 hover:bg-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
            disabled={!captchaToken || !userAddress || !userAddressIsValid}
          >
            Send {process.env.NEXT_PUBLIC_MATIC_AMOUNT} MATIC to Mumbai network
          </button>
        </form>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Your Matic is on the way!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your request has been successfully submitted.<br/>
                      <a
                        className="text-blue-500"
                        target="_blank"
                        rel="noreferrer"
                        href={`https://mumbai.polygonscan.com/tx/${transactionHash}`}
                      >
                        You can check the transaction status clicking here.
                      </a>
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md px-4 py-2 text-sm font-medium text-white border border-transparent bg-orange-500 hover:bg-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

// export async function getServerSideProps(context) {
//   await dbConnect();
//   const settings = await Settings.findOne({}, {}, { sort: { date: -1 } });

//   return {
//     props: {
//       settings: JSON.parse(JSON.stringify(settings)),
//     },
//   };
// }
