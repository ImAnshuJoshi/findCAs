import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    // Navigate only if searchInput is not empty
    if (searchInput.trim() !== "") {
      navigate(`/caDetails/${searchInput}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Navigate only if searchInput is not empty
      if (searchInput.trim() !== "") {
        navigate(`/caDetails/${searchInput}`);
      }
    }
  };

  return (
    <div className="flex">
      <input
        type="text"
        name="search"
        placeholder="Michael Jackson"
        value={searchInput}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="w-full rounded-l-[10px] border-none h-[73px] px-4"
      />
      <button
        className="bg-primary rounded-r-[10px] text-white px-9 hover:text-black"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
