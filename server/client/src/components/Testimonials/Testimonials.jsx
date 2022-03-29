import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { testimonialData } from "../../fakedata/fakedata";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonial">
      <h2>Testimonials</h2>
      <div>
        {testimonialData.length && (
          <>
            <div className="app__testimonial-item app__flex">
              <img
                src={testimonialData[currentIndex].imgurl}
                alt={testimonialData[currentIndex].name}
              />
              <div className="app__testimonial-content">
                <p className="p-text">
                  {testimonialData[currentIndex].feedback}
                </p>
                <div>
                  <h4 className="bold-text">
                    {testimonialData[currentIndex].name}
                  </h4>
                  <h5 className="p-text">
                    {testimonialData[currentIndex].company}
                  </h5>
                </div>
              </div>
            </div>

            <div className="app__testimonial-btns app__flex">
              <div
                className="app__flex"
                onClick={() =>
                  handleClick(
                    currentIndex === 0
                      ? testimonialData.length - 1
                      : currentIndex - 1
                  )
                }
              >
                <HiChevronLeft />
              </div>

              <div
                className="app__flex"
                onClick={() =>
                  handleClick(
                    currentIndex === testimonialData.length - 1
                      ? 0
                      : currentIndex + 1
                  )
                }
              >
                <HiChevronRight />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
