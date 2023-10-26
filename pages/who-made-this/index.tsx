import 'react-step-progress-bar/styles.css';
import 'react-toastify/dist/ReactToastify.css';

// @ts-ignore
import { WhoMadeThisPage } from 'sds-projects';

export default function WhoMadeThis() {
  return (
    <div className="z-10">
      <WhoMadeThisPage
        customTheme={{
          colors: {
            text: "text-white",
            firstUniqueText: "text-[#2FDAFF]",
            secondUniqueText:
              "bg-clip-text bg-gradient-to-r from-[#2FDAFF] to-[#ffffff]",
            primaryButton:
              "bg-gradient-to-r from-[#A3DBFF] to-[#2FDAFF] text-[#333333]",
          },
        }}
      />
    </div>
  );
}
