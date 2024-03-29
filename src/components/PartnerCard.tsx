import { PartnerCardProps } from "@/types/partner"
import React from "react"
import { Link } from "react-router-dom"

interface props {
    data: PartnerCardProps
}

const PartnerCard: React.FC<props> = ({
    data
}) => {
    return (
        <Link to={`/merchant/${data.id}`}>
            <div className='flex flex-col p-[13px] h-fit w-[200px] gap-2 cursor-pointer bg-slate-200 rounded-lg transition-all delay-100 shadow-lg group'>
                <div className="w-fit h-fit overflow-hidden rounded-lg">
                    <img
                        className='w-[200px] h-[200px] object-cover rounded-lg group-hover:scale-110 delay-100 transition-all'
                        src={data.imgUrl}
                        alt="" />
                </div>
                <span className="font-inter text-sm font-semibold">
                    {data.title}
                </span>
                <div className="font-inter text-[8px] py-1 px-3 text-gray-500 rounded-md w-fit bg-slate-50">
                    {data.category}
                </div>
                <span className="font-inter text-[10px] text-gray-500">
                    {`BEP -> ${data.BEP} Bulan`}
                </span>
                <div className="flex flex-col">
                    <span className="font-inter text-[7px] text-gray-500">
                        Mulai dari
                    </span>
                    <span className="font-inter text-sm font-semibold text-blue-900">
                        {`Rp ${data.price}`}
                    </span>
                </div>
            </div>
        </Link>

    )
}

export default PartnerCard