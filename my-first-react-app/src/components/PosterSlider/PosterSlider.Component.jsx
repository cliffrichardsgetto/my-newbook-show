import React from 'react'
//import {Link} from 'react-router-dom'
import Slider from "react-slick";
import Poster from "../Poster/Poster.Component";


//const Poster= (props) => {
const PosterSlider = (props) => {
    const { posters, title, subtitle, isDark, config } = props;
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };  
  return (
    <>
      <div className="flex flex-col items-start sm:ml-3 my-2">
        <h3
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        <p className={`text-sm  ${isDark ? "text-white" : "text-gray-800"}`}>
          {subtitle}
        </p>
      </div>
      {config && (
        <Slider {...config}>
          {posters.map((each, index) => (
            <Poster {...each} isDark={isDark} key={index} />
          ))}
        </Slider>
      )}
      {!config && (
        <Slider {...settings}>
          {posters.map((each, index) => (
            <Poster {...each} isDark={isDark} key={index} />
          ))}
        </Slider>
      )}
    </>
  );
};

export default PosterSlider;
//  <>
 //   <Link to={`/movie/${props.id}`}>
  //    <div className="flex flex-col items-start gap-2 px-1 md:px-3">
  //      <div className="h-40 md:h-80">
    //      <img
      //      src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
       //     alt="poster"
       //     className="w-full h-full rounded-md"
      //    />
     //   </div>
     //   <h3
       //   className={`text-lg font-bold ${
       //     props.isDark ? "text-white" : "text-gray-700"
      //    }`}
      //  >
       //   {props.title}
     //   </h3>
     //   {/* <p>{props.subtitle}</p> */}
    //  </div>
   // </Link>
 // );


   // <div>Poster</div>)
//}

//export default Poster