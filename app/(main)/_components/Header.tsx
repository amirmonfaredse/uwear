'use client';
import { useState } from 'react';
import Link from 'next/link';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-6 text-right">
      <div dir="rtl" className="container mx-auto flex flex-wrap items-center justify-between gap-4">
        
        <Link href="/" className="text-2xl font-bold text-[#2f27ce]">
          U Wears
        </Link>

        <button
          className="md:hidden text-xl text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
        </button>

        <form
          className="w-full md:w-auto flex-1 order-3 md:order-none"
          onSubmit={(e) => e.preventDefault()}>
          <div className="flex relative w-full md:w-96">
            <input
              type="text"
              placeholder="جستجو کنید..."
              className="w-full px-4 py-2 border ml-5 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2f27ce] text-black placeholder-black/50 text-right"
            />
            <button
              type="submit"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2f27ce]"
            >
              
            </button>
          </div>
        </form>



        <div className={`w-full md:w-auto md:flex items-center gap-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <nav className="flex flex-col ml-70 md:flex-row gap-2 md:gap-4 mb-2 md:mb-0">
            <Link href="/" className="text-gray-700 hover:text-[#433bff]">خانه</Link>
            <Link href="/products" className="text-gray-700 hover:text-[#433bff]">محصولات</Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#433bff]">تماس با ما</Link>
            <Link href="/aboutus" className="text-gray-700 hover:text-[#433bff]"> درباره ما </Link>
          </nav>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
            <Link href="/login" className="text-gray-700 hover:text-[#433bff]">ورود</Link>
            <Link href="/register" className="bg-[#433bff] text-white px-3 py-1 rounded-full hover:bg-[#433bff] transition">ثبت‌نام</Link>
            <Link href="/profile" className="flex items-center gap-1 text-gray-700 hover:text-[#433bff]">
              <span>پنل کاربری</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
