import React from 'react'
import PartnerCard from './PartnerCard'

interface PartnerCardListProps {
    title?: string
    subTitle?: string
    isWrap?: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Record<string, any>[]
}

const PartnerCardList: React.FC<PartnerCardListProps> = ({
    data,
    title = '',
    subTitle = '',
    isWrap = true
}) => {
    return (
        <section className='mx-auto w-full flex flex-col h-fit my-5 max-w-[1320px] gap-2'>
            <div className='text-3xl font-inter font-bold'>
                {title}
            </div>
            {subTitle && (
                <div className='font-inter'>
                    {subTitle}
                </div>
            )}

            <div className={`w-full flex ${isWrap ? 'flex-wrap' : 'flex-row'} justify-center items-center pb-4 gap-6`}>
                {data.map((item, index) => (
                    <PartnerCard
                        key={index}
                        imgUrl={item.imgUrl}
                        title={item.title}
                        category={item.category}
                        BEP={item.BEP}
                        price={item.price}
                    />
                ))}
            </div>
        </section>
    )
}

export default PartnerCardList