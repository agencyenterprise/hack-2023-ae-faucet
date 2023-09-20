export default function HomeBanner() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 mb-4 md:items-center md:flex-row">
        <div className="flex flex-col justify-center">
          <h1 className="text-[#4E1E1A] text-left font-russo-one text-2xl md:text-[58px] md:leading-[63px] md:tracking-[-4.06px]">
            {"Get tokens with the most"}
          </h1>
          <div className="flex flex-row justify-center">
            <h1 className="inline-block text-center awesome-heading text-2xl md:text-[58px] md:leading-[63px] md:tracking-[-4.06px]">
              awesome
            </h1>
            <h1 className="text-[#4E1E1A] ml-3 inline-block text-left font-russo-one text-2xl md:text-[58px] md:leading-[63px] md:tracking-[-4.06px]">
              {"agency"}
            </h1>
          </div>
          <h1 className="mt-4 flex justify-center code-collab-celebr">
            {"We can build your project from the ground up!"}
          </h1>
          <a
            href="https://ae.studio/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-orange-300 text-center"
          >
            Get to know us
          </a>
        </div>
      </div>
    </>
  );
}
