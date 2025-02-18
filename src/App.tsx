// import React, { useState } from "react";
// import { Heart } from "lucide-react";
// import "./BirthdayCard.css";

// export default function BirthdayCard() {
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-purple-200">
//       <div
//         className={`card-container ${isOpen ? "card-open" : ""}`}
//         onClick={() => setIsOpen(!isOpen)}
//         role="button"
//         aria-label={isOpen ? "Close birthday card" : "Open birthday card"}
//         tabIndex={0}
//       >
//         <div className="card-inner">
//           {/* Front Side */}
//           <div className="card-front">
//             <h2 className="text-3xl font-bold text-center text-pink-600 mb-4">Happy 20th Anniversary!</h2>
//             <p className="text-xl text-center text-gray-700 mb-4">To the most lovable couple ever!👩‍❤️‍👨</p>
//             <Heart className="w-16 h-16 text-pink-500" />
//             <p className="text-sm text-gray-500 mt-4">(Click to open)</p>
//           </div>

//           {/* Back Side */}
//           <div className="card-back">
//             <h3 className="text-2xl font-semibold text-pink-600 mb-4">Dear Ma & Pa,</h3>
//             <p className="text-lg text-gray-700 text-center mb-4">
//             💕Happy 20th Anniversary!💕
//             </p>
//             <p className="text-lg text-gray-700 text-center mb-4">
//             💕Continue to share, experience and live the happiest moments of your everyday life forever!💕 
//             </p><p className="text-lg text-gray-700 text-center mb-4">💌  Both of you, mean everything to me. Soo blessed to have you both on my side!  💌
//             </p>
//             <p className="text-xl font-bold text-pink-600">Love you both!</p>
//             <p className="text-sm text-gray-500 mt-4">With all my love❤️,</p>
//             <p className="text-lg font-semibold text-gray-700">Your Dharan👨‍👩‍👦</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import { Heart } from "lucide-react";
import JSConfetti from "js-confetti"; // Import the library
import "./BirthdayCard.css"; // Import the CSS file

export default function BirthdayCard() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const confettiRef = useRef<JSConfetti | null>(null);

  // Initialize js-confetti
  useEffect(() => {
    confettiRef.current = new JSConfetti();
  }, []);

  const handleCardClick = () => {
    if (!isOpen) {
      // Trigger confetti effect
      confettiRef.current?.addConfetti({
        emojis: ["🎉", "✨", "💖", "🥳", "🎊"], // Customize emojis
        emojiSize: 50, // Size of the emojis
        confettiNumber: 50, // Number of particles
      });
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-purple-200">
      <div
        className={`card-container ${isOpen ? "card-open" : ""}`}
        onClick={handleCardClick}
        role="button"
        aria-label={isOpen ? "Close anniversary card" : "Open anniversary card"}
        tabIndex={0}
      >
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <h2 className="text-3xl font-bold text-center text-pink-600 mb-4">Happy 20th Anniversary!</h2>
            <p className="text-xl text-center text-gray-700 mb-4">To the most lovable couple ever!👩‍❤️‍👨</p>
            <Heart className="w-16 h-16 text-pink-500" />
            <p className="text-sm text-gray-500 mt-4">(Click to open)</p>
          </div>

          {/* Back Side */}
          <div className="card-back">
            <h3 className="text-2xl font-semibold text-pink-600 mb-4">Dear Ma & Pa,</h3>
            <p className="text-lg text-gray-700 text-center mb-4">
              💕Happy 20th Anniversary!💕
            </p>
            <p className="text-lg text-gray-700 text-center mb-4">
              💕Continue to share, experience and live the happiest moments of your everyday life forever!💕
            </p>
            <p className="text-lg text-gray-700 text-center mb-4">
              💌 Both of you, mean everything to me. Soo blessed to have you both on my side! 💌
            </p>
            <p className="text-xl font-bold text-pink-600">Love you both!</p>
            <p className="text-sm text-gray-500 mt-4">With all my love❤️,</p>
            <p className="text-lg font-semibold text-gray-700">Your Dharan👨‍👩‍👦</p>
          </div>
        </div>
      </div>
    </div>
  );
}