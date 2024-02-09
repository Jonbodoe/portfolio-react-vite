import PropTypes from "prop-types";
import { useState } from "react";

const BrandIcons = ({ icon, label, isToolTip }) => {
  const [displayToolTip, setDisplayToolTip] = useState(false);
  return (
    <>
      {isToolTip && displayToolTip && (
        <div className="relative w-full flex justify-center">
          <div className="absolute z-50 bottom-4">
            <div className="px-6 py-2 bg-stone-100 border-4 border-stone-300 rounded-lg">
              <span className="text-stone-600">{label}</span>
            </div>
          </div>
        </div>
      )}
      <div
        title={label}
        className="p-3 bg-stone-800 hover:bg-stone-700 rounded-full transition-all relative"
        {...(isToolTip && {
          onMouseOver: () => setDisplayToolTip(true),
          onMouseLeave: () => setDisplayToolTip(false),
        })}
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <img
            loading="lazy"
            className="w-full h-auto"
            src={icon}
            alt={label}
          />
        </div>
      </div>
    </>
  );
};

BrandIcons.defaultProps = {
  isToolTip: false,
};

BrandIcons.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isToolTip: PropTypes.bool,
};

export default BrandIcons;
