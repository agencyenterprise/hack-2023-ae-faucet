import dynamic from "next/dynamic";
import { useState } from "react";
import axios from 'axios';

const HomeBanner = dynamic(() => import("@/components/HomeBanner"), {
  ssr: false,
});

export default function Home() {
  const [userAddress, setUserAddress] = useState<string>();

  const handleSendMatic = async (e) => {
    e.preventDefault();
    axios.post('/api/sendMatic', {
      userAddress
    })
    console.log({userAddress})
  }

  const handleChangeUserAddress = (e) => {
    setUserAddress(e.target.value);
  };

  return (
    <>
      <HomeBanner />
      <div className="flex justify-center space-x-2">
        <form onSubmit={handleSendMatic}>
          <input 
            type="text"
            placeholder="Type here" 
            className="input input-bordered input-secondary w-full max-w-xl" 
            value={userAddress}
            onChange={handleChangeUserAddress}
          />
          <button className="btn bg-orange-500 hover:bg-orange-500 border border-orange-500 text-white text-bold">Send me MATIC!</button>
        </form>
      </div>
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
