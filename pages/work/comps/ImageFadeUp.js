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

const RowUI = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Img = styled(motion.img)`
  box-shadow: 0 0 20px rgba(193, 193, 193, 0.5);
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const ImageFadeUp = (image, text) => {
  return (
    <>
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
      <RowUI
        style={{ margin: "20px 0 00px 0" }}
        src={image}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          type: "ease",
        }}
        variants={{
          visible: { x: 0, opacity: 1 },
          hidden: { x: 50, opacity: 0 },
        }}
      >
        <H4>{text}</H4>
      </RowUI>
    </>
  );
};

export default ImageFadeUp;