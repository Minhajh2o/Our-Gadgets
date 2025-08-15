import { Helmet } from "react-helmet";
import DetailsSection from "./DetailsSection";
import StorySection from "./StorySection";
import MissionVisionSection from "./MissionVisionSection";
import FeaturesSection from "./FeaturesSection";
import StatsSection from "./StatsSection";
import TeamSection from "./TeamSection";
import CTASection from "./CTASection";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us | Our Gadgets</title>
      </Helmet>

      {/* Hero Section */}
      <DetailsSection />

      {/* Story Section */}
      <StorySection />

      {/* Mission & Vision */}
      <MissionVisionSection />

      {/* Features/Why Choose Us */}
      <FeaturesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default About;