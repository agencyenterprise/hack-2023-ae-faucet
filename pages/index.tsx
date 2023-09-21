import dynamic from "next/dynamic";

const HomeBanner = dynamic(() => import("@/components/HomeBanner"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <HomeBanner />
      <div className="flex justify-center space-x-2">
        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xl" />
        <button className="btn bg-orange-500 hover:bg-orange-500 hover:bg-orange-700 border border-orange-500 text-white text-bold">Send me MATIC!</button>
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
