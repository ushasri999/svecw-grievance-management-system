// Inside styles.ts
import styled from "styled-components";

export const FAQSection = styled("section")`
  background-color: #ffffff; // Set background color to white
  padding: 3rem 0;
  text-align: center;
`;

export const ContentWrapper = styled("div")`
  max-width: 800px;
  margin: 0 auto;
`;

export const FAQList = styled("dl")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FAQItem = styled("div")`
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #1890ff;
  }
`;

export const FAQHeader = styled("dt")`
  padding: 16px;
  font-size: 18px;
  font-weight: bold;
  background-color: #1890ff;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FAQAnswer = styled("dd")`
  padding: 16px;
  font-size: 16px;
  line-height: 1.6;
  display: none;

  &.visible {
    display: block;
  }
`;

export const IconWrapper = styled("div")`
  img {
    max-width: 100%;
    height: auto;
  }
`;
export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
