import React, { useState } from 'react';
import {
    Box,
    Flex,
    Text,
} from 'rebass'
import { fetchRandomEmoji } from '../utils';
import { Input, StyledButton } from './Utils';

const Main = () => {
    const [url, setUrl] = useState('');

    const handleInputChange = (event) => {
      setUrl(event.target.value)
    }

    function validateUrl() {
      return !url.startsWith('https://www.instagram.com/');
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
                <Text
                    fontSize={[ 1, 2, 3 ]}
                    fontWeight='light'
                >
                  <em>* Only works with videos that are publicly available </em>
                </Text>
                <Input
                  placeholder="https://www.instagram.com/p/BXFTAZTBELn/"
                  type="url"
                  onChange={handleInputChange}
                  value={url}
                />
                <Box my={20}>
                    <StyledButton
                      width={[ 1, 1, 1/2 ]}
                      disabled={validateUrl()}
                      onClick={() => console.log('click')}
                    >
                      {`Click Me ${fetchRandomEmoji()}`}
                    </StyledButton>
                </Box>
            </Box>
        </Flex>
    )
}

export default Main;