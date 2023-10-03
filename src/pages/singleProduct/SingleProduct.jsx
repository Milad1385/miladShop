import React, { useEffect, useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import Nav from '../../components/nav/nav'
import { useParams } from 'react-router-dom'

export default function SingleProduct() {
    const [singleProduct , setSingleProduct] = useState([]);
    const [productInfo , setProductInfo] = useState([]);
    const [color , setColor] = useState([]);
    const [selectColor , setSelectColor] = useState('انتخاب نشده');
    const productID = useParams();
    
    useEffect(() =>{
        window.scrollTo(0, 0);
        fetch(`https://json.iran.liara.run/products/${productID.id}`)
            .then(res => res.json())
            .then(data => {
                setSingleProduct(data);
                document.title = data.title
                console.log(data);
            })
        fetch(`https://json.iran.liara.run/more?productID=${productID.id}`)
            .then(res => res.json())
            .then(data => setProductInfo(data));
        fetch(`https://json.iran.liara.run/color?productID=${productID.id}`)
            .then(res => res.json())
            .then(data => setColor(data));

    },[])

    const selectColorItem = (colorName) =>{
        setSelectColor(colorName)
    }
  return (
    <>
        <Nav/>
        
        <div className="container">
            <div className='mt-10 md:mt-44'>
                <BreadCrumb categoryName={singleProduct.categoryName} name={singleProduct.title}/>
            </div>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>
                <div className='bg-white rounded-2xl shadow-sm flex items-center justify-center'>
                    <img src={`./../../../public/photo/${singleProduct.image}`} alt="" className='w-full rounded-2xl' />
                </div>
                <div className='bg-white rounded-2xl box-content  shadow-sm p-5'>
                    <h2 className='font-MorabbaBold text-xl  lg:text-3xl text-zinc-700 lg:w-[400px]'>{singleProduct.title}</h2>
                    <div className='flex items-center gap-x-1.5 mt-5'>
                        <svg className='w-5 h-5 md:w-6 md:h-6 text-yellow-400'>
                            <use href='#star'></use>
                        </svg>
                        <svg className='w-5 h-5 md:w-6 md:h-6 text-yellow-400'>
                            <use href='#star'></use>
                        </svg>
                        <svg className='w-5 h-5 md:w-6 md:h-6 text-yellow-400'>
                            <use href='#star'></use>
                        </svg>
                        <svg className='w-5 h-5 md:w-6 md:h-6 text-yellow-400'>
                            <use href='#star'></use>
                        </svg>
                        <svg className='w-5 h-5 md:w-6 md:h-6 text-gray-400'>
                            <use href='#star'></use>
                        </svg>
                        
                        <ul className='flex items-center text-sm md:text-base gap-x-5 text-sky-500 mr-4'>
                            <li> 4 دیدگاه</li>
                            <li>3 پرسش</li>
                        </ul> 
                    </div> 
                    <div className='mt-5' >
                        <span className='font-DanaMedium text-base md:text-xl'>رنگ : </span>
                        <span className='font-DanaMedium text-base md:text-xl'>{selectColor}</span>
                    </div>
                    {/* start color box */}
                    <div className='mt-5 flex items-center gap-x-2.5'>
                        {color.map(colors => (
                            <div className='w-10 h-10 flex-center cursor-pointer border border-gray-400 rounded-full' onClick={()=> selectColorItem(colors.colorName)} title={`${colors.colorName}`}>
                                <div className='w-8 h-8 rounded-full' style={{backgroundColor:`${colors.color}`}}></div>
                            </div>
                        ))}
                    </div>
                    {/* start more feature */}
                    <div className='mt-5 text-sm md:text-base'>
                        <h4>ویژگی ها</h4>
                        <ul className='flex flex-col gap-2 list-disc mr-6 mt-3 text-gray-600'>
                            {productInfo.slice(0,5).map(info =>(
                                <li>{info.featureName} : 
                                    <span className='text-black font-DanaDemiBold'>{info.featureValue}</span> 
                                </li>
                            ))}
                            
                        </ul>
                    </div>
                </div>
                {/* start buy info */}
                <div className='bg-gray-200 rounded-2xl shadow-sm p-5 '>
                    <h3 className='text-lg font-DanaDemiBold'>فروشنده</h3>
                    <div className='mt-5 flex items-center gap-x-2.5'>
                        <svg className='w-7 h-7 text-red-600'>
                            <use href='#shop'></use>
                        </svg>
                        <span className='font-DanaDemiBold'>میلاد شاپ</span>
                    </div>
                    <div class="text-gray-600 text-sm flex items-center gap-x-1 mt-3 border-b-[2px] border-b-gray-300 pb-3">
                        <span class="font-DanaDemiBold text-green-500">100%</span>
                        <span class="">رضایت از محصول</span> | 
                        <span class="">عملکرد</span>
                        <span class="text-green-500 font-DanaDemiBold">عالی</span>
                    </div>
                    <div className='mt-3 border-b-[2px] border-b-gray-300 pb-3 flex items-center gap-x-2.5 text-sm font-DanaMedium'>
                        <svg className='w-6 h-6 text-green-500'>
                            <use href='#check'></use>
                        </svg>
                        <span className='font-DanaDemiBold text-base'>گارانتی ۱۸ ماهه امرتات</span>
                    </div>
                    <div className='mt-3 border-b-[2px] border-b-gray-300 pb-3 text-sm font-DanaMedium'>
                        <div className='flex items-center gap-x-2.5'>
                            <svg className='w-6 h-6 text-sky-600'>
                                <use href='#briefcase'></use>
                            </svg>
                            <span className='font-DanaDemiBold text-base'>موجود در انبار میلاد شاپ</span>
                        </div>
                        <div className='mr-5 mt-4 space-y-3'>
                            <div className='flex items-center gap-x-2.5'>
                                <svg className='w-6 h-6 text-red-600'>
                                    <use href='#truck'></use>
                                </svg>
                                <span className='text-xs text-gray-500'>ارسال توسط میلاد شاپ</span>
                            </div>
                            <div className='flex items-center gap-x-2.5'>
                                <svg className='w-6 h-6 text-sky-600'>
                                    <use href='#clock'></use>
                                </svg>
                                <span className='text-xs text-gray-500'>ارسال اکسپرس (تهران)</span>
                            </div>
                        </div>
                    </div>
                    <div className='text-left mt-3'>
                        {/* off price */}
                        {singleProduct.off ? (
                            <div className=''>
                                <span className='text-white bg-red-600 text-sm px-2 rounded-full'>{singleProduct.off}%</span>
                                <span className='ml-2 line-through text-gray-400'>{singleProduct.price.toLocaleString('fa')}</span>
                            </div>
                        ): ''}
                        {/* main price */}
                        <div className='mt-2'>
                            <span className='ml-2 text-xl font-DanaDemiBold'>{(singleProduct.price - (singleProduct.price * singleProduct.off /100)).toLocaleString('fa')}</span>
                            <span className='tracking-tighter'>تومان</span>
                        </div>
                        
                    </div>
                    <button className='bg-red-600 w-full text-white py-2 mt-4 rounded-lg shadow-md'>افزودن به سبد خرید</button>
                </div>

            </div>
            {/* start more info */}
            <div className='my-10'>
                <span className='font-DanaDemiBold inline-block text-white p-2.5 rounded-tl-xl rounded-tr-xl text-base md:text-xl bg-black'>توضیحات بیشتر</span>
                <hr className='bg-black h-[3px] -mt-0.5' />
                <p className='bg-white py-5 px-4 text-base/7 md:text-lg/8 rounded-xl mt-5 shadow-sm'>{singleProduct.descreption}</p>
            </div>
            <div className='my-10'>
                <span className='font-DanaDemiBold inline-block text-white p-2.5 rounded-tl-xl rounded-tr-xl text-base md:text-xl bg-black'>مشخصات بیشتر</span>
                <hr className='bg-black h-[3px] -mt-0.5' />
                <table className='border-collapse border border-slate-400 w-full mt-5 text-sm md:text-lg shadow-sm'>
                    {productInfo.map(info =>(
                        <tr className='child:p-2'>
                            <th className='border border-slate-300 text-right'>{info.featureName}</th>
                            <td className='border border-slate-300'>{info.featureValue}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    </>
  )
}
