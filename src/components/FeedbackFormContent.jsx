import { useState } from "react";
import EmojiSlider from "./EmojiSlider";

const FeedbackFormContent = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [buttonColor, setButtonColor] = useState("bg-teal-500");
  const [activeInput, setActiveInput] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [comment, setComment] = useState("");

  const handleInputFocus = (inputName) => {
    setActiveInput(inputName);
  };

  const handleInputBlur = () => {
    setActiveInput(null);
  };

  const changeButtonColor = () => {
    const newColor = buttonColor === "bg-teal-500" ? "bg-green-500" : "bg-teal-500";
    setButtonColor(newColor);
  };

  const validateInput = (inputName) => {
    let validationError = null;

    if (inputName === "Name") {
      if (name.trim() === "") {
        validationError = "Name is required";
      }
    } else if (inputName === "Number") {
      if (!/^\d+$/.test(number)) {
        validationError = "Only digits";
      }
    } else if (inputName === "Email") {
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        validationError = "Invalid email address";
      }
    }
    return validationError;
  };

  const getInputBorderColor = (inputName) => {
    if (activeInput === inputName) {
      const validationError = validateInput(inputName);
      return validationError ? "border-red-500" : "border-black";
    }
    return "border-black";
  };

  const isSubmitDisabled = () => {
    const nameError = validateInput("Name");
    const numberError = validateInput("Number");
    const emailError = validateInput("Email");

    return (
      name.trim() === "" ||
      number.trim() === "" ||
      email.trim() === "" ||
      nameError !== null ||
      numberError !== null ||
      emailError !== null
    );
  };

  const handleSubmit = () => {
    if (!isSubmitDisabled()) {
      setIsSubmitting(true);

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setName("");
        setEmail("");
        setNumber("");
        setComment("");
      }, 2000);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="mt-10 rounded-lg bg-white w-80 p-6 shadow-md">
        <h1 className="text-lg font-bold text-blue-600 mb-4">Feedback Form</h1>
        <div className="flex justify-between">
          <div className="w-36">
            <label className="text-blue-600">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`border ${getInputBorderColor("Name")} rounded p-2 w-full`}
              onFocus={() => handleInputFocus("Name")}
              onBlur={handleInputBlur}
            />
            {activeInput === "Name" && (
              <p className="text-red-500">{validateInput("Name")}</p>
            )}
          </div>
          <div className="w-36">
            <label className="text-blue-600">Contact Number</label>
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className={`border ${getInputBorderColor("Number")} rounded p-2 w-full`}
              onFocus={() => handleInputFocus("Number")}
              onBlur={handleInputBlur}
            />
            {activeInput === "Number" && (
              <p className="text-red-500">{validateInput("Number")}</p>
            )}
          </div>
        </div>
        <div className="mt-4">
          <label className="text-blue-600">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`border ${getInputBorderColor("Email")} rounded p-2 w-full`}
            onFocus={() => handleInputFocus("Email")}
            onBlur={handleInputBlur}
          />
          {activeInput === "Email" && (
            <p className="text-red-500">{validateInput("Email")}</p>
          )}
        </div>
        <div className="mt-4">
          <EmojiSlider />
        </div>
        <div className="mt-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add your comments..."
            className="border rounded p-2 w-full"
            rows="4"
          />
        </div>
        <div className="mt-4">
          {isSubmitting ? (
            <div className="flex justify-center">
              <div className="spinner-border text-teal-500" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <button
              className={`bg-blue-500 text-white px-4 py-2 rounded ${
                isSubmitDisabled() ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleSubmit}
              disabled={isSubmitDisabled()}
              onMouseEnter={changeButtonColor}
              onMouseLeave={changeButtonColor}
            >
              SUBMIT
            </button>
          )}
          {isSubmitted && (
            <p className="text-green-500 text-center mt-2">Form submitted ✅</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackFormContent;
