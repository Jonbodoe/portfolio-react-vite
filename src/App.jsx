import { useState } from "react";
import Navigation from "./components/navigation";
import { landingDescription, workDescription } from "./utils/constants";
import {
  navigationMenuLinks,
  portfolioWorks,
  socialMenuLinks,
  workCategories,
} from "./utils/helpers";
import LandingSection from "./components/landingSection";
import WorksSection from "./components/worksSection";
import Modal from "./components/modal";
import FooterSection from "./components/footerSection";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [portfolioWorkId, setPortfolioWorkId] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedWorkCategoryId, setSelectedWorkCategoryId] = useState(0);

  const filteredPortofioWorks = (selectedWorkId) =>
    portfolioWorks.filter(
      ({ workCategoryId }) => workCategoryId === selectedWorkId
    );

  return (
    <div id="app">
      <Modal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        portfolioWorks={filteredPortofioWorks(selectedWorkCategoryId)}
        portfolioWorkId={portfolioWorkId}
      />
      <div className="relative h-screen flex bg-stone-200">
        <Navigation
          navigationMenuLinks={navigationMenuLinks}
          socialMenuLinks={socialMenuLinks}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setMobileMenuOpen}
        />
        <main role="main" className="w-full lg:w-5/6 h-screen overflow-y-auto">
          <section id="About" className="md:flex">
            <LandingSection landingDescription={landingDescription} />
          </section>
          <section id="Works">
            <WorksSection
              workDescription={workDescription}
              workCategories={workCategories}
              portfolioWorks={filteredPortofioWorks(selectedWorkCategoryId)}
              setIsModalOpen={setIsModalOpen}
              setPortfolioWorkId={setPortfolioWorkId}
              selectedWorkCategoryId={selectedWorkCategoryId}
              setSelectedWorkCategoryId={setSelectedWorkCategoryId}
            />
          </section>
          <footer className="bg-stone-900">
            <FooterSection />
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
