export default function Card (){
    return(
      
            <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl">
                <img className="w-60 h-60 rounded-t-xl" src="./img/cards.jpg" alt="Card Image" />
                <div className="p-4 md:p-5">
                    <h3 className="text-md font-bold text-gray-800">
                        عنوان محصول
                    </h3>
                    <p className="mt-1 text-gray-500">
                        قیمت محصول
                    </p>
                    <a className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#433bff] text-white hover:bg-[#433bff] focus:outline-hidden focus:bg-[#dedcff] disabled:opacity-50 disabled:pointer-events-none transition-normal" href="#">
                        افزودن به سبد
                    </a>
                </div>
            </div>
       
    )
}