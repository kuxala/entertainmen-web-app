import "./Series.css";
import Card from "../card/Card";

function Series({ movieData, setMovieData }: any) {
  return (
    <>
      <div id="series">
        <h1>TV Series</h1>
        <div className="columns">
          {movieData.map((x: any) => {
            if (x.category == "TV Series") {
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
