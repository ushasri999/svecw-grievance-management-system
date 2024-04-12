import React, { useState } from "react";

const EmojiSlider = () => {
  const emojiData = [
    {
      bwImageSource: require("../assets/bwEmoji/BwWorst.png"),
      colorImageSource: require("../assets/emoji/Worst.png"),
      label: "Worst",
    },
    {
      bwImageSource: require("../assets/bwEmoji/Bwnot_good.png"),
      colorImageSource: require("../assets/emoji/not_good.png"),
      label: "Not good",
    },
    {
      bwImageSource: require("../assets/bwEmoji/BwFine.png"),
      colorImageSource: require("../assets/emoji/Fine.png"),
      label: "Fine",
    },
    {
      bwImageSource: require("../assets/bwEmoji/BwGood.png"),
      colorImageSource: require("../assets/emoji/Good.png"),
      label: "Look good",
    },
    {
      bwImageSource: require("../assets/bwEmoji/BwLoveit.png"),
      colorImageSource: require("../assets/emoji/Loveit.png"),
      label: "Very good",
    },
  ];

  const [selectedEmoji, setSelectedEmoji] = useState(0);
  const [hoveredEmoji, setHoveredEmoji] = useState(null);

  const handleEmojiSliderChange = (value) => {
    setSelectedEmoji(value);
  };

  const handleEmojiHover = (index) => {
    setHoveredEmoji(index);
  };

  return (
    <div className="mt-20">
      <p className="text-lg font-bold text-blue-600 mb-4">
        Share your experience in scaling
      </p>
      <div className="flex flex-wrap mb-6">
        {emojiData.map((emojiItem, index) => (
          <div
            key={index}
            className={`flex flex-col items-center mr-4 mb-4 ${
              hoveredEmoji === index ? "bg-gray-200" : ""
            }`}
            onMouseEnter={() => handleEmojiHover(index)}
            onMouseLeave={() => handleEmojiHover(null)}
          >
            <img
              className="w-12 h-12"
              src={
                selectedEmoji === index
                  ? emojiItem.colorImageSource
                  : emojiItem.bwImageSource
              }
              alt={emojiItem.label}
            />
            <p
              className={`text-sm font-bold mt-2 ${
                selectedEmoji === index || hoveredEmoji === index
                  ? "text-green-600"
                  : "text-gray-600"
              }`}
            >
              {emojiItem.label}
            </p>
          </div>
        ))}
      </div>

      <input
        type="range"
        className="w-full"
        value={selectedEmoji}
        min={0}
        max={emojiData.length - 1}
        step={1}
        onChange={(e) => handleEmojiSliderChange(e.target.value)}
        style={{
          background: `linear-gradient(to right, #105955 0%, #105955 ${(
            (selectedEmoji / (emojiData.length - 1)) *
            100
          ).toFixed(2)}%, #A5E0DD ${
            ((selectedEmoji / (emojiData.length - 1)) * 100).toFixed(2)
          }%, #A5E0DD 100%)`,
        }}
      />
    </div>
  );
};

export default EmojiSlider;
