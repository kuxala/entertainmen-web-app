import "./Bookmarks.css";
import Card from "../card/Card";

function Bookmarks({ movieData }: any) {
  return (
    <>
      <div id="bookmarksPage">
        <h1>Bookmarked Movies</h1>
        <div className="columns">
          {movieData.map((x: any) => {
            if (x.isBookmarked) {
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

export default Bookmarks;
