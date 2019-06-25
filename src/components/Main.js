import React, { useState } from 'react';
import {
    Box,
    Flex,
    Text
  } from 'rebass'
import styled from 'styled-components'
import { fetchRandomEmoji } from '../utils';

  const Input = styled.input`
    width: 80%;
    border: 1px solid #ccc;
    height: 30px;
    font-size: large;
    margin-top: 30px;
    border-radius: 5px;
  `;

const Main = () => {
    const [value, setValue] = useState('');

    const handleInputChange = (event) => {
      setValue(event.target.value)
    }

    return (
        <Flex flexDirection="center" justifyContent='center'>
            <Box width={3/4} my={40} px={2} color='black'>
                <Text
                    fontSize={[ 3, 4, 5 ]}
                    fontWeight='bold'
                > 🕵️ 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗩𝗶𝗱𝗲𝗼𝘀 𝗱𝗶𝗿𝗲𝗰𝘁𝗹𝘆 𝗙𝗿𝗼𝗺 𝗜𝗻𝘀𝘁𝗿𝗮𝗴𝗿𝗮𝗺
                </Text>
                <Text
                    fontSize={[ 2, 3, 4 ]}
                    fontWeight='light'
                >
                <em>* Paste a link to the video below</em>
                </Text>
                <Input
                placeholder="https://www.instagram.com/p/BXFTAZTBELn/"
                type="url" onChange={handleInputChange} value={value} />
                <Box my={20}>
                    <button disabled>{`Click Me ${fetchRandomEmoji()}`}</button>
                </Box>
            </Box>
        </Flex>
    )
}

export default Main;