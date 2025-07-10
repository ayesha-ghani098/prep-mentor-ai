import React from "react";
import { Typography, Container, Button } from "@mui/material";
import FeatureCard from "../components/landing/FeatureCard";
import {
  AiOutlineRobot,
  AiOutlineBarChart,
  AiOutlineVideoCamera,
} from "react-icons/ai";
import {
  landingHeading,
  landingSubHeading,
  landingGradientButton,
  landingFeaturesGrid,
} from "../styles/tailwindStyles";
import AnimatedWrapper from "../components/animation/AnimatedWrapper";

const Home: React.FC = () => {
  return (
    <div>
      <AnimatedWrapper>
        <Container className="flex flex-col items-center text-center pt-20 pb-10">
          <Typography variant="h3" className={landingHeading}>
            PrepMentor AI
          </Typography>
          <Typography variant="subtitle1" className={landingSubHeading}>
            Master your interviews with AI-powered practice and feedback
          </Typography>
          <Button className={landingGradientButton}>
            Start Practicing Now 🚀
          </Button>
        </Container>

        <Container className={landingFeaturesGrid}>
          <FeatureCard
            icon={<AiOutlineRobot />}
            title="Smart Practice"
            description="Practice with real interview questions tailored to your field and experience level."
          />
          <FeatureCard
            icon={<AiOutlineRobot />}
            title="AI Feedback"
            description="Get instant, detailed feedback on your answers with actionable improvement tips."
          />
          <FeatureCard
            icon={<AiOutlineBarChart />}
            title="Track Progress"
            description="Monitor your improvement over time with detailed analytics and performance insights."
          />
          <FeatureCard
            icon={<AiOutlineVideoCamera />}
            title="Multi-format"
            description="Practice with text, audio, or video responses to simulate real interview conditions."
          />
        </Container>
      </AnimatedWrapper>
    </div>
  );
};

export default Home;
