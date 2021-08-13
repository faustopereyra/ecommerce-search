import { useState } from "react";
import { useHistory } from "react-router";
import { useActions } from "../../hooks/useActions";
import { SearchForm, SearchInput, SearchButtom } from "./styled";

const SearchBox: React.FC = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const { getSearchData } = useActions();
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
  };
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const query = `q=${search}`;
    history.push({
      pathname: "/search/",
      search: query,
    });
    getSearchData("?" + query);
  };
  return (
    <SearchForm method="GET" role="search">
      <SearchInput
        placeholder="Nunca dejes de buscar"
        aria-label="Nunca dejes de buscar"
        value={search}
        onChange={handleChange}
      />
      <SearchButtom onClick={handleClick}>
        <svg viewBox="0 0 512.005 512.005">
          <g>
            <path
              d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
			S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
			c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
			 M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"
            />
          </g>
        </svg>
      </SearchButtom>
    </SearchForm>
  );
};

export default SearchBox;
