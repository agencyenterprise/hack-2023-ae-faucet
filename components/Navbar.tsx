import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  return (
    <Disclosure as="nav" className="py-2 mb-4 sm:py-4 sm:mb-10">
      {({ open }) => (
        <>
          <div className="w-full mx-auto">
            <div className="relative flex justify-between h-16">
              <div className=" first-letter:items-center flex-1 sm:items-stretch sm:justify-start">
                <div className="flex items-center flex-shrink-0 justify-center ">
                  <a href="https://ae.studio/" target="_blank" rel="noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="58.8"
                      height="48"
                      viewBox="0 0 78 63"
                      fill="none"
                    >
                      <path
                        d="M0 62.8851L4.61285 52H4.71313L9.32599 62.8851H7.40636L4.15443 54.6279L5.35779 53.8094L1.64745 62.8851H0ZM2.89378 59.0078H6.46086L7.03389 60.4295H2.39238L2.89378 59.0078ZM11.392 52.4308H18.3113V54.0392H13.0681V56.8251H17.7382V58.4478H13.0681V61.2768H18.5118V62.8851H11.392V52.4308ZM20.0475 62.0091C20.0475 61.7602 20.1383 61.5544 20.3197 61.3916C20.5012 61.2193 20.7017 61.1332 20.9214 61.1332C21.122 61.1332 21.313 61.2193 21.4944 61.3916C21.6759 61.5544 21.7666 61.7602 21.7666 62.0091C21.7666 62.2772 21.6759 62.4926 21.4944 62.6554C21.313 62.8085 21.122 62.8851 20.9214 62.8851C20.7017 62.8851 20.5012 62.8085 20.3197 62.6554C20.1383 62.4926 20.0475 62.2772 20.0475 62.0091ZM29.3009 54.5561C28.9285 54.3647 28.5321 54.2019 28.1119 54.0679C27.6917 53.9243 27.2906 53.8525 26.9086 53.8525C26.3928 53.8525 25.9822 53.9674 25.6766 54.1971C25.3805 54.4269 25.2325 54.7428 25.2325 55.1449C25.2325 55.4321 25.3375 55.6858 25.5476 55.906C25.7577 56.1166 26.0251 56.3033 26.3499 56.4661C26.6746 56.6192 27.0184 56.7676 27.3813 56.9112C27.6965 57.0261 28.0069 57.1649 28.3125 57.3277C28.6276 57.4809 28.9094 57.6723 29.1577 57.9021C29.406 58.1319 29.6018 58.4191 29.745 58.7637C29.8978 59.0988 29.9742 59.5152 29.9742 60.0131C29.9742 60.5587 29.8358 61.0614 29.5588 61.5209C29.2818 61.9708 28.8855 62.3299 28.3698 62.5979C27.854 62.866 27.2237 63 26.4788 63C26.049 63 25.624 62.9521 25.2038 62.8564C24.7931 62.7607 24.4016 62.6314 24.0291 62.4687C23.6566 62.2963 23.3128 62.1049 22.9977 61.8943L23.7426 60.5875C23.9718 60.7598 24.2344 60.9178 24.5305 61.0614C24.8266 61.205 25.1322 61.3198 25.4473 61.406C25.7625 61.4826 26.0586 61.5209 26.3355 61.5209C26.6316 61.5209 26.9229 61.473 27.2094 61.3773C27.5055 61.2815 27.749 61.1236 27.94 60.9034C28.1406 60.6832 28.2408 60.3912 28.2408 60.0274C28.2408 59.7306 28.1549 59.4769 27.983 59.2663C27.8111 59.0557 27.5866 58.8738 27.3097 58.7206C27.0423 58.5579 26.7462 58.4143 26.4215 58.2898C26.0968 58.1654 25.7625 58.0265 25.4187 57.8734C25.0844 57.7202 24.774 57.5335 24.4875 57.3133C24.201 57.0836 23.967 56.8059 23.7856 56.4804C23.6041 56.1549 23.5134 55.7528 23.5134 55.2742C23.5134 54.6997 23.6471 54.2019 23.9145 53.7807C24.1819 53.3594 24.5496 53.0244 25.0176 52.7755C25.4951 52.5265 26.0442 52.3925 26.665 52.3734C27.4004 52.3734 28.026 52.4643 28.5417 52.6462C29.067 52.8185 29.5302 53.0292 29.9313 53.2781L29.3009 54.5561ZM31.6661 52.4308H38.6427V54.0392H35.9495V62.8851H34.2877V54.0392H31.6661V52.4308ZM42.5536 59.1227C42.5536 59.5344 42.6586 59.9125 42.8688 60.2572C43.0884 60.5923 43.3749 60.8651 43.7283 61.0757C44.0817 61.2768 44.478 61.3773 44.9173 61.3773C45.3757 61.3773 45.7864 61.2768 46.1493 61.0757C46.5122 60.8651 46.7988 60.5923 47.0089 60.2572C47.219 59.9125 47.324 59.5344 47.324 59.1227V52.4308H48.9715V59.1658C48.9715 59.9221 48.79 60.5923 48.4271 61.1762C48.0642 61.7507 47.5771 62.2006 46.9659 62.5261C46.3547 62.842 45.6718 63 44.9173 63C44.1724 63 43.4943 62.842 42.8831 62.5261C42.2719 62.2006 41.7848 61.7507 41.4219 61.1762C41.0685 60.5923 40.8918 59.9221 40.8918 59.1658V52.4308H42.5536V59.1227ZM51.9543 62.8851V52.4308H54.9197C55.9607 52.4308 56.8441 52.5888 57.57 52.9047C58.2958 53.2111 58.8831 53.6275 59.332 54.154C59.7809 54.671 60.1056 55.2502 60.3062 55.8916C60.5163 56.5235 60.6213 57.1601 60.6213 57.8016C60.6213 58.5866 60.4828 59.2903 60.2059 59.9125C59.9289 60.5348 59.5517 61.0709 59.0742 61.5209C58.5966 61.9613 58.0427 62.3011 57.4124 62.5405C56.7916 62.7702 56.1278 62.8851 55.4211 62.8851H51.9543ZM53.6304 61.2768H55.1203C55.6742 61.2768 56.1804 61.2002 56.6388 61.047C57.0972 60.8842 57.4936 60.6545 57.8278 60.3577C58.1716 60.0513 58.4343 59.6732 58.6157 59.2232C58.8067 58.7733 58.9023 58.2611 58.9023 57.6867C58.9023 57.0357 58.7924 56.4804 58.5728 56.0209C58.3627 55.5518 58.0809 55.1736 57.7275 54.8864C57.3837 54.5896 57.0065 54.3742 56.5958 54.2402C56.1852 54.1062 55.7793 54.0392 55.3781 54.0392H53.6304V61.2768ZM63.1388 52.4308H64.8149V62.8851H63.1388V52.4308ZM67.3274 57.6723C67.3274 56.9447 67.4659 56.2602 67.7428 55.6188C68.0198 54.9774 68.4018 54.4077 68.8889 53.9099C69.376 53.4121 69.9394 53.0244 70.5793 52.7467C71.2287 52.4595 71.9212 52.3159 72.6565 52.3159C73.3824 52.3159 74.0652 52.4595 74.7051 52.7467C75.3545 53.0244 75.9228 53.4121 76.4098 53.9099C76.9065 54.4077 77.2933 54.9774 77.5702 55.6188C77.8567 56.2602 78 56.9447 78 57.6723C78 58.4095 77.8567 59.0988 77.5702 59.7402C77.2933 60.3816 76.9065 60.9513 76.4098 61.4491C75.9228 61.9373 75.3545 62.3203 74.7051 62.5979C74.0652 62.866 73.3824 63 72.6565 63C71.9116 63 71.2192 62.866 70.5793 62.5979C69.9394 62.3203 69.376 61.9421 68.8889 61.4634C68.4018 60.9752 68.0198 60.4104 67.7428 59.7689C67.4659 59.1179 67.3274 58.4191 67.3274 57.6723ZM69.0465 57.6723C69.0465 58.1893 69.1372 58.6728 69.3187 59.1227C69.5097 59.5727 69.7723 59.97 70.1066 60.3146C70.4408 60.6497 70.8276 60.913 71.2669 61.1044C71.7063 61.2959 72.1838 61.3916 72.6995 61.3916C73.1961 61.3916 73.6593 61.2959 74.0891 61.1044C74.5284 60.913 74.9104 60.6497 75.2351 60.3146C75.5599 59.97 75.8129 59.5727 75.9944 59.1227C76.1854 58.6728 76.2809 58.1893 76.2809 57.6723C76.2809 57.1458 76.1854 56.6575 75.9944 56.2076C75.8034 55.7576 75.5455 55.3603 75.2208 55.0157C74.8961 54.671 74.5141 54.403 74.0748 54.2115C73.6355 54.02 73.1627 53.9243 72.6565 53.9243C72.1504 53.9243 71.6776 54.02 71.2383 54.2115C70.799 54.403 70.4122 54.671 70.0779 55.0157C69.7532 55.3603 69.5001 55.7624 69.3187 56.2219C69.1372 56.6719 69.0465 57.1554 69.0465 57.6723Z"
                        fill="#242424"
                      />
                      <mask
                        id="mask0_1307_1596"
                        style={{
                          maskType: "alpha",
                        }}
                        maskUnits="userSpaceOnUse"
                        x="22"
                        y="0"
                        width="34"
                        height="34"
                      >
                        <path
                          d="M55.7697 0H22V33.7214H55.7697V0Z"
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#mask0_1307_1596)">
                        <path
                          d="M22 1.94453V32.9936C22 33.3956 22.3263 33.7214 22.7288 33.7214H33.4185C33.8211 33.7214 34.1474 33.3956 34.1474 32.9936V26.6067C34.1474 25.9337 34.9836 25.6212 35.426 26.129L41.8253 33.4713C41.9637 33.6302 42.1642 33.7214 42.375 33.7214H49.7958C50.4212 33.7214 50.7562 32.9868 50.3456 32.5157L23.2786 1.46667C22.8361 0.959102 22 1.27159 22 1.94453Z"
                          fill="#F99556"
                        />
                        <path
                          d="M27.4242 1.20566L54.4911 32.2547C54.9338 32.7624 55.7698 32.4497 55.7698 31.777V24.0174V17.7098C55.7698 17.3078 55.4435 16.982 55.0409 16.982H49.1742C48.9653 16.982 48.7666 16.8926 48.6283 16.7364L47.1238 15.0382C46.7076 14.5685 47.0416 13.8282 47.6697 13.8282H55.0409C55.4435 13.8282 55.7698 13.5024 55.7698 13.1004V8.85491C55.7698 8.45294 55.4435 8.1271 55.0409 8.1271H41.4067C41.1939 8.1271 40.9918 8.03426 40.8533 7.87296L39.1874 5.93216C38.7821 5.46006 39.1181 4.7307 39.7408 4.7307H55.0409C55.4435 4.7307 55.7698 4.40487 55.7698 4.0029V0.7278C55.7698 0.325848 55.4435 0 55.0409 0H27.9739C27.3486 0 27.0136 0.73469 27.4242 1.20566Z"
                          fill="#FA6E62"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
