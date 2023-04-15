import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../api/ApiConstants';
import Loading from '../utilities/Loading'
import Error from '../utilities/Error'
import { Card, Container, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';

function Exchanges() {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    try {
      axios.get(`${baseUrl}/exchanges`)
        .then(res => {
          setLoading(false)
          setData(res.data)
          console.log(res.data)
        }).catch(err => {
          setLoading(false)
          setError(true);
          console.log(err);
        })

    } catch (e) {
      console.log("error")
    }
  }, []);
  return (<>
    {
      isError ? <Error /> : isLoading ? <Loading /> :
        
          <HStack wrap={'wrap'} justifyContent={'center'}>
            {data.map((e) => CoinCard(e))}
          </HStack>
    
    }
  </>);
}

export default Exchanges;




function CoinCard(data) { 
  return (
    <a href={data.url} target={'_blank'}>
      <VStack 
      css={{"&:hover": {
        transform: "scale(1.1)",
      }}}
      w={'52'} shadow={'lg'} p={'4'} m={'4'} borderRadius={'lg'} transition={'all 0.3s'} >
        <Image
          src={data.image}
          w={'10'}
          h={'10'}
          objectFit={'contain'}
          alt='exchange'
        />
        <Heading size={'md'} noOfLines={1}>{data.name}</Heading>
      </VStack>
    </a>
  )
}
