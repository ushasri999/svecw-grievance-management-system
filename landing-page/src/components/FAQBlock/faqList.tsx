// components/FAQsList.tsx
import React from 'react';
import FAQ from './faq';

interface FAQsListProps {
  faqs: Array<{
    question: string;
    answer: string;
    open?: boolean;
  }>;
}

const FAQsList: React.FC<FAQsListProps> = ({ faqs }) => {
  return (
    <dl>
      {faqs.map((faq, index) => (
        <FAQ faq={faq} key={index} />
      ))}
    </dl>
  );
};

export default FAQsList;
