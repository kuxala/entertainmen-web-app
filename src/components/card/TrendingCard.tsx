import "./TrendingCard.css";
import styled from "styled-components";
// const [isHovered, setIsHovered] = useState(false);

// const handleMouseEnter = () => {
//   setIsHovered(true);
// };

// const handleMouseLeave = () => {
//   setIsHovered(false);
// };
// onMouseEnter={handleMouseEnter}
// onMouseLeave={handleMouseLeave}
interface Props {
  year: number;
  category: string;
  rating: any;
  title: string;
  url: string;
  index: number;
  movieData: any;
  setMovieData: any;
  isBookmarked: boolean;
}

const Bookmarks = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  background-color: #10141e;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
const CenterBookmark = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    margin-bottom: 120px;
    margin-right: 20px;
  }
`;

const emptyBookmark = "../../assets/icon-bookmark-empty.svg";
const fullBookmark = "../../assets/icon-bookmark-full.svg";
function TrendingCard({
  year,
  category,
  rating,
  title,
  url,
  movieData,
  setMovieData,
  isBookmarked,
}: Props) {
  return (
    <>
      <div className="trending-pictures">
        <div
          id="trending-card"
          style={{
            backgroundImage: `url(${url})`,
            backgroundSize: "cover",
          }}
        >
          <div id="all-text">
            <CenterBookmark>
              <Bookmarks>
                <img
                  src={isBookmarked ? fullBookmark : emptyBookmark}
                  width="16px"
                  onClick={() => {
                    movieData[
                      movieData.findIndex((item: any) => item.title === title)
                    ].isBookmarked =
                      !movieData[
                        movieData.findIndex((item: any) => item.title === title)
                      ].isBookmarked;
                    setMovieData([...movieData]);
                  }}
                />
              </Bookmarks>
            </CenterBookmark>

            <div id="texts">
              <p id="year">{year}</p>
              <p id="movie">{category}</p>
              <p id="pg">{rating}</p>
            </div>
            <p id="title">{title}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default TrendingCard;
