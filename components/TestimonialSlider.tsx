import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from "@/Components/ClientReview";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const TestimonialSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite={true}
      responsive={responsive}
      itemClass="item"
    >
      <ClientReview
        image="/images/quickride.jpg"
        name="TEAM LEADER FOR OPERATIONS"
        role="QUICK RIDE"
        description="I began as an Operations Executive at Quickride-Carpool, India's leading carpool company, with a mission to ease traffic and save fuel. My main tasks included managing daily customer trips, addressing their concerns, and ensuring safe and smooth journeys. Additionally, I had also handling driver issues related to technical bugs in app, ensuring they face no problems with the app. Being part of this effort to improve commuting in India was truly rewarding."
      />
      <ClientReview
        image="/images/webconverts.jpg"
        name="DIGITAL ACCOUNT EXECUTIVE INTERN"
        role="WEBCONVERTS"
        description="During my internship as a Digital Account Executive at Webconverts Pvt Ltd, where I handled client inquiries for website creation and digital marketing services like Meta ads, Google ads, and Linkedin Ads, I also acquired valuable knowledge in areas such as Meta ads and SEO. Additionally, As the part of role, I was also to scheduling meetings of clients with the CEO, and actively participated in off-page activities to enhance our clients' online presence."
      />


    </Carousel>
  );
};

export default TestimonialSlider;
