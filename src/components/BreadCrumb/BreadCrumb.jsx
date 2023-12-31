import React from 'react'

export default function BreadCrumb(props) {
  return (
    <>
        <div className='breadCrumb bg-white shadow-sm flex items-center p-2.5 md:p-0  gap-x-1 md:gap-x-5 lg:gap-x-10 text-sm md:text-lg px-2 md:px-5 rounded-md md:rounded-xl'>
          <div className='breadCrumb__item lg:mr-5 bg-gray-100 rounded-md p-2 ml-2'>
                <svg className='w-6 h-6'>
                  <use href='#home'></use>
                </svg>
          </div>
          <span className='hidden md:block w-1.5 h-14 bg-gray-100' ></span>
          
          <div className='breadCrumb__item font-DanaDemiBold '>
            <a href="#">محصولات</a>
          </div>
          <span className='hidden md:block w-1.5 h-14 bg-gray-100' ></span>
          <svg className='w-4 h-5 block md:hidden'>
            <use href='#chevron-left'></use>
          </svg>
          <div className='breadCrumb__item font-DanaDemiBold'>
            <a href="#">{props.categoryName}</a>
          </div>
          <span className='hidden md:block w-1.5 h-14 bg-gray-100' ></span>
          <svg className='w-4 h-5 block md:hidden'>
            <use href='#chevron-left'></use>
          </svg>
          <div className='breadCrumb__item font-DanaMedium '>
            <a href="#">{props.name}</a>
          </div>
        </div>
    </>
  )
}
