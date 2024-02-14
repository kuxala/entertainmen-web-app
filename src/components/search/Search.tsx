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
`;
function Search() {
  return (
    <BothComponent>
      <img src="../../assets/icon-search.svg" />
      <Input placeholder="Search for movies or TV series" />
    </BothComponent>
  );
}

export default Search;
