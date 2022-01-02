import styled from "styled-components";
import { motion } from "framer-motion";

const H3 = styled(motion.div)`
  display: flex;
  align-items: center;
  font-size: calc(16px + 1vw);
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const TextFadeUp = (text) => {
  return (
    <H3
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        delay: 0.2,
        type: "ease",
      }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 50, opacity: 0 },
      }}
    >
      {text}
    </H3>
  );
};