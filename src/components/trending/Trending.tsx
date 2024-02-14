import "./Trending.css";
import TrendingCard from "../card/TrendingCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
function Trending() {
  return (
    <div id="trending">
      <h1>Trending</h1>
      <Slider {...settings}>
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </Slider>
    </div>
  );
}
export default Trending;
