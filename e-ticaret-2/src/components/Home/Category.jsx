import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';

const Category = ({setCategory}) => {
    const dispatch = useDispatch();
    const {categories} =useSelector( state => state.categories)

    console.log("categories: ", categories);
    useEffect(() => {
        dispatch(getCategories())
    },[dispatch])

  return (
    <div className='w-[272px] bg-gray-100 p-4 m-2 max-h-screen'>
        <div className=' w-[240px] border-b pb-2 px-2 text-xl font-bold'>KATEGORİ</div>
        {

            categories?.map((category,i) => (
                <div onClick={() => setCategory(category) } className='text-lg  cursor-pointer hover:bg-gray-200 p-2' key={i}>{category}</div>
            ))
        }
    </div>
  )
}

export default Category