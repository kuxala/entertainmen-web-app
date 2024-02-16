import Card from "../card/Card";
import "./Recommended.css";

function Recommended({ movieData, setMovieData }: any) {
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
              isBookmarked={x.isBookmarked}
              movieData={movieData}
              setMovieData={setMovieData}
              key={x.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Recommended;
