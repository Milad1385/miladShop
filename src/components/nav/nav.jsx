import React, { useRef } from 'react'
import { Link , NavLink } from 'react-router-dom';


export default function Nav() {
    const showMenuRef = useRef(null)
    const overlayRef = useRef(null);
    const subMenuRef = useRef(null);
    const arrowSubMenuRef = useRef(null);
    const showMenu = () =>{
        showMenuRef.current.classList.remove('-right-64')
        showMenuRef.current.classList.add('right-0')
        showOverlay()
    }
    const closeMenu = () =>{
        showMenuRef.current.classList.remove('right-0')
        showMenuRef.current.classList.add('-right-64')
        closeOverlay()
    }
    const showOverlay = () =>{
        overlayRef.current.classList.remove('hidden-ovelay');
        overlayRef.current.classList.add('show-ovelay')
    }
    const closeOverlay = () =>{
        overlayRef.current.classList.remove('show-ovelay')
        overlayRef.current.classList.add('hidden-ovelay');
    }

    const hideMenu = ()=>{
        closeMenu()
    }

    const showSubMenu = () =>{
        subMenuRef.current.classList.toggle('hidden')
        arrowSubMenuRef.current.classList.toggle('rotate-180')
    }
  return (
    <>
        {/* desktop menu */}
        <nav className='hidden z-50 fixed right-0 left-0 top-9 mx-auto md:flex items-center justify-between px-5 lg:px-10 py-5 w-[90%] bg-slate-200/50 shadow-md rounded-3xl backdrop-blur-2xl'>
            <div className='flex items-center gap-x-5 lg:gap-x-9'>
                <h1 className='font-MorabbaBold text-2xl lg:text-3xl'>میلاد شاپ</h1>
                <ul className='flex gap-x-3 xl:gap-x-8 text-lg lg:text-xl font-DanaMedium tracking-tighter child:leading-[56px] text-zinc-600'>
                    <li>
                        <NavLink to='/' className={(link)=> link.isActive ?`text-orange-400`:``}>خانه</NavLink>
                    </li>
                    <li className='relative group'>
                        <NavLink  to='/allProducts' className={(link)=>link.isActive ?`group-hover:text-orange-400 text-orange-400 transition-all flex items-center gap-x-2` : 'group-hover:text-orange-400 transition-all flex items-center gap-x-2'}>
                            محصولات 
                            <svg class="w-4 h-4 hidden lg:block">
                                <use href="#chevron-down"></use>
                            </svg>
                        </NavLink>
                        <div className='absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible block child:block text-base child:tracking-normal w-52 bg-white shadow-md rounded-lg space-y-4 p-6 border-t-[3px] border-orange-300 transition-all delay-75'>
                                <NavLink to='/product/public'>عمومی</NavLink>
                                <NavLink to='/product/digital'>دیجیتال</NavLink>
                                <NavLink to='/product/laptop'>لپ تاپ</NavLink>
                                <NavLink to='/prodoct/mobile'>موبایل</NavLink>
                                <NavLink to='/product/clothes'>پوشاک</NavLink>
                            </div>
                    </li>
                    <li className='relative group cursor-pointer'>
                        <span className='group-hover:text-orange-400 transition-all flex items-center gap-x-2'>
                            دسته بندی
                            <svg class="w-4 h-4 hidden lg:block">
                                <use href="#chevron-down"></use>
                            </svg>
                        </span>
                        <div className='absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible block child:block text-base child:tracking-normal w-52 bg-white shadow-md rounded-lg space-y-4 p-6 border-t-[3px] border-orange-300 transition-all delay-75'>
                            <NavLink to='/category/public'>عمومی</NavLink>
                            <NavLink to='/category/digital'>لپ تاپ</NavLink>
                            <NavLink to='/category/laptop'>گوشی</NavLink>
                            <NavLink to='/category/clothes'>پوشاک</NavLink>
                        </div>
                    </li>
                    <li>
                        <NavLink to='/Blog' className={(link)=> link.isActive ?`text-orange-400`:``}>بلاگ</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={(link)=> link.isActive ?`text-orange-400`:``}>درباره ما</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contactUs" className={(link)=> link.isActive ?`text-orange-400`:``}>تماس با ما</NavLink>
                    </li>
                </ul>
            </div>

            <div className='flex items-center gap-x-4 lg:gap-x-8 cursor-pointer'>
                {/* shopping card and toggle theme */}
                <div className='flex gap-x-2.5 lg:gap-x-5'>
                    <div>
                        <svg className='w-8 h-8'>
                            <use href='#shopping-cart'></use>
                        </svg>
                    </div>
                    <div>
                        <svg className='w-8 h-8'>
                            <use href='#moon'></use>
                        </svg>
                    </div>
                </div>
                <span className='block w-px h-14 bg-gray-300'></span>
                <div className='flex items-center gap-x-2.5'>
                    <svg className='w-8 h-8 rotate-180'>
                        <use href='#arrow-left-on-rectangle'></use>
                    </svg>
                    <a href="#" className='text-xl font-DanaMedium hidden xl:block '>ورود | ثبت نام </a>
                </div>
            </div>
        </nav>
        {/* mobile menu */}
        <div className='mobile-menu    bg-slate-200 dark:text-white dark:bg-gray-700 flex items-center justify-between md:hidden  px-4 h-20'>
            <div className='flex items-center justify-between w-full'>
                <div>
                    <svg className='w-7 h-7' onClick={showMenu}>
                        <use href='#bars-3'></use>
                    </svg>
                    {/* mobile menu */}
                </div>
                <div className='w-16'>
                    <img src="https://miladshop.iran.liara.run/photo/logo.webp" alt="" />
                </div>
                <div>
                    <svg className='w-6 h-6'>
                        <use href='#shopping-cart'></use>
                    </svg>
                </div>
            </div>
            <div className='fixed top-0 bottom-0 -right-64 w-64 overflow-y-auto bg-slate-200 dark:bg-gray-700 p-4 z-20 transition-all' ref={showMenuRef}>
                {/* menu haeder */}
                <div className='flex items-center justify-between border-b border-gray-300 pb-5'>
                    <div className='w-[62px]'>
                        <img src="photo/logo.webp" alt="" />
                    </div>
                    <h5 className='font-MorabbaBold text-2xl'>میلاد شاپ</h5>
                    <div>
                        <svg className='w-6 h-6' onClick={closeMenu}>
                            <use href='#x-mark'></use>
                        </svg>
                    </div>
                </div>
                {/* mobile menu body */}
                <div className='mt-7'>
                    <div className='bg-slate-300 flex items-center justify-between pl-3 pr-5 py-3 rounded-lg'>
                        <input type="text" className='bg-inherit outline-none border-none w-full' placeholder='جستجو' />
                        <svg className='w-6 h-6'>
                             <use href='#magnifying-glass'></use>
                        </svg>
                    </div>
                    <div>
                        <div class="flex items-center my-4 pr-2.5 bg-slate-400/20 h-10 rounded-md">
                            <a href="#" class="text-zinc-700 flex items-center gap-x-2">
                                <svg class="w-5 h-5">
                                    <use href="#home"></use>
                                </svg>
                                صفحه اصلی
                            </a>
                        </div>
                        <ul class="text-zinc-700 dark:text-white child:pr-2.5 space-y-6 pb-8 cursor-pointer">
                            <li class="justify-between">
                                <a href="#" class="gap-x-2">
                                    <div class="flex items-center justify-between transition-all">
                                        <div class="flex items-center gap-x-2 shopping">
                                            <svg class="w-5 h-5">
                                                <use href="#shopping-bag"></use>
                                            </svg>
                                            فروشگاه
                                        </div>
                                        <svg class="w-5 h-5 chevron-icon  transition-all" ref={arrowSubMenuRef} onClick={showSubMenu}>
                                            <use href="#chevron-down"></use>
                                        </svg>
                                    </div>
                                    </a><ul class="pr-5 space-y-4 text-sm hidden submenu child:transition-all" ref={subMenuRef}><a href="#" class="gap-x-2">
                                        </a><li class="submenu__item"><a href="#" class="gap-x-2">
                                            </a><a href="#">لپ تاپ</a>
                                        </li>
                                        <li class="submenu--active submenu__item">
                                            <a href="#">موبایل</a>
                                        </li>
                                        <li class="submenu__item">
                                            <a href="#">پوشاک</a>
                                        </li>
                                        <li class="submenu__item">
                                            <a href="#">وسایل دیجیتال</a>
                                        </li>
                                        <li class="submenu__item">
                                            <a href="#">عمومی ها</a>
                                        </li>
                                        <li class="submenu__item">
                                            <a href="#">خوراکی ها</a>
                                        </li>
                                    </ul>
                                
                            </li>
                            <li>
                                <a href="#" class="flex items-center gap-x-2">
                                    <svg class="w-5 h-5">
                                        <use href="#chat"></use>
                                    </svg>
                                    دیکشنری
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center gap-x-2">
                                    <svg class="w-5 h-5">
                                        <use href="#briefcase"></use>
                                    </svg>
                                    درباره ما
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center gap-x-2">
                                    <svg class="w-5 h-5">
                                        <use href="#document-text"></use>
                                    </svg>
                                    بلاگ
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center gap-x-2">
                                    <svg class="w-5 h-5">
                                        <use href="#phone-arrow-up-right"></use>
                                    </svg>
                                    تماس با ما
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-col items-start gap-y-6 border-t border-t-gray-300 dark:border-t-white/10 text-gray-700 py-6 px-2.5">
                        <a href="#" class="inline-flex items-center gap-x-2">
                            <svg class="w-5 h-5 rotate-18">
                                <use href="#arrow-left-on-rectangle"></use>
                            </svg>
                            ورود و ثبت نام
                        </a>
                        <div class="toggle-theme cursor-pointer">
                            <div class="flex items-center dark:hidden gap-x-2">
                                <svg class="w-5 h-5">
                                    <use href="#moon"></use>
                                </svg>
                                <span class="select-none">تم تاریک</span>
                            </div>
                            <div class="dark:flex hidden items-center gap-x-2">
                                <svg class="w-5 h-5">
                                    <use href="#sun"></use>
                                </svg>
                                <span class="select-none">تم روشن</span>
                            </div>
                        </div>
                        <a href="#" class="inline-flex items-center gap-x-2">
                            <svg class="w-5 h-5">
                                <use href="#shopping-cart"></use>
                            </svg>
                            سبد خرید
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className='hidden-ovelay z-10 overlay w-full h-full fixed inset-0 bg-black/50 transition-all' ref={overlayRef} onClick={hideMenu}></div>
    </>
  )
}
