import React from "react";
import { Paper, Typography } from "@mui/material";
import {
  featureIcon,
  featureCard,
  featureDesc,
  featureTitle,
} from "../../styles/tailwindStyles";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Paper elevation={0} className={featureCard}>
      <div className={featureIcon}>{icon}</div>
      <Typography variant="h6" className={featureTitle}>
        {title}
      </Typography>
      <Typography variant="body2" className={featureDesc}>
        {description}
      </Typography>
    </Paper>
  );
};

export default FeatureCard;
