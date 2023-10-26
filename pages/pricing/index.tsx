import 'react-step-progress-bar/styles.css';
import 'react-toastify/dist/ReactToastify.css';

// @ts-ignore
import { PricingPage } from 'sds-projects';

export default function Pricing() {
  return (
    <div className="-mt-5">
      <PricingPage
        freeTierFeatures={[
          "Get FREE tokens",
          "Unlimited access to the app",
          "Quick and easy to use",
          "No ads",
        ]}
      />
    </div>
  );
}
