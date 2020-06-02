import React from 'react';
import styled from 'styled-components';


// Styled component
const SearchBarContainer = styled.form`
  position: absolute;
  top: 20px;
  left: 50px;
  
`
const SearchBarInput = styled.input`
    padding: 8px;
    color: #333;
    background-color: darksalmon;
    &::placeholder {
        color: #333
    }
`;



const SearchBar = (props) => {

    return (
        <SearchBarContainer onSubmit={(e) => {
            e.preventDefault()
        }}>
            <SearchBarInput
                type="text"
                value={props.SearchText}
                placeholder="Character to Search"
                onChange={(e) => {
                    props.SetSearchText(e.target.value)
                }
                }
            />
        </SearchBarContainer>
    );
};

export default SearchBar;