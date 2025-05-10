'use client';
import { EmblaCarousel } from './_components/Home/Slider';
import Sec1 from './_components/Home/Sec1';
import Sec2 from './_components/Home/Sec2';
import Sec3 from './_components/Home/Sec3';
import Sec4 from './_components/Home/Sec4';

export default function HomePage() {
  return (
    <main className="bg-gray-100 min-h-screen p-6 text-right">
      <div className="container mx-auto flex flex-col items-center justify-center gap-8">
        
        <section className="text-center">
          <h1 className="text-4xl font-bold text-[#2f27ce]">به U Wears خوش آمدید</h1>
          <p className="text-gray-700 mt-2">بهترین لباس‌ها با کیفیت بالا را از ما بخرید!</p>
        </section>
        <EmblaCarousel />

       <Sec1 />
       <Sec2 />
       <Sec3 />
       <Sec4 />

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
        </section>

      </div>
    </main>
  );
}
