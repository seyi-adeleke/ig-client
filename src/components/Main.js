import React, {useState} from 'react';
import {
    Box,
    Flex,
    Text
  } from 'rebass'


const Main = () => {
    const [value, setValue] = useState('');

    const handleInputChange = (event) => {
      setValue(event.target.value)
    }

    return (
        <Flex flexDirection="center" justifyContent='center'>
            <Box width={3/4} px={2} color='white' bg='blue'>
                <Text>{'𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗩𝗶𝗱𝗲𝗼𝘀 𝗱𝗶𝗿𝗲𝗰𝘁𝗹𝘆 𝗙𝗿𝗼𝗺 𝗜𝗻𝘀𝘁𝗿𝗮𝗴𝗿𝗮𝗺'}</Text>
                <input onChange={handleInputChange} value={value} />
                <p className="App-intro">
                    <button>GET LINK</button>
                </p>
            </Box>
        </Flex>
    )
}

export default Main;