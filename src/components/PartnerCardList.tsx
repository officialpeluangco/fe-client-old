import React from 'react'
import PartnerCard from './PartnerCard'
// import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { PartnerCardProps } from '@/types/partner'

interface PartnerCardListProps {
    title?: string
    subTitle?: string
    isWrap?: boolean
    data: PartnerCardProps[]
}

const PartnerCardList: React.FC<PartnerCardListProps> = ({
    data,
    title = '',
    subTitle = '',
    isWrap = false
}) => {

    return (
        <section className='mx-auto w-full flex flex-col h-fit my-5 max-w-[1190px] gap-2 md:px-0 px-4'>
            <div className='text-3xl font-inter font-bold'>
                {title}
            </div>
            {subTitle && (
                <div className='font-inter'>
                    {subTitle}
                </div>
            )}

            {
                isWrap ?
                    <div className='w-full flex flex-wrap justify-between items-center pt-2 pb-4 gap-y-6'>
                        {
                            data.map((item, index) => (
                                <PartnerCard
                                    key={index}
                                    data={item}
                                />
                            ))
                        }
                        <div className='flex flex-col p-[13px] h-fit md:w-[200px] w-[160px] gap-2 cursor-pointer bg-white'>

                        </div>
                    </div>
                    :
                    <div className={`w-full flex flex-wrap justify-between items-center pt-2 pb-4 gap-4`}>
                        {/* <Carousel opts={
                            {
                                loop: true,
                                slidesToScroll: 2
                            }
                        } className='w-full max-w-[1320px]'>
                            <CarouselContent className='gap-2 md:gap-6 mb-2'>
                                {data.map((item, index) => (
                                    <CarouselItem key={index} className='md:basis-1/4 basis-1/2 lg:basis-1/6'>
                                        <PartnerCard
                                            key={index}
                                            data={item}
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel> */}
                        {
                            data.map((item, index) => (
                                <PartnerCard
                                    key={index}
                                    data={item}
                                />
                            ))
                        }
                    </div>
            }

            {isWrap && (
                <div className='flex justify-center'>
                    <button className='text-white font-inter cursor-pointer border-2 border-transparent hover:bg-[#a5408c] bg-[#771444] py-[5px] px-6 mt-4 rounded-lg transition-all'>
                        Lihat lebih banyak
                    </button>
                </div>
            )}
        </section>
    )
}

export default PartnerCardList