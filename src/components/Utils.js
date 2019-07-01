import styled from 'styled-components';
import React from 'react';

import {
    Button,
  } from 'rebass'

export const Input = styled.input`
    width: 80%;
    border: 1px solid #ccc;
    height: 30px;
    font-size: large;
    margin-top: 30px;
    border-radius: 5px;
`;

export const StyledButton = styled(Button)({
    border: props => props.disabled ? '1px solid whitesmoke' : '1px solid black',
    backgroundColor: props => props.disabled ? 'whitesmoke' : 'white',
    color: props => props.disabled ? 'grey' : 'black',
});


export const Fetching = () => {
    return (
    <em>* Fetching
        <span className="ellipsis">
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </span>
    </em>
    );
}