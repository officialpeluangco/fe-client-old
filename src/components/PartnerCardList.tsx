import React from 'react'
import PartnerCard from './PartnerCard'
import { PartnerCardProps } from '@/types/partner'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'

interface PartnerCardListProps {
    title?: string
    subTitle?: string
    isWrap?: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: PartnerCardProps[]
}

const PartnerCardList: React.FC<PartnerCardListProps> = ({
    data,
    title = '',
    subTitle = '',
    isWrap = false
}) => {
    return (
        <section className='mx-auto w-full flex flex-col h-fit my-5 max-w-[1320px] gap-2 md:px-0 px-4'>
            <div className='text-3xl font-inter font-bold'>
                {title}
            </div>
            {subTitle && (
                <div className='font-inter'>
                    {subTitle}
                </div>
            )}

            <div className={`w-full flex ${isWrap ? 'flex-wrap' : 'flex-row'} justify-center items-center pt-2 pb-4 gap-6`}>
                <Carousel opts={
                    {
                        loop: true,
                        slidesToScroll: 2
                    }
                } className='w-full max-w-[1320px]'>
                    <CarouselContent className=''>
                        {data.map((item, index) => (
                            <CarouselItem key={index} className='md:basis-1/4 basis-1/2 lg:basis-1/6'>
                                <PartnerCard
                                    key={index}
                                    data={item}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

            </div>
            {isWrap && (
                <div className='flex justify-center'>
                    <button className='text-white font-inter cursor-pointer border-2 border-transparent hover:bg-[#a5408c] bg-[#771444] py-[5px] px-6 rounded-lg transition-all ml-4'>
                        Lihat lebih banyak
                    </button>
                </div>
            )}
        </section>
    )
}

export default PartnerCardList