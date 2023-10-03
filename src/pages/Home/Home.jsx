import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import ProductCart from '../../components/Product/Product'
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import CategoryCard from '../../components/category/CategoryCard';
import { Link } from 'react-router-dom';

export default function Home() {
  const [products , setProducts] = useState([]);

  useEffect(() =>{
    window.scrollTo(0, 0);
    fetch(`http://localhost:8000/products`)
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        setProducts(data)
      })
  },[])
  return (
    <>
    <Header/>
      <div>
        <div className="container">
          {/* product section header */}
          <HeaderSection title="آخرین محصولات" color="bg-amber-400" subTitle="سکوی پرتاپ شما به سمت کیفیت" info="مشاهده همه محصولات"/>
          {/* product container */}
          <section className='products grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5  md:gap-5'>
            {products.map(product =>(
              <Link to={`/product/${product.id}`}>
                <ProductCart key={product.id} {...product}/>
              </Link>
            ))}
          </section>
          {/* categories */}
          <HeaderSection title="دسته بندی ها" color="bg-fuchsia-500" subTitle="لیست تمام دسته بندی محصولات"/>
          <section className='grid sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-5 pb-8 md:pb-20 '>
            <CategoryCard bgColor="from-[#FFB535] to-[#F2295B]" title="موبایل"/>
            <CategoryCard bgColor="from-[#30C4E5] to-[#27E55C]" title="لپ تاپ"/>
            <CategoryCard bgColor="from-[#9C33F7] to-[#2B9FFF]" title="عمومی"/>
            <CategoryCard bgColor="from-[#FF3571] to-[#870075] " title="پوشاک"/>
          </section>
        </div>
      </div>
    </>
  )
}
