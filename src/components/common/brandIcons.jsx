import PropTypes from "prop-types";

const BrandIcons = ({ icon, label }) => (
  <div title={label} className="p-3 bg-stone-800 hover:bg-stone-700 rounded-full transition-all">
    <div className="w-6 h-6 flex items-center justify-center">
    <img
      loading="lazy"
      className="w-full h-auto"
      src={icon}
      alt={label}
    />
    </div>
  </div>
);

BrandIcons.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default BrandIcons;
