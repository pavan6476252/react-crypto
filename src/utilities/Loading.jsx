import { Box, Stack, keyframes } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import React from 'react'
const animationKeyframes = keyframes`
to {transform: rotate(360deg);}
 `;

const animation = `${animationKeyframes} 0.5s linear infinite`;

function Loading() {
    return (
        <Stack w={'full'} h={'100vh'} align={'center'} justifyContent={'center'}>
            <Box
                as={motion.div}
                animation={animation}
                w={'24'} h={'24'} borderRadius={'full'} borderBottom={'4px solid'} >

            </Box>
        </Stack>
    )
}

export default Loading