import { useState } from "react";
import Second from "./FeedbackFormContent.jsx";
import FeedbackFormContent from "./FeedbackFormContent.jsx";

const FeedbackForm = () => {
  return (
    <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('../assets/rectangle.png')` }}>
      <h1 className="text-center mt-28 text-3xl font-bold text-gray-800">Feedback Form</h1>
      <FeedbackFormContent />
    </div>
  );
};

export default FeedbackForm;
