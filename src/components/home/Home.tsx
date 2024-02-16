import Card from "../card/Card";
import Recommended from "../recommended/Recommended";
import Trending from "../trending/Trending";
import styled from "styled-components";
const SearchResults = styled.div`
  margin: 100px 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    margin-left: 150px;
    margin-top: 100px;
  }
`;
const ResultCard = styled.div`
  /* width: 250px;
  margin: 100px 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    margin-left: 150px;
    margin-top: 100px;
    width: 400px;
  } */
`;
function Home({ movieData, setMovieData, focus, input }: any) {
  return (
    <>
      <Trending movieData={movieData} setMovieData={setMovieData} />
      {focus ? (
        <SearchResults>
          {movieData.map((x: any) => {
            if (
              input == x.title.toLowerCase() ||
              input == x.title ||
              input == x.title[0] ||
              input == x.title.toLowerCase()[0]
            ) {
              return (
                <ResultCard>
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
                </ResultCard>
              );
            }
          })}
        </SearchResults>
      ) : (
        <Recommended movieData={movieData} setMovieData={setMovieData} />
      )}
    </>
  );
}

export default Home;
