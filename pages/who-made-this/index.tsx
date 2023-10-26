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
          },
        }}
      />
    </div>
  );
}
