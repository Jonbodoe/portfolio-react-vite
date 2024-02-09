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
      ? "bg-stone-800 text-stone-200 border-stone-700"
      : "bg-stone-100 text-stone-700 border-stone-300";

  const { label: workCategoryTitle } = workCategories.find(
    ({ id }) => id === selectedWorkCategoryId
  );

  return (
    <>
      <div className="flex justify-center items-center px-8">
        <div className="w-full lg:w-7/12 bg-stone-200 rounded-lg lg:px-8">
          <h2 className="san-serif-font text-4xl font-semibold text-stone-800 pb-2">
            Checkout My Projects!
          </h2>
          <h3 className="sans text-2xl pb-5 text-stone-500">
            My journey from 2017 to present day.
          </h3>
          <p className="font-sans text-stone-700 pb-8">{workDescription}</p>
        </div>
      </div>
      <div className="flex justify-center px-8 h-2/4 relative work-categories-container">
        {workCategories.map(({ label, src, id }) => (
          <button
            key={id}
            tabIndex="0"
            className={`${selectedWorkCategoryClass(
              id
            )} px-4 lg:px-8 py-6 transition-all work-categories border-4 flex-1`}
            onClick={() => setSelectedWorkCategoryId(id)}
          >
            <div className="text-md lg:text-xl font-bold pb-4">{label}</div>
            <div className="img-wrapper hidden lg:flex">
              <img src={src} alt={label} loading="lazy" />
            </div>
          </button>
        ))}
      </div>
      <div className="bg-stone-900 h-full w-full px-8 lg:pt-24">
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
