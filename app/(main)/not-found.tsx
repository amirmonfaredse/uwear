import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center ">
      <h1  className=" text-[100px] font-bold text-[#2f27ce] leading-none">۴۰۴</h1>
      <h2 className=" text-2xl mt-4 text-gray-800 font-semibold">بنظر میاد که گم شدی!</h2>
      <p className="text-gray-600 mt-2">
        صفحه‌ای که دنبالش هستی وجود نداره یا ممکنه جابه‌جا شده باشه.
      </p>
      <Link href="/">
        <p className="mt-6 inline-block bg-[#2f27ce] hover:bg-[#dedcff] text-white font-semibold py-2 px-6 rounded-full transition">
          بازگشت به صفحه اصلی
        </p>
      </Link>
    </div>
  );
}
