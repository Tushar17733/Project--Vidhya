import { useState, useEffect } from "react";
import './style.css'


export default function ImageSlider() {
  const images = [
    { src: "/1.gif", textBefore: "Numerous free trial courses", textAfter: "Free courses for you to find your way to learning" },
    { src: "/2.gif", textBefore: "Quick and easy learning", textAfter: "Easy and fast learning at any time to help you improve various skills" },
    { src: "/3.gif", textBefore: "Create your own study plan", textAfter: "Study according to the study plan, make study more motivated" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  // This snippet automatically updates currentIndex every 4 seconds 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="leftpanel">
      <div className="slider-container">
        {/* Text Before GIF */}
        <h1 className="text-before">{images[currentIndex].textBefore}</h1>

        {/* GIF Slider */}
        <div className="slider">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Slide ${index + 1}`}
              className={index === currentIndex ? "active" : "hidden"}
            />
          ))}
        </div>

        {/* Text After GIF */}
        <h2 className="text-after">{images[currentIndex].textAfter}</h2>

        {/* Dots Navigation */}
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
