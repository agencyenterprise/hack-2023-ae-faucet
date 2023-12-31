import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="w-full mx-auto mt-3">
      <div className="relative flex justify-between h-16">
        <div className="first-letter:items-center flex-1 sm:items-stretch sm:justify-start">
          <div className="flex items-center justify-center ">
            <a
              href="https://ae.studio?utm_source=https://faucet.ae.studio/"
              target="noopener _blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/aestudio-logo-light.svg" // Provide the relative path to the image
                alt="AE Studio Logo"
                width={180} // Set the width of the image
                height={180} // Set the height of the image
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
