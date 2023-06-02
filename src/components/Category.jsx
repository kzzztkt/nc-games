import React, { useEffect, useState } from 'react'
import { getCategories } from '../utils/utils'
import Reviews from './Reviews';
import { useParams } from 'react-router-dom';

function Category() {
    const { category } = useParams();
  return (
    <Reviews category={category}/>
  )
}

export default Category
