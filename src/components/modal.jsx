import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import BrandIcons from "./common/brandIcons";
import Loading from "./common/loading";
import externalLink from "./../assets/externalLink.svg";

import "./../App.css";

const Modal = ({
  isModalOpen,
  closeModal,
  portfolioWorks,
  portfolioWorkId,
}) => {
  const ref = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isModalOpen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isModalOpen, portfolioWorkId]);

  useEffect(() => {
    if (isModalOpen) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
    return () => clearTimeout();
  }, [isModalOpen]);

  const filteredPortfolioWork = (selectedId) => {
    if (typeof selectedId !== "number" && isFinite(selectedId)) {
      return {};
    }

    return portfolioWorks.find(({ id }) => id === selectedId);
  };

  const isObjectEmpty =
    Object.keys(filteredPortfolioWork(portfolioWorkId) || {}).length === 0;

  const {
    title: mainTitle,
    subTitle,
    description,
    technologyStack,
    additionalDetails,
    informationalLinks,
  } = filteredPortfolioWork(portfolioWorkId) || {};

  return (
    <dialog
      ref={ref}
      onCancel={closeModal}
      className={`bg-stone-200 border-stone-100 border-4 flex h-full w-5/6 rounded-lg z-0`}
    >
      {isObjectEmpty || isLoading ? (
        <div className="flex justify-center items-center w-full">
          <Loading />
        </div>
      ) : (
        <div className="lg:flex lg:relative">
          <div className="lg:w-2/6 p-8 bg-stone-200 lg:absolute lg:inset-y-0 lg:right-0 flex items-center">
            <div>
              {mainTitle && (
                <h3 className="font-sans font-black text-stone-900 text-3xl pb-4">
                  {mainTitle}
                </h3>
              )}
              {subTitle && (
                <h4 className="font-sans font-semibold text-red-500 text-xl pb-2">
                  {subTitle}
                </h4>
              )}
              <p className="text-stone-500 pb-8">{description}</p>
              <div>
                {Boolean(technologyStack.length) && (
                  <h4 className="font-sans font-semibold text-stone-500 text-lg pb-2">
                    Tools
                  </h4>
                )}
              </div>
              <div className="flex gap-4 flex-wrap pb-6">
                {Boolean(technologyStack?.length) &&
                  technologyStack?.map(({ id, src, label }) => (
                    <BrandIcons key={id} icon={src} label={label} />
                  ))}
              </div>
              <button
                onClick={closeModal}
                className="border-stone-300 px-8 font-sans font-semibold hover:border-stone-100 active:border-stone-300 border-4 py-3 my-2 text-center rounded-lg lg:w-full bg-stone-100 hover:bg-stone-900 active:bg-stone-500 text-stone-700 hover:text-stone-200 transition-all"
              >
                Close Project
              </button>
            </div>
          </div>
          <div
            className={`lg:w-4/6 rounded-tl-md rounded-bl-md p-8 bg-stone-100 overflow-y-scroll`}
          >
            {Boolean(additionalDetails.length) &&
              additionalDetails?.map(({ id, title, image, description }) => (
                <div key={id} className="my-4">
                  <div className="flex justify-center items-center p-8 mb-6 bg-stone-200 rounded-lg border-4 border-stone-300">
                    <img src={image} alt={title || mainTitle} loading="lazy" />
                  </div>
                  {title && description && (
                    <div className="pb-4 border-b-4 border-stone-300">
                      <h3 className="font-sans font-black text-stone-700 text-2xl pb-4">
                        {title}
                      </h3>
                      <p className="text-stone-500 pb-8">{description}</p>
                    </div>
                  )}
                </div>
              ))}
            {Boolean(informationalLinks.length) && (
              <div className="pb-8">
                <h3 className="font-sans font-black text-stone-700 text-2xl pb-4">
                  Informational Links
                </h3>
                {informationalLinks?.map(({ label, link }) => (
                  <div key={label} className="flex">
                    <a
                      className="text-stone-500"
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {label}
                    </a>
                    <img
                      className="w-3 h-auto mx-2"
                      src={externalLink}
                      alt="external link icon"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
};

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  portfolioWorks: PropTypes.array.isRequired,
  closeModal: PropTypes.func,
  portfolioWorkId: PropTypes.number,
};

Modal.defaultProps = {
  closeModal: null,
  portfolioWorkId: null,
};

export default Modal;
