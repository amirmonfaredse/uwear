'use client';
import Card from '../Card/Card';
import Link from 'next/link';

export default function Sec1 (){
return(
    <section className='flex flex-col items-center justify-center'>
          <div className='flex flex-row items-center justify-center space-x-5'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className='flex items-center justify-center mt-5'>
              <Link href="/products" className="bg-[#433bff] text-white px-4 py-2 rounded-full hover:bg-[#2f27ce] transition">
              مشاهده همه محصولات
              </Link>
          </div>
       </section>
)
}