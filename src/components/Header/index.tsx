import React from "react";

import { useTransform, useViewportScroll } from "framer-motion";

import { Container } from "./styles";

const Header: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const HeaderY = useTransform(
    scrollYProgress,
    [0.188, 0.198],
    ["0%", "-100%"]
  );

  return <Container style={{ y: HeaderY }} />;
};

export default Header;
