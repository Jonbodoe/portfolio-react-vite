import PropTypes from "prop-types";
import WorkCard from "./common/workCard";
import "./../App.css";

const WorksSection = ({
  workDescription,
  workCategories,
  portfolioWorks,
  setIsModalOpen,
  setPortfolioWorkId,
  selectedWorkCategoryId,
  setSelectedWorkCategoryId,
}) => {
  const selectedWorkCategoryClass = (id) =>
    selectedWorkCategoryId === id
      ? "flex-1 bg-stone-900 text-stone-200 rounded-tl-lg rounded-tr-lg"
      : "flex-1 bg-stone-100 text-stone-700 -translate-y-8 rounded-lg border-4 border-stone-300 opacity-75";

  const { label: workCategoryTitle } = workCategories.find(
    ({ id }) => id === selectedWorkCategoryId
  );

  return (
    <>
      <div className="flex justify-center items-center p-8">
        <div className="w-full lg:w-7/12 bg-stone-200 rounded-lg lg:px-8 pt-8 pb-6">
          <h2 className="san-serif-font text-4xl font-semibold text-stone-800 pb-2">
            Checkout My Projects!
          </h2>
          <h3 className="sans text-2xl pb-5 text-stone-500">
            My journey from 2017 to present day.
          </h3>
          <p className="font-sans text-stone-700 pb-8">{workDescription}</p>
        </div>
      </div>
      <div className="flex justify-around gap-2 lg:gap-8 px-4 lg:px-8 pt-24 h-2/4">
        {workCategories.map(({ label, src, id }) => (
          <button
            key={id}
            tabIndex="0"
            className={`${selectedWorkCategoryClass(
              id
            )} px-4 lg:px-8 py-6 transition-all z-10`}
            onClick={() => setSelectedWorkCategoryId(id)}
          >
            <div className="text-md lg:text-xl font-bold pb-4">{label}</div>
            <div className="img-wrapper hidden lg:flex">
              <img src={src} alt={label} loading="lazy" />
            </div>
          </button>
        ))}
      </div>
      <div className="bg-stone-900 h-full w-full px-8">
        <div className="flex justify-center py-24">
          <h2 className="san-serif-font text-4xl text-stone-200">
            {workCategoryTitle}
          </h2>
        </div>
        <div className="flex justify-center pb-20">
          <div>
            {portfolioWorks.map(({ id, ...rest }) => (
              <WorkCard key={id} workDetails={rest} onClick={() => {
                setIsModalOpen(true);
                setPortfolioWorkId(id);
              }}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

WorksSection.propTypes = {
  workDescription: PropTypes.string.isRequired,
  workCategories: PropTypes.array.isRequired,
  portfolioWorks: PropTypes.array.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  setPortfolioWorkId: PropTypes.func.isRequired,
  selectedWorkCategoryId: PropTypes.number.isRequired,
  setSelectedWorkCategoryId: PropTypes.func.isRequired,
};

export default WorksSection;
