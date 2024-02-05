import PropTypes from "prop-types";
import landing from "../assets/landing.png";
import "./../App.css";
import { PrimaryButton } from "./common/buttons";
import { smoothScrollHandler } from "../utils/helpers";

const LandingSection = ({ landingDescription }) => (
  <>
    <div className="flex-1 lg:ps-8 p-8">
      <div className="flex h-lvh items-center">
        <div>
          <h1 className="san-serif-font lg:text-6xl text-5xl py-2 text-stone-800">
            Jonathan Le
          </h1>
          <h2 className="font-sans lg:text-3xl text-lg pb-6 text-stone-600">
            &lt;Frontend Developer & Designer/&gt;
          </h2>
          <p className="font-sans text-stone-600 pb-12">{landingDescription}</p>
          <div>
            <PrimaryButton href="#Works" onClick={smoothScrollHandler} label="View Projects"/>
          </div>
        </div>
      </div>
    </div>
    <div className="flex lg:flex-auto h-auto lg:w-60 w-full justify-center">
      <div className="flex lg:items-end items-center">
        <img
          src={landing}
          loading="lazy"
          className="lg:w-full h-auto"
          alt="graphic illustration of a coder"
        />
      </div>
    </div>
  </>
);

LandingSection.propTypes = {
  landingDescription: PropTypes.string.isRequired,
};

export default LandingSection;
