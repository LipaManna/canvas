import React from 'react'
import Slider from 'react-slick'
// import '/src/slider.css'

const TestimonialSlider = () => {
    const details = [{
      id: 1,
      src: "https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Image 1",
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu laoreet odio. Aenean eget lorem pellentesque, imperdiet ex convallis, iaculis justo. Etiam ac purus purus. Vivamus vel lacus non diam gravida efficitur. Proin elementum velit vel mauris euismod consectetur. Nunc neque libero, pulvinar et odio eu, vestibulum iaculis tortor.`, client: "John Doe"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Image 2 ",
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu laoreet odio. Aenean eget lorem pellentesque, imperdiet ex convallis, iaculis justo. Etiam ac purus purus. Vivamus vel lacus non diam gravida efficitur. Proin elementum velit vel mauris euismod consectetur. Nunc neque libero, pulvinar et odio eu, vestibulum iaculis tortor.`
      , client: "John Doe"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Image 3",
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu laoreet odio. Aenean eget lorem pellentesque, imperdiet ex convallis, iaculis justo. Etiam ac purus purus. Vivamus vel lacus non diam gravida efficitur. Proin elementum velit vel mauris euismod consectetur. Nunc neque libero, pulvinar et odio eu, vestibulum iaculis tortor.`, client: "John Doe"
    }
    ];

const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 1000,

  };
  return (
    <div className='common-pad'>
      <div className='container'>
      <div className='text-center'>
      <h2> What Our Users Say </h2>
      </div>

        <div className="imgslider">
          <Slider {...settings}>
            {details.map((item) => (
              <div className='client-img' key={item.id}>
                <img src={item.src} />
                <p>{item.comment}</p>
                  <h5>{item.client}</h5>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>

  );
}
export default TestimonialSlider