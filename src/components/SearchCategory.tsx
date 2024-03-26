import React from "react"

interface SearchCategoryProps {
    text: string
}

const SearchCategory: React.FC<SearchCategoryProps> = ({text}) => {
  return (
    <div className='flex flex-col justify-center gap-3 items-center text-center group cursor-pointer'>
        <div className='w-[80px] h-[80px] bg-gray-200 rounded-full p-2 group-hover:scale-110 group-hover:transition-all'>
            <div className='w-full h-full rounded-full bg-white'>
            </div>
        </div>
        <span className="w-[80px] text-sm">
            {text}
        </span>
    </div>
  )
}

export default SearchCategory