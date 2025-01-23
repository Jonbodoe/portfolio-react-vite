import { callToActionDescription } from "../utils/constants";
import callToAction from "./../assets/seeYaNextTime.png";

const FooterSection = () => (
  <>
    <div id="Contact" className="md:flex py-10 lg:h-2/3 px-10">
      <div className="lg:w-2/4">
        <img
          className="w-100 h-auto pb-10"
          src={callToAction}
          alt="a good bye illustration"
        />
      </div>
      <div className="lg:w-2/4 flex items-center lg:pl-8">
        <div>
          <h3 className="san-serif-font font-black text-stone-100 text-4xl pb-4">
            Let&apos;s Work Together!
          </h3>
          <p className="text-stone-400 pb-8">{callToActionDescription}</p>
          <p className="text-stone-400 pb-8">For more information, please reach out to me through my email! <span className="text-red-500">Jonledev@gmail.com</span></p>
        </div>
      </div>
    </div>
    <div className="border-t-4 border-stone-700 px-8">
      <p className="text-stone-500 py-4 text-end">
        Built with Vite, Tailwind, and React. Jonathan Le {new Date().getFullYear()}
      </p>
    </div>
  </>
);

export default FooterSection;
