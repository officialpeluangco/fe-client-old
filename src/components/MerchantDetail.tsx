import { useLoaderData } from "react-router-dom"

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import { CircleDot } from "lucide-react";

import icon5 from '../assets/images/icon/icons8-facebook.png'
import icon6 from '../assets/images/icon/icons8-instagram.png'
import icon7 from '../assets/images/icon/icons8-tiktok.png'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { PartnerCardPropsExtended } from "@/types/partner";
import { AspectRatio } from "./ui/aspect-ratio";
import { Skeleton } from "./ui/skeleton";

const MerchantDetail = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [activeThumb, setActiveThumb] = useState<any>(null);
    const load: PartnerCardPropsExtended = useLoaderData() as PartnerCardPropsExtended;
    const [images, setImages] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setImages(load.images);
        setIsLoading(true);
    }, [load.images]);

    return (
        <section className='w-full h-full py-[30px] flex md:flex-row flex-col items-start md:gap-[60px] gap-4 max-w-[1320px] mx-auto md:px-0 px-4'>
            <div className="md:w-1/2 md:h-[100vh] h-[60vh] w-full flex flex-col gap-2 justify-center">
                <Swiper

                    modules={[Navigation, Thumbs]}
                    loop={false}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    grabCursor={false}
                    navigation={true}
                    thumbs={{
                        swiper:
                            activeThumb && !activeThumb.destroyed ? activeThumb : null,
                    }}
                    className="mySwiper2 rounded-lg"
                >

                    {
                        images.length && images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <Skeleton className={`w-full h-full rounded-lg ${!isLoading && "hidden"}`} />
                                <AspectRatio ratio={13 / 12} className={`${isLoading && "hidden"}`}>
                                    <img src={img} onLoad={() => setIsLoading(false)} className="rounded-lg" alt={load.title} />
                                </AspectRatio>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                <Swiper
                    onSwiper={setActiveThumb}
                    loop={false}
                    grabCursor={false}
                    spaceBetween={10}
                    slidesPerView={5}
                    modules={[Navigation, Thumbs]}
                    className="mySwiper "
                >

                    {
                        images.length && images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <Skeleton className={`w-full h-full md:max-h-[120px] max-h-[60px] rounded-lg ${!isLoading && "hidden"}`} />
                                <AspectRatio ratio={13 / 12} className={`${isLoading && "hidden"}`}>
                                    <img src={img} onLoad={() => setIsLoading(false)} className="rounded-lg" alt={load.title} />
                                </AspectRatio>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>

            <div className="h-full md:w-1/2 w-full flex flex-col justify-between gap-4 md:gap-8">
                <div className="w-full h-fit flex flex-row gap-4">
                    <div className="w-fit h-fit shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] rounded-full  ">
                        <div className="w-[60px] h-[60px] object-cover overflow-hidden flex items-center justify-center">
                            <img className="rounded-full" src={load.imgUrl} width={60} height={60} alt={load.title} />
                        </div>
                    </div>
                    <div className="flex flex-col w-fit h-full justify-center">
                        <h1 className="text-3xl font-semibold">
                            {load.title}
                        </h1>
                        <span className="text-green-500 flex flex-row items-center">
                            <CircleDot height={16} /> Online
                        </span>
                    </div>
                </div>

                <div className="flex flex-col w-full h-full justify-evenly gap-8">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-semibold">
                            Tentang
                        </h2>
                        <p className="text-sm text-gray-500">
                            {load.desc}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-semibold">
                            Social Media
                        </h2>
                        <div className='flex flex-row justify-start gap-[15px]'>
                            <img className='w-[30px] h-[30px] cursor-pointer hover:-translate-y-1 transition-all' src={icon5} alt="" />
                            <img className='w-[30px] h-[30px] cursor-pointer hover:-translate-y-1 transition-all' src={icon6} alt="" />
                            <img className='w-[30px] h-[30px] cursor-pointer hover:-translate-y-1 transition-all' src={icon7} alt="" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-semibold">
                            Detail Usaha
                        </h2>
                        <div className="flex flex-row">
                            <div className="h-full w-1/3">
                                <h3 className="font-semibold text-sm">
                                    N/A Cabang
                                </h3>
                                <div className="text-sm text-gray-500">
                                    Seluruh Indonesia
                                </div>
                            </div>
                            <div className="h-full w-1/3">
                                <h3 className="font-semibold text-sm">
                                    Biaya Marketing
                                </h3>
                                <div className="text-sm text-gray-500">
                                    Tidak Ada
                                </div>
                            </div>
                            <div className="h-full w-1/3">
                                <h3 className="font-semibold text-sm">
                                    BEP
                                </h3>
                                <div className="text-sm text-gray-500">
                                    {load.BEP} Bulan
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-between w-full p-6 text-white md:h-[150px] h-fit bg-gradient-to-r from-indigo-900 via-slate-400 to-neutral-100 rounded-lg">
                    <div className="flex flex-col gap-1 max-w-[480px]">
                        <h2 className="md:text-lg font-semibold text-base">
                            Sudah punya akun belum ?
                        </h2>
                        <p className="text-sm text-slate-100">
                            Buat akun atau log in yuk. Ada diskon dan benefit biar kamu makin cuan
                            buka usaha lewat Peluang!
                        </p>
                    </div>
                    <div>
                        <button className='text-white text-sm md:text-base font-inter cursor-pointer border-2 border-transparent hover:bg-[#a5408c] bg-[#771444] md:py-[5px] md:px-6 py-[8px] px-4 rounded-lg transition-all ml-4'>
                            Daftar
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MerchantDetail