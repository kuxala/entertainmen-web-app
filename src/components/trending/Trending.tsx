import "./Trending.css";
import TrendingCard from "../card/TrendingCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../data.json";

const cardSpacing = {
  display: "inline-block",
  margin: "0 10px",
  whiteSpace: "nowrap",
};
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
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
        variableWidth: true,
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
              <div style={cardSpacing}>
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
              </div>
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
