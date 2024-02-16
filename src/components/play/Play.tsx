import styled from "styled-components";

const Description = styled.div`
  display: flex;
  margin: 100px 16px;
  width: 100%;
  min-height: 350px;
  background: var(--Semi-Dark-Blue, #161d2f);
  @media only screen and (min-width: 768px) {
    margin-left: 150px;
  }
`;
const DescriptionDiv = styled.div`
  display: flex;
  padding: 0 50px;
  gap: 20px;
`;
const DescripitionP = styled.p`
  color: var(--Pure-White, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Outfit;
  font-size: 18px;
  font-style: normal;
  font-weight: bolder;
  line-height: normal;
`;
const DescripitionPSmall = styled.p`
  color: var(--Pure-White, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Outfit;
  font-size: 18px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
`;
const Movie = styled.div`
  width: 70%;
  display: flex;
  margin: 0 auto;
  height: 500px;
  background-color: black;
`;
const MovieH1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: #fff;
  font-family: Outfit;
`;
const CenterH1 = styled.h1`
  color: #fff;
  font-family: outfit;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Play() {
  return (
    <>
      <Movie>
        <MovieH1>It is supposed to work but I dont know back-end YET</MovieH1>
      </Movie>
      <Description>
        <>
          <div
            style={{
              width: "350px",
              height: "250px",
              backgroundColor: "#000000",
            }}
          >
            <CenterH1>Some Image</CenterH1>
          </div>
          <div>
            <DescriptionDiv style={{ paddingTop: "30px" }}>
              <DescripitionP>Title</DescripitionP>
              <DescripitionPSmall>Lorem</DescripitionPSmall>
            </DescriptionDiv>
            <DescriptionDiv>
              <DescripitionP>Year: </DescripitionP>
              <DescripitionPSmall>Lorem.</DescripitionPSmall>
            </DescriptionDiv>

            <DescriptionDiv>
              <DescripitionP>Category</DescripitionP>
              <DescripitionPSmall>Lorem, ipsum dolor.</DescripitionPSmall>
            </DescriptionDiv>
            <DescriptionDiv style={{ flexDirection: "column" }}>
              <DescripitionP style={{ paddingTop: "50px" }}>
                Description
              </DescripitionP>
              <DescripitionPSmall style={{ paddingRight: "300px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam similique aperiam sit consequatur, id minus at minima!
                Aspernatur voluptate, facere asperiores cupiditate ducimus odit
                non debitis odio nihil eos, ipsa culpa labore ad id quisquam,
                accusantium rerum animi ex autem nobis quibusdam. Debitis
                necessitatibus nulla sint explicabo accusantium atque at?
              </DescripitionPSmall>
            </DescriptionDiv>
          </div>
        </>
        );
      </Description>
    </>
  );
}

export default Play;
