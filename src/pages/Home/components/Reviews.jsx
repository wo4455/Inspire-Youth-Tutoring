import React from "react";

const Review = ({ quote, author, left }) => {
  return (
    <div
      className={`${
        left ? "items-start text-left" : "items-end text-right"
      } flex flex-col pt-4`}
    >
      <p className="text-2xl font-open_sans font-light italic leading-10 w-3/4">
        {quote} - {author}
      </p>
      <p className="text-sm font-open_sans font-light my-5">{author}</p>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="container mx-auto pt-8">
      <section className="text-left border-b border-gray-400 pb-7">
        <h1 className="text-4xl md:text-6xl font-georgia mb-4 mt-8">REVIEWS</h1>
        <div className="flex flex-col md:flex-row md:justify-between mb-5 md:mt-10">
          <p className="my-8 md:my-0 italic text-lg font-light font-open_sans">
            Comments From Our Clients
          </p>
          <p className="ml-5 md:ml-0 md:w-1/2 text-md font-open_sans font-light">
            Nothing means more to us than hearing from our satisfied clients
            about how our services helped them overcome their academic
            challenges. Check out some of their testimonials below and let us
            know how we can help you.
          </p>
        </div>
      </section>
      <section className="pb-7">
        <Review
          quote={
            '"My daughter was struggling with math, but after just a few sessions with her high school tutor, she gained confidence and improved her grades significantly. The personalized attention and relatable teaching made a huge difference!" '
          }
          author={"Jefferson Ford"}
          left
        />
        <Review
          quote={
            "\"I was amazed at how quickly my son's understanding of science concepts improved. His high school tutor was patient, knowledgeable, and able to explain things in a way that really clicked for him. We're so grateful for this fantastic tutoring service!\""
          }
          author={"Clarice Chen"}
        />
        <Review
          quote={
            "\"The improvement in my child's reading and writing skills has been incredible. The high school tutor was not only supportive but also made learning enjoyable for my son. I couldn't be happier with the results!\""
          }
          author={"Jimmy Richardson"}
          left
        />
        <Review
          quote={
            '"Our daughter used to dread homework time, but now she looks forward to her tutoring sessions. The high school tutors are enthusiastic and know how to connect with younger students. We\'ve seen a dramatic improvement in her grades and attitude toward school."'
          }
          author={"Gabriel Herring"}
        />
      </section>
    </div>
  );
};

export default Reviews;
