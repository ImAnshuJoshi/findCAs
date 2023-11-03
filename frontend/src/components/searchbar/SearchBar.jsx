import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  const navigate = useNavigate();

  return (
    <div className="flex">
      <input
        type="text"
        name="search"
        placeholder="Search by name"
        id="search"
        value={searchInput}
        onChange={handleChange}
        className=" w-full rounded-l-[10px] border-none h-[73px] px-4"
      />
      <button
        className="bg-primary rounded-[10px] text-white px-9 hover:text-black"
        onClick={() => navigate(`/caDetails/${searchInput}`)} //,,,,,,,,,,,
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
