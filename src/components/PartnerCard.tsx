import React from "react"

interface PartnerCardProps {
    imgUrl: string
    title: string
    category: string
    BEP: number
    price: number
}

const PartnerCard: React.FC<PartnerCardProps> = ({
    imgUrl = 'https://via.placeholder.com/200',
    title = 'none',
    category = 'none',
    BEP = 0,
    price = 0
}) => {
    return (
        <div className='flex flex-col p-[13px] h-fit w-[200px] gap-2 cursor-pointer bg-slate-200 rounded-lg hover:shadow-2xl hover:shadow-[#771444] transition-all delay-100 shadow-lg group'>
            <div className="w-fit h-fit overflow-hidden">
                <img
                    className='w-[200px] h-[200px] object-cover rounded-lg group-hover:scale-110 delay-100 transition-all'
                    src={imgUrl}
                    alt="" />
            </div>
            <span className="font-inter text-sm font-semibold">
                {title}
            </span>
            <div className="font-inter text-[8px] py-1 px-3 text-gray-500 rounded-md w-fit bg-slate-50">
                {category}
            </div>
            <span className="font-inter text-[10px] text-gray-500">
                {`BEP -> ${BEP} Bulan`}
            </span>
            <div className="flex flex-col">
                <span className="font-inter text-[7px] text-gray-500">
                    Mulai dari
                </span>
                <span className="font-inter text-sm font-semibold text-blue-900">
                    {`Rp ${price}`}
                </span>
            </div>
        </div>
    )
}

export default PartnerCard