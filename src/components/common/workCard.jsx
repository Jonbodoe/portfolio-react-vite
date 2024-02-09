import PropTypes, { shape } from "prop-types";
import BrandIcons from "./brandIcons";
import { PrimaryButton } from "./buttons";

const WorkCard = ({
  onClick,
  workDetails: {
    title,
    subTitle,
    isBannerImageDark,
    bannerImageSrc,
    description,
    isDetailed,
    technologyStack,
  },
}) => {
  if (!isDetailed) {
    return (
      <div className="flex w-full px-8 mb-10">
        <img
          className={`w-full h-full border-4 ${
            isBannerImageDark ? "border-stone-700" : "border-stone-100"
          } rounded-lg`}
          src={bannerImageSrc}
          alt={title}
        />
      </div>
    );
  }

  return (
    <div
      key={title}
      className="lg:flex rounded-lg h-50 w-full bg-stone-100 border-4 border-stone-100 mb-8"
    >
      <div
        className={`lg:w-2/4 w-full ${
          isBannerImageDark ? "bg-stone-800" : "bg-stone-300"
        } rounded-tl-md rounded-bl-md lg:border-r-4 border-stone-100 p-8 overflow-y-hidden`}
      >
        <div className="flex justify-center items-center h-full">
          <img
            className={`rounded-lg border-4 ${
              isBannerImageDark ? "border-stone-700" : "border-stone-100"
            }`}
            src={bannerImageSrc}
            alt={title}
            loading="lazy"
          />
        </div>
      </div>
      <div className="lg:w-2/4 w-full p-8 pb-12 flex items-center">
        <div>
          <h3 className="font-sans font-black text-stone-900 text-3xl pb-4">
            {title}
          </h3>
          <h4 className="font-sans font-semibold text-red-500 text-xl pb-2">
            {subTitle}
          </h4>
          <p className="text-stone-500 pb-8">{description}</p>
          <div>
            {Boolean(technologyStack.length) && (
              <h4 className="font-sans font-semibold text-stone-500 text-lg pb-2">
                Tools
              </h4>
            )}
          </div>
          <div className="flex pb-6 flex-wrap">
            {Boolean(technologyStack.length) &&
              technologyStack.map(({ id, src, label }) => (
                <div key={id} className="mr-4 mb-2">
                  <BrandIcons isToolTip icon={src} label={label} />
                </div>
              ))}
          </div>
          <PrimaryButton
            onClick={onClick}
            isModalHandler={true}
            label="View Project"
          />
        </div>
      </div>
    </div>
  );
};

WorkCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  workDetails: shape({
    title: PropTypes.string.isRequired,
    bannerImageSrc: PropTypes.string.isRequired,
    isBannerImageDark: PropTypes.bool.isRequired,
    subTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologyStack: PropTypes.array.isRequired,
    isDetailed: PropTypes.bool.isRequired,
  }),
};

export default WorkCard;
