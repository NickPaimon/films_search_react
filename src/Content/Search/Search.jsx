import React, {useState} from 'react';

const Search = ({search}) => {
    const [searchText, setSearchText] = useState("");
    const onTextChange = (e) => {
        setSearchText(e.target.value)
    };
    const onButtonClick = () => {
        search(searchText);
    };
    const onEnterPress = (e) => {
      if(e.key === "Enter") {
          onButtonClick()
      }
    };
    return (
        <div className="search_block">
            <input type="text"
                    value={searchText}
                   onChange={onTextChange}
                   placeholder="Enter film name"
                   onKeyPress={onEnterPress}
            />
            <button onClick={onButtonClick}>Search</button>
        </div>
    )
};

export default Search;