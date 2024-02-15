import "./TrendingCard.css";
import styled from "styled-components";
import data from "../../data.json";
import { useState } from "react";
import { json } from "react-router-dom";

interface Props {
  year: number;
  category: string;
  rating: any;
  title: string;
  url: string;
  index: number;
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

function TrendingCard({ year, category, rating, title, url }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div className="trending-pictures">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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
                  src="../../assets/icon-bookmark-empty.svg"
                  width="16px"
                  onClick={() => {
                    data.map((x) => {
                      if (x.isBookmarked) {
                        return !x.isBookmarked;
                      }
                    });
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
