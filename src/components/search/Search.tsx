import styled from "styled-components";
const Input = styled.input`
  height: 30px;
  width: 100%;
  background-color: transparent;
  font-family: Outfit;
  padding: 0 20px;
  color: #fff;
  opacity: 0.4979;
  font-size: 16px;
  border: 0px;
`;
const BothComponent = styled.div`
  display: flex;
  padding: 26px 16px;
  background: var(--Dark-Blue, #10141e);
  @media screen and (min-width: 768px) {
    padding-left: 150px;
  }
`;

function Search({ setFocus, setInput }: any) {
  return (
    <BothComponent>
      <img src="../../assets/icon-search.svg" width="32px" />
      <Input
        placeholder="Search for movies or TV series"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onFocus={() => {
          setFocus(true);
        }}
      />
    </BothComponent>
  );
}

export default Search;
