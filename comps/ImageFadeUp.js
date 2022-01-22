import styled from "styled-components";
import { motion } from "framer-motion";

const H4 = styled(motion.div)`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 16px;
  z-index: 100;
  color: ${(props) => (props.dark ? "white" : "black")};
`;

const Img = styled(motion.img)`
  box-shadow: 0px 0px 40px rgba(200, 200, 200, 0.25);
  border-radius: 5px;
  width:40%;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const ImageFadeUp = (image, text, dark) => {
  return (
      <Img
        src={image}
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
      />
  );
};
