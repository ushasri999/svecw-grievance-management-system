interface FAQItem {
    question: string;
    answer: string;
  }
export interface FAQBlockProps {
    title:string;
    icon: any;
    questions: FAQItem[];
    
    button?: any;
    t?: any;
    id: string;

  }