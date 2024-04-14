// FAQBlock.tsx
import React, { useState } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import { FAQBlockProps } from "./types";
import {
  FAQSection,
  ContentWrapper,
  FAQList,
  FAQItem,
  FAQHeader,
  FAQAnswer,
} from "./styles";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQBlock: React.FC<FAQBlockProps> = ({
  title,
  questions,
  icon,
  t,
  id,
}: FAQBlockProps) => {
  const [activeKey, setActiveKey] = useState<number | null>(null);

  const togglePanel = (index: number) => {
    setActiveKey((prevActiveKey) =>
      prevActiveKey === index ? null : index
    );
  };

  return (
    <FAQSection id={id}>
      <Row justify="center" align="middle">
        <Col lg={11} md={11} sm={12} xs={24}>
          <SvgIcon src={icon} width="75%" height="75%" />
        </Col>
        <Col lg={24} md={24} sm={24} xs={24}>
          <ContentWrapper>
            <h6>{t(title)}</h6>
            <FAQList>
              {questions.map((qa: FAQItem, index: number) => (
                <FAQItem key={index}>
                  <FAQHeader onClick={() => togglePanel(index)}>
                    {qa.question}
                  </FAQHeader>
                  <FAQAnswer className={activeKey === index ? "visible" : ""}>
                    {qa.answer}
                  </FAQAnswer>
                </FAQItem>
              ))}
            </FAQList>
          </ContentWrapper>
        </Col>
      </Row>
    </FAQSection>
  );
};

export default withTranslation()(FAQBlock);
