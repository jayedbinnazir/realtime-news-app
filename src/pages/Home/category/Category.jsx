import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { NewsCard } from '../newsCard/NewsCard';
import { Box } from '@mui/material';

export const Category = () => {
    const categoryNews = useLoaderData() ;
    console.log(categoryNews)
    // const { id } = useParams()

  return (
    
    < >
      {
        categoryNews?.map((news)=>{
          return <NewsCard key={news._id} news={news} ></NewsCard>
        })
      }
    </>
  )
}
