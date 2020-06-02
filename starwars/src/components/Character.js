// Write your Character component here
import React from 'react';
import styled from 'styled-components';

// styled-components
const CharacterDiv = styled.div`
 width: 29%;
 padding: 20px 30px;
 background-color: darksalmon;
 border-left: 25px solid #333;
 color: #333;
 margin-bottom: 25px;
 text-align: left;
`;
const Name = styled.div`
 font-size: 1.7rem;
 margin-bottom: 20px;
 border-bottom: 2px solid #333;
`;
const Gender = styled.span`
 margin-left: 5px;
 color: saddlebrown;
`;
const Paragraph = styled.p`
 margin-bottom: 5px;
 text-transform: capitalize;
`;



const Character = (props) => {



    return (
        <CharacterDiv>
            <Name>{props.info.name}<Gender>({props.info.gender})</Gender></Name>
            <Paragraph>Hair Color: {props.info.hair_color}</Paragraph>
            <Paragraph>Height: {props.info.height}</Paragraph>
            <Paragraph>Mass: {props.info.mass}</Paragraph>
            <Paragraph>Skin Color: {props.info.skin_color}</Paragraph>
        </CharacterDiv>

    );
}

export default Character;