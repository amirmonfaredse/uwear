"use client";
import Link from 'next/link';

export default function Footer() {
    return (
      <footer className="bg-white shadow-md py-4 px-6 text-right">
        <div dir="rtl" className="container mx-auto flex flex-wrap items-center justify-between gap-4">
          
          <Link href="/" className="text-2xl font-bold text-[#2f27ce]">
            U Wears
          </Link>
  
          <nav className="flex flex-col md:flex-row gap-2 md:gap-4 mb-2 md:mb-0">
            <Link href="/privacy-policy" className="text-gray-700 hover:text-[#433bff]">حریم خصوصی</Link>
            <Link href="/terms" className="text-gray-700 hover:text-[#433bff]">قوانین و مقررات</Link>
            <Link href="/faq" className="text-gray-700 hover:text-[#433bff]">سوالات متداول</Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#433bff]">تماس با ما</Link>
          </nav>
  
          <div className="flex gap-4">
            <Link href="https://instagram.com" className="text-gray-700 hover:text-[#433bff]">
              اینستاگرام
            </Link>
            <Link href="https://twitter.com" className="text-gray-700 hover:text-[#433bff]">
              توییتر
            </Link>
            <Link href="https://facebook.com" className="text-gray-700 hover:text-[#433bff]">
              فیس‌بوک
            </Link>
          </div>
  
          <div className="text-gray-500 text-sm mt-2 w-full text-center">
            © 2025 تمامی حقوق محفوظ است. طراحی شده توسط U Wears
          </div>
        </div>
      </footer>
    );
  }
  