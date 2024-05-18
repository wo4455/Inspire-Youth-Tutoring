import React from "react";

const ListItem = ({ title, desc }) => {
  return (
    <div className="flex flex-col items-start text-left md:flex-row md:justify-between">
      <h3 className="text-xl font-open_sans font-light italic mb-5">{title}</h3>
      <p className="leading-7 text-sm font-open_sans font-light mb-5 md:w-8/12">
        {desc}
      </p>
    </div>
  );
};

const List = () => {
  return (
    <section className="md:w-2/3 m-auto flex flex-col items-start text-left">
      <h2 className="text-3xl md:text-5xl font-georgia my-10">Our Services</h2>
      <ListItem
        title={"Specializations"}
        desc={
          "At Inspire Youth Tutoring, we offer comprehensive tutoring across all subjects, including specialized preparation for the selective enrollment test. Our expertise covers core school subjects, focused test preparation, and targeted high school prep."
        }
      />
      <ListItem
        title={"Target Audience"}
        desc={
          "Our services cater to 3rd through 8th graders, providing support for school material, selective enrollment test preparation for 7th graders, and high school prep for 8th graders. We tailor our approach to meet the specific needs of each grade level."
        }
      />
      <ListItem
        title={"Tutoring Formats"}
        desc={
          "We provide flexible tutoring options to suit different preferences and needs. One-on-one tutoring is available both in-person and online, while group sessions are conducted online, promoting collaborative learning in a virtual environment."
        }
      />
      <ListItem
        title={"What Sets Us Apart"}
        desc={
          "Our high school tutors bring a unique perspective to teaching. Having recently mastered the material themselves, they relate closely to their students' experiences and challenges, making learning more relatable and effective."
        }
      />
      <ListItem
        title={"Delivery Methods"}
        desc={
          "Our tutoring sessions are designed to be convenient and accessible. We offer in-person and online one-on-one tutoring, as well as online group sessions, ensuring that every student can find a format that works best for them."
        }
      />
      <ListItem
        title={"Specialized Services"}
        desc={
          "We offer a range of specialized services, including test preparation, homework help, and skill development workshops. Whatever your academic needs, our tutors are equipped to provide the necessary support and guidance."
        }
      />
      <ListItem
        title={"Testimonials"}
        desc={
          "Our clients have seen remarkable improvements in their children's academic performance. From enhanced understanding of algebra to better reading and writing skills, parents have praised our tutors for their supportive and effective teaching methods."
        }
      />
      <div className="flex flex-col items-start text-left mt-5 mb-10">
        <p className="leading-7 text-md font-open_sans font-light">
          Join us at Inspire Youth Tutoring and let us help your child achieve
          academic success with confidence and enthusiasm. Contact us today to
          learn more about our services and how we can support your educational
          goals.
        </p>
      </div>
    </section>
  );
};

export default List;
