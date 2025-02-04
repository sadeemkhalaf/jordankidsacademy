import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
    name: "Shany White",
    avatar: "https://via.placeholder.com/50", // Replace with actual image
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
    name: "Judy Robert",
    avatar: "https://via.placeholder.com/50", // Replace with actual image
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
    name: "Shany White",
    avatar: "https://via.placeholder.com/50", // Replace with actual image
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
    name: "Judy Robert",
    avatar: "https://via.placeholder.com/50", // Replace with actual image
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-8">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/mother.png" // Replace with actual image
          alt="Mother and child"
          className="w-full max-w-md md:max-w-lg"
        />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 text-left">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          <span className="italic text-orange-500">Testimonials</span> from parents <br />
          who are proud to entrust <br /> their children to us
        </h2>
        <p className="mt-2 text-gray-500 font-medium">Words from Happy Parents!</p>

        {/* Testimonial Carousel */}
        <div className="relative mt-8">
          <Swiper
            modules={[Navigation]} // Enables navigation arrows
            navigation
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              768: { slidesPerView: 2 }, // Shows 2 slides on desktop
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
                  <p className="text-gray-700">{testimonial.text}</p>
                  <div className="flex flex-col items-center mt-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <p className="mt-2 font-semibold">{testimonial.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
