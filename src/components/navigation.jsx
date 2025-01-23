import PropTypes from "prop-types";
import jon from "./../assets/jonLogo.svg";
import BrandIcons from "./common/brandIcons";
import { smoothScrollHandler } from "../utils/helpers";

const Navigation = ({
  navigationMenuLinks,
  socialMenuLinks,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  console.log(window.location);
  return (
    <>
      <nav className="w-full z-50 lg:border-r-4 border-stone-700 absolute lg:inset-y-0 left-0 h-auto lg:relative lg:w-1/6 bg-stone-900 lg:h-lvh flex justify-between lg:justify-center items-center lg:flex-col">
        <div className="w-full lg:coin-spin-animation-hover lg:pb-3 flex justify-start lg:px-0 px-8 lg:justify-center lg:py-0 py-2">
          <div className="rounded-full border-4 border-stone-100 p-1 bg-red-500 h-16 w-16 lg:w-28 lg:h-28 xl:w-40 xl:h-40 flex items-center justify-center">
            <img className="h-auto" loading="lazy" src={jon} alt="Jon Logo" />
          </div>
        </div>
        <div className="w-full justify-end lg:hidden flex px-8">
          <MobileMenu
            navigationMenuLinks={navigationMenuLinks}
            socialMenuLinks={socialMenuLinks}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </div>
        <div className="lg:flex hidden w-full lg:bg-stone-800 lg:my-4 my-2 border-stone-700 lg:border-y-4">
          <div className="flex w-full lg:flex-col flex-row list-none px-4 lg:py-4">
            {navigationMenuLinks.map(({ label, href, isExternal }) => (
              <button
                {...(!isExternal && {
                  onClick: (e) => smoothScrollHandler(e, href),
                })}
                className="border-stone-700 active:bg-stone-700 hover:border-stone-100 active:border-stone-400 px-8 lg:py-3 p-2 border-4 mx-2 lg:my-2 text-center rounded-lg bg-stone-900 hover:bg-stone-600 text-stone-200 transition-all"
                key={label}
              >
                <a
                  className="font-sans font-semibold"
                  rel="noreferrer"
                  {...(isExternal && { target: "_blank" })}
                  href={href}
                >
                  {label}
                </a>
              </button>
            ))}
          </div>
        </div>
        <div className="w-full lg:flex hidden">
          <ul className="px-8 w-full lg:py-3 flex flex-wrap lg:justify-between">
            {socialMenuLinks.map(({ label, icon, href }) => (
              <li key={label} className="pb-2">
                <a href={href} target="_blank" rel="noreferrer">
                  <BrandIcons isToolTip icon={icon} label={label} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export const MobileMenu = ({
  setIsMobileMenuOpen,
  socialMenuLinks,
  isMobileMenuOpen,
  navigationMenuLinks,
}) => (
  <div className="relative">
    <button
      aria-label="Open the menu"
      className="relative group"
      onClick={() => setIsMobileMenuOpen(() => !isMobileMenuOpen)}
    >
      <div className="relative flex overflow-hidden items-center justify-center rounded-lg w-[50px] h-[50px] transform transition-all bg-stone-800 ring-0 ring-stone-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
        <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
          <div className="bg-stone-300 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
          <div className="bg-stone-300 h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
          <div className="bg-stone-300 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

          <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
            <div className="absolute bg-stone-300 h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
            <div className="absolute bg-stone-300 h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
          </div>
        </div>
      </div>
    </button>

    {isMobileMenuOpen && (
      <div className="absolute bg-stone-800 top-16 right-0 border-4 border-stone-700 rounded-lg">
        <ul
          className="flex w-60 flex-col list-none px-8 py-4"
          onClick={() => setIsMobileMenuOpen((prevState) => !prevState)}
        >
          {navigationMenuLinks.map(({ label, href, isExternal }) => (
            <li
              onClick={(e) => !isExternal && smoothScrollHandler(e, href)}
              className="border-stone-700 w-full my-1 py-3 hover:border-stone-100 border-4 text-center rounded-lg bg-stone-900 hover:bg-stone-600 text-stone-200 transition-all"
              key={label}
            >
              <a
                className="font-sans font-semibold w-full"
                rel="noreferrer"
                {...(isExternal && { target: "_blank" })}
                href={href}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <ul className=" w-full lg:py-3 flex justify-between px-8 pb-4">
          {socialMenuLinks.map(({ label, icon, href }) => (
            <li key={label} className="border-4 border-stone-700 rounded-full">
              <a href={href} target="_blank" rel="noreferrer">
                <BrandIcons icon={icon} label={label} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);
Navigation.propTypes = {
  navigationMenuLinks: PropTypes.array.isRequired,
  socialMenuLinks: PropTypes.array.isRequired,
  isMobileMenuOpen: PropTypes.bool.isRequired,
  setIsMobileMenuOpen: PropTypes.func.isRequired,
};

MobileMenu.propTypes = {
  navigationMenuLinks: PropTypes.array.isRequired,
  socialMenuLinks: PropTypes.array.isRequired,
  isMobileMenuOpen: PropTypes.bool.isRequired,
  setIsMobileMenuOpen: PropTypes.func.isRequired,
};

export default Navigation;
