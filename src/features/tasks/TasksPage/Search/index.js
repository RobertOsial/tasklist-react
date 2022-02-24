import Input from "../../Input";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";
import { Wrapper } from "./styled";

const Search = () => {
  const query = useQueryParameter();
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter(target.value !== "" ? target.value : undefined);
  }

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
}

export default Search;