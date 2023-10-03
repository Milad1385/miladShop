import React from "react";

export default function ProductCart(props) {
  return (
    <>
      <div class="p-2 md:p-5 bg-white dark:bg-zinc-700 shadow-normal rounded-xl md:hover:-translate-y-1.5 cursor-pointer transition-all">
        <div  class="relative mb-5">
          <img
            src={`photo/${props.image}`}
            class="w-32 mx-auto md:w-auto"
            alt="p1"
          />
          {props.off ? (<span class="absolute right-1.5 top-1.5 rounded-full bg-orange-300 text-white dark:text-zinc-700 h-5 md:h-[30px] text-xs/[24px] md:text-base/[34px] font-DanaMedium px-2.5 md:px-3.5">
            {props.off}%
          </span>):(``)}
        </div>
        <div>
          <h3 class="text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2 h-[40px] md:h-14 font-DanaMedium">
            {props.title}
          </h3>
          <div class="flex items-center gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
            <div class="text-teal-600 dark:text-emerald-500 flex items-center md:gap-x-1">
              <span class="font-DanaDemiBold text-sm md:text-xl">
               {props.price.toLocaleString('fa')}
              </span>
              <span class="tracking-tight hidden md:block text-xs md:text-sm">تومان</span>
            </div>
            <div class="text-gray-400 offer relative flex items-center gap-x-1 md:gap-x-1">
              {props.off ? (<>
                <span class="text-xs md:text-base">{(props.price-(props.price * props.off /100)).toLocaleString('fa')}</span>
              <span class="tracking-tight hidden md:block text-xs md:text-xs">تومان</span>
              </>):('')}
            </div>
          </div>
          <div class="flex items-center justify-between mt-2.5">
            <div class="flex items-center gap-x-2 md:gap-x-4 cursor-pointer">
              <span class="flex-center w-[26px] h-[26px] md:w-9 md:h-9 bg-gray-100 hover:bg-teal-600 text-gray-400 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white   dark:bg-zinc-800 rounded-full transition-all cursor-pointer">
                <svg class="w-[18px] h-[18px] md:w-[22px] md:h-[22px]">
                  <use href="#shopping-cart"></use>
                </svg>
              </span>
              <span class="text-gray-400 hover:text-teal-600 dark:hover:text-emerald-500 transition-all">
                <svg class="w-[18px] h-[18px] md:w-[24px] md:h-[24px]">
                  <use href="#arrows-right-left"></use>
                </svg>
              </span>
            </div>
            <div class="flex">
              <svg class="w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400">
                <use href="#star"></use>
              </svg>
              <svg class="w-4 h-4 md:w-6 md:h-6 text-yellow-400">
                <use href="#star"></use>
              </svg>
              <svg class="w-4 h-4 md:w-6 md:h-6 text-yellow-400">
                <use href="#star"></use>
              </svg>
              <svg class="w-4 h-4 md:w-6 md:h-6 text-yellow-400">
                <use href="#star"></use>
              </svg>
              <svg class="w-4 h-4 md:w-6 md:h-6 text-yellow-400">
                <use href="#star"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
