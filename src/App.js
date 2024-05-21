import React, { useState, Suspense } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import CompanyInfoSection from './components/CompanyInfoSection';
import ProgramInfoSection from './components/ProgramInfoSection';
import FeaturesSection from './components/FeaturesSection';
import PriceInfoSection from './components/PriceInfoSection';
import UrgentPriceSection from './components/UrgentPriceSection';
import SpecialOffer from './components/SpecialOffer';
import IntroductionSection from './components/IntroductionSection';
import PlanSchemeSection from './components/PlanSchemeSection';
import CasesSection from './components/CasesSection';
import LIMSDetailsSection from './components/LIMSDetailsSection';
import OurPartnersSection from './components/OurPartnersSection';
import NewsSection from './components/NewsSection';
import QuestionResponseFormSection from './components/QuestionResponseFormSection';
import SuccessOverlay from './components/SuccessOverlay';
import ErrorOverlay from './components/ErrorOverlay';
import ScrollToTopButton from './components/ScrollToTopButton';
import FeedbackButton from './components/FeedbackButton';
import './App.css';

const LazyComponent = ({ component: Component }) => (
  <Suspense fallback={<div>Загрузка...</div>}>
    <Component />
  </Suspense>
);

const App = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSuccessClose = () => {
    setSuccess(false);
  };

  const handleErrorClose = () => {
    setError(false);
  };

  return (
    <div className="app-container">
      <ScrollToTopButton />
      <FeedbackButton />
      <Header />
      <LazyComponent component={CompanyInfoSection} />
      <LazyComponent component={ProgramInfoSection} />
      <LazyComponent component={FeaturesSection} />
      <LazyComponent component={PriceInfoSection} />
      <LazyComponent component={UrgentPriceSection} />
      <LazyComponent component={SpecialOffer} />
      <LazyComponent component={IntroductionSection} />
      <LazyComponent component={PlanSchemeSection} />
      <LazyComponent component={CasesSection} />
      <LazyComponent component={LIMSDetailsSection} />
      <LazyComponent component={OurPartnersSection} />
      <LazyComponent component={NewsSection} />
      <QuestionResponseFormSection
        onSuccess={(successState) => setSuccess(successState)}
        onError={(errorState, errorMessage) => {
          setError(errorState);
          setErrorMessage(errorMessage);
        }}
      />
      {success && <SuccessOverlay onClose={handleSuccessClose} />}
      {error && <ErrorOverlay message={errorMessage} onClose={handleErrorClose} />}
      <Footer />
    </div>
  );
};

export default App;
