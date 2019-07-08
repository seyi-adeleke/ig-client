import React, { useState } from 'react';
import {
    Box,
    Flex,
    Text,
} from 'rebass';
import axios from 'axios';

import { fetchRandomEmoji, validUrl } from '../utils';
import { Input, StyledButton, Fetching } from './Utils';

const Main = () => {
    const [url, setUrl] = useState('');
    const [fetching, setFetching] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleInputChange = (event) => {
      setUrl(event.target.value);
    }

    function toggleButtonCopy() {
      if (!validUrl(url)) {
        return `Click Me ${fetchRandomEmoji()}`;
      }
      return '⬆️ Paste a link here ⬆️';
    }

    function fetchVideoUrl() {
        setFetching(true);
        axios.post('http://localhost:5000/api/v1/url', {
          url,
        }).then(response => {
            setFetching(false);
            window.open(response.data.url, '_blank');
        }).catch((error) => {
            setFetching(false);
            setShowErrorMessage(true);
            setTimeout(() => {
              setShowErrorMessage(false);
            }, 3000);
        });
    }

    return (
        <Flex flexDirection="center" justifyContent='center'>
            <Box width={3/4} my={100} px={2} color='black'>
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
                      width={[ 3/4, 1/2, 1/2 ]}
                      disabled={validUrl(url)}
                      onClick={() => fetchVideoUrl()}
                      className='submit-button'
                    >
                      {toggleButtonCopy()}
                    </StyledButton>
                </Box>
                {
                  fetching &&
                    <Box my={20}>
                      <Text
                          fontSize={[ 1, 2, 3 ]}
                          fontWeight='light'
                      >
                        <Fetching />
                      </Text>
                    </Box>
                }
                {
                  showErrorMessage &&
                    <Box my={20}>
                      <Text
                          fontSize={[ 1, 2, 3 ]}
                          fontWeight='light'
                          color='red'
                      >
                        There was an error fetching this video! Check the Url and ensure the video is publically available
                      </Text>
                    </Box>
                }
            </Box>
        </Flex>
    )
}

export default Main;