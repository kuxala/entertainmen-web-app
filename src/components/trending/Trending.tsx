import "./Trending.css";
import TrendingCard from "../card/TrendingCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../data.json";
import { useState } from "react";
const settings = {
  dots: false,
  arrows: false, // Remove arrow buttons
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true, // Remove gap between images
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

function Trending({ movieData, setMovieData }: any) {
  return (
    <div id="trending">
      <h1>Trending</h1>
      <Slider {...settings}>
        {data.map((x) => {
          if (x.isTrending) {
            return (
              <TrendingCard
                year={x.year}
                category={x.category}
                rating={x.rating}
                title={x.title}
                url={x.thumbnail.regular.large}
                index={1}
                movieData={movieData}
                setMovieData={setMovieData}
                isBookmarked={x.isBookmarked}
              />
            );
          } else {
            return null;
          }
        })}
      </Slider>
    </div>
  );
}
export default Trending;
