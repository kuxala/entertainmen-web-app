import "./Movies.css";
import data from "../../data.json";
import Card from "../card/Card";

function Movies() {
  return (
    <>
      <div id="movies">
        <h1>Movies</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
          {data.map((x) => {
            if (x.category == "Movie") {
              return (
                <Card
                  year={x.year}
                  category={x.category}
                  rating={x.rating}
                  title={x.title}
                  url={x.thumbnail.regular.small}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Movies;
