import React from 'react'
import Nav from '../nav/nav'

export default function Header() {
  return (
    <>
        <Nav/>
        <div className="container">
            <div className='h-screen flex justify-center lg:items-center lg:justify-between flex-wrap pt-25 lg:mt-5'>
                <div className='w-full md:w-[400px] lg:w-[520px] mt-24 md:mt-36 lg:mt-24'>
                    <img src="photo/boy-light.svg" alt="" />
                </div>
                <div className='text-zinc-700'>
                    <h2 class="font-MorabbaBold text-2xl mb-4 lg:mb-0 text-center lg:text-right md:text-5xl/[75px] md:mt-10 lg:text-6xl text-zinc-700 dark:text-white leading-[40px] lg:leading-[96px]">
						فروشگاهی <br class="hidden sm:inline"/>به وسعت آمازون !
					</h2>
                    <p className='text-xl md:text-4xl/[62px] text-center lg:text-right font-MorabbaMedium'>کیفیت رو احساس کن</p>
                    <span className='block w-[100px] h-px md:h-0.5 mx-auto md:mx-0 bg-slate-400 my-3 md:my-8'></span>
                    <p className='max-w-[201px] md:max-w-[400px] text-center mx-auto lg:mx-0 lg:text-right  text-sm md:text-2xl'>در این فروشگاه برترین اجناس رو خواهید دید ، اجناسی در حد تنوع آمازون</p>
                </div>
            </div>
        </div>
    </>
  )
}
