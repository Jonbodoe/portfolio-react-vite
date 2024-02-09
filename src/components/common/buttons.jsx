import PropTypes from "prop-types";

export const PrimaryButton = ({ href, onClick, isModalHandler, label }) => {
  return (
    <button       
    onClick={isModalHandler ? onClick : (e) => onClick(e, href)}
     className="relative inline-block text-lg group">
      <span
        className="relative z-10 block px-12 py-3 overflow-hidden leading-tight text-stone-800 transition-colors duration-300 ease-out border-4 border-stone-900 active:border-stone-700 rounded-lg group-hover:text-white"
      >
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-stone-100"></span>
        <span className="absolute left-0 w-56 h-56 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-stone-900 active:bg-stone-500 group-hover:-rotate-180 ease"></span>
        <span
          className="relative font-sans font-semibold"
        >
          {label}
        </span>
      </span>
      <span
        className="absolute bottom-0 right-0 w-full h-14 -mb-3 -mr-3 transition-all duration-200 ease-linear bg-stone-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
        data-rounded="rounded-lg"
      ></span>
    </button>
  );
};

PrimaryButton.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
  isModalHandler: PropTypes.bool,
  onClick: PropTypes.func,
};

PrimaryButton.defaultProps = {
  href: null,
  label: null,
  isModalHandler: false,
  onClick: null,
};
