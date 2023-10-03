import React from 'react'

export default function HeaderSection(props) {
  return (
    <>
        <div className='flex items-end justify-between   mt-5 sm:mt-56 md:mt-40 pb-5 md:pb-12'>
            <div>
              <div className='flex items-center gap-x-2.5 sm:gap-x-3.5'>
                <span className={`inline-block w-3.5 h-3.5 rounded-sm ${props.color} dark:bg-yellow-300`}></span>
                <h2 className='font-MorabbaMedium text-xl sm:text-4xl'>{props.title}</h2>
              </div>
              <span className='font-DanaMedium block mt-3 text-slate-500 dark:text-slate-400 text-sm sm:text-xl'>{props.subTitle}</span>
            </div>
            <div className=''>
              <a href="#" className='flex items-center text-xs gap-x-0.5 lg:gap-x-2 text-sky-500  md:hover:bg-sky-500/10 md:px-2.5 md:py-2 rounded-xl transition-all'>
                <span className='hidden md:block text-sm md:text-lg tracking-tighter'>{props.info}</span>
                <span className='block md:hidden text-sm md:text-lg tracking-tighter'>مشاهده همه</span>
                {props.info ? (
                    <svg className='w-4 h-4 md:w-6  md:h-6'>
                    <use href='#arrow-left-mini'></use>
                  </svg>
                ):''}
              </a>
            </div>
        </div>
    </>
  )
}
