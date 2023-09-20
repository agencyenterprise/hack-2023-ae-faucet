import dynamic from "next/dynamic";

const HomeBanner = dynamic(() => import("@/components/HomeBanner"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <HomeBanner />
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
