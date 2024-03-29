import { useState } from "react";
import "./Card.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  year: number;
  category: string;
  rating: any;
  title: string;
  url: string;
  isBookmarked: boolean;
  movieData: any;
  setMovieData: any;
}

const Play = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 28.5px;
  gap: 10px;
  width: 120px;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.25);
`;

const PlayImg = styled.img`
  width: 24px;
`;

const PlayP = styled.p`
  color: var(--Pure-White, #fff);
  font-family: Outfit;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

const CardContainer = styled.div`
  padding: 0 16px;
  margin-top: 16px;
  position: relative;
`;

const CardImage = styled.img`
  width: 100%;
  /* height: 70%; */
  flex-shrink: 0;
  border-radius: 8px;
`;

const TextContainer = styled.div`
  display: flex;
  gap: 15px;
  padding-top: 8px;
`;

const Text = styled.p`
  color: var(--Pure-White, #fff);
  font-family: Outfit;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CardTitle = styled.p`
  padding-top: 4px;
  padding-bottom: 16px;
  color: var(--Pure-White, #fff);
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
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
  position: absolute;
  right: 5%;
  top: 5%;
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
function Card({
  year,
  category,
  rating,
  title,
  url,
  isBookmarked,
  movieData,
  setMovieData,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <CardContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <Link to="play">
          <Play>
            <PlayImg src="../../assets/icon-play.svg" alt="Play Icon" />
            <PlayP>Play</PlayP>
          </Play>
        </Link>
      )}
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
      <CardImage src={url} />

      <TextContainer>
        <Text>{year}</Text>
        <Text>{category}</Text>
        <Text>{rating}</Text>
      </TextContainer>
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
}

export default Card;
