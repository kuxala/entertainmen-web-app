import "./Movies.css";
import Card from "../card/Card";

function Movies({ movieData, setMovieData }: any) {
  return (
    <>
      <div id="movies">
        <h1>Movies</h1>
        <div className="columns">
          {movieData.map((x: any) => {
            if (x.category == "Movie") {
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

export default Movies;
