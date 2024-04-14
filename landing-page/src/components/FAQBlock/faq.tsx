// components/FAQ.tsx
import React from 'react';

interface FAQProps {
  faq: {
    question: string;
    answer: string;
    open?: boolean;
  };
}

const FAQ: React.FC<FAQProps> = ({ faq }) => {
  const { question, answer, open } = faq;

  return (
    <>
      <dt aria-expanded={open ? 'true' : 'false'}>
        {question}
        <img
          src={`/${open ? 'minus' : 'plus'}.svg`}
          alt={open ? 'Collapse' : 'Expand'}
          width="20"
          height="20"
        />
      </dt>
      <dd className={!open ? 'hidden' : undefined}>{answer}</dd>
    </>
  );
};

export default FAQ;
