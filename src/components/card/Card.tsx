import { useState } from "react";
import data from "../../data.json";
import "./Card.css";
import styled from "styled-components";

interface Props {
  year: number;
  category: string;
  rating: any;
  title: string;
  url: string;
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
  height: 70%;
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

function Card({ year, category, rating, title, url }: Props) {
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
        <Play>
          <PlayImg src="../../assets/icon-play.svg" alt="Play Icon" />
          <PlayP>Play</PlayP>
        </Play>
      )}

      <CardImage src={url} alt="Card Image" />
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
