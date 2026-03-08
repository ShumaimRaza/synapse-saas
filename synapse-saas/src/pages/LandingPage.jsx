import Navbar          from "../components/landing/Navbar";
import HeroSection     from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import ProductPreview  from "../components/landing/ProductPreview";
import PricingSection  from "../components/landing/PricingSection";
import Testimonials    from "../components/landing/Testimonials";
import CTASection      from "../components/landing/CTASection";
import Footer          from "../components/landing/Footer";

export default function LandingPage({ onLogin, onSignup, onContact }) {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar onLogin={onLogin} onSignup={onSignup} />
      <div id="home">
        <HeroSection onGetStarted={onSignup} onLogin={onLogin} />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="product">
        <ProductPreview />
      </div>
      <div id="pricing">
        <PricingSection onSignup={onSignup} onContact={onContact} />
      </div>
      <Testimonials />
      <CTASection onSignup={onSignup} onContact={onContact} />
      <Footer />
    </div>
  );
}