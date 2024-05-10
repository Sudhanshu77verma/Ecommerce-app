import React from 'react'
import { useParams } from 'react-router-dom'

function CategoryProduct() {

    const {categoryName}=useParams()
    console.log(categoryName)
  return (
    <div>CategoryProduct</div>
  )
}

export default CategoryProduct