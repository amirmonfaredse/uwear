'use client';
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';


export default function Sec4() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(0);
    }
  }, [emblaApi]);

  const reviews = [
    { name: "محمد", text: "کیفیت محصولات فوق‌العاده بود! حتما دوباره خرید می‌کنم." },
    { name: "زهرا", text: "ارسال سریع و بسته‌بندی عالی، از خرید راضی هستم." },
    { name: "علی", text: "پشتیبانی خیلی خوب بود، مشکلم سریع حل شد." },
    { name: "سارا", text: "محصول دقیقاً مشابه تصویر بود، خیلی خوشحالم از خریدم!" },
    { name: "حسین", text: "خیلی خوشحالم از تجربه خرید، عالی بود!" },
    { name: "مینا", text: "همه چیز خوب بود، فقط کاش تنوع بیشتر بشه!" }
  ];

  const groupedReviews = [];
  for (let i = 0; i < reviews.length; i += 2) {
    groupedReviews.push(reviews.slice(i, i + 2));
  }

  return (
    <section className="w-full py-8 px-4 ">
  <h2 className="text-2xl font-bold text-[#433bff] text-center mb-6">نظرات مشتریان</h2>
  <div className="embla overflow-hidden" ref={emblaRef}>
    <div className="embla__container flex">
      {groupedReviews.map((pair, index) => (
        <div key={index} className="embla__slide flex-shrink-0 w-full px-6 py-4 flex flex-col md:flex-row gap-4 text-center">
          {pair.map((review, subIndex) => (
            <div key={subIndex} className="flex-1 p-4 border rounded-lg shadow-sm bg-gray-50">
              <p className="text-gray-700 text-lg">"{review.text}"</p>
              <span className="block text-[#2f27ce] font-semibold mt-2">{review.name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
