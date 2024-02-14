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

function Card({ year, category, rating, title, url }: Props) {
  return (
    <>
      <div id="card">
        <img src={url} id="image" />
        <div id="all-texts">
          <div id="text">
            <p>{year}</p>
            <p>{category}</p>
            <p>{rating}</p>
          </div>
          <p id="card-title">{title}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
