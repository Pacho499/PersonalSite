import { useState } from "react";
import "../style/ImageSlider.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const url = process.env.PUBLIC_URL
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const wwwLink = () => {
    if (slides[currentIndex].siteLink === null) {
      return (
        <h1 style={{ fontSize: "18px" }}>
          Pubblicazione vietata per motivi di copyright
        </h1>
      );
    } else {
      return (
        <a
          href={slides[currentIndex].siteLink}
          target="_blank"
          rel="noreferrer"
        >
          <img height="50px" src={url + ('/images/www.jpg')} alt="" />
        </a>
      );
    }
  };
  return (
    <div className="slideContainer">
      <div
        className="slide"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      <div className="navigateContainer">
        <div className="navigate">
          <div className="leftArrow" onClick={goToPrevious}>
            <FontAwesomeIcon icon={faArrowLeft} />{" "}
          </div>
          <p>{slides[currentIndex].title}</p>
          <div className="rightArrow" onClick={goToNext}>
            {" "}
            <FontAwesomeIcon icon={faArrowRight} />{" "}
          </div>
        </div>
        <div className="linkContainer">
          <a
            href={slides[currentIndex].gitLink}
            target="_blank"
            rel="noreferrer"
          >
            <img height="50px" src={url + ('/images/git.png')} alt="" />
          </a>
          {wwwLink()}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
