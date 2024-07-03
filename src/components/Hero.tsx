import { FaArrowDown } from "react-icons/fa";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="bg-primary text-white">
      <div className="section-wrapper hero-shape min-h-[calc(100vh-76px)] flex flex-col items-center justify-center relative">
        <div className="text-center space-y-5">
          <h1>The WPPOOL Index</h1>
          <p>
            Monitor the performance of emerging, publicly traded, financial
            technology companies The WPPOOL Index
          </p>
        </div>

        <div className="absolute bottom-10 w-full px-10 flex items-end justify-end lg:justify-between gap-10">
          <div className="max-lg:hidden flex flex-col gap-5">
            <div>
              <h5>60</h5>
              <p>Companies</p>
            </div>

            <div>
              <h5>$100B</h5>
              <p>Market Cap</p>
            </div>

            <div>
              <h5>3.5x</h5>
              <p>Revenue Multiple</p>
            </div>

            <div>
              <h5>60%</h5>
              <p>LTM avg. revenue growth rate</p>
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="bg-white text-primary rounded-full"
          >
            <FaArrowDown />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
