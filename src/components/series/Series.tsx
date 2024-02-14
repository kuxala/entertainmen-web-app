import "./Series.css";
import data from "../../data.json";
import Card from "../card/Card";

function Series() {
  return (
    <>
      <div id="series">
        <h1>TV Series</h1>
        <div className="columns">
          {data.map((x) => {
            if (x.category == "TV Series") {
              return (
                <Card
                  year={x.year}
                  category={x.category}
                  rating={x.rating}
                  title={x.title}
                  url={x.thumbnail.regular.large}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Series;
