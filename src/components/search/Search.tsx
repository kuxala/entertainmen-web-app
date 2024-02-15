import styled from "styled-components";
import { useState } from "react";
import data from "../../data.json";
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
const BothComponent = styled.form`
  display: flex;
  padding: 26px 16px;
  background: var(--Dark-Blue, #10141e);
  @media screen and (min-width: 768px) {
    padding-left: 150px;
  }
`;

function Search() {
  const [search, setSearch] = useState();

  return (
    <BothComponent>
      <img src="../../assets/icon-search.svg" width="32px" />
      <Input placeholder="Search for movies or TV series" />
      <div></div>
    </BothComponent>
  );
}

export default Search;
