import Card from "../card/Card";
import "./Recommended.css";

function Recommended({ movieData }: any) {
  return (
    <div id="recommended">
      <h1>Recommended for you</h1>
      <div className="columns">
        {movieData.map((x: any) => {
          return (
            <Card
              year={x.year}
              category={x.category}
              rating={x.rating}
              title={x.title}
              url={x.thumbnail.regular.large}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Recommended;
