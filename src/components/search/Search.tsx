import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";

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
  const { register, handleSubmit, watch } = useForm<any>();

  const onSubmit = (data: string) => {
    console.log(data);
  };

  return (
    <BothComponent onSubmit={handleSubmit(onSubmit)}>
      <img src="../../assets/icon-search.svg" width="32px" />
      <Input
        placeholder="Search for movies or TV series"
        {...register("search")}
      />
    </BothComponent>
  );
}

export default Search;
