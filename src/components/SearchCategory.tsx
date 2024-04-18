import React from "react"

interface SearchCategoryProps {
    text: string
}

const SearchCategory: React.FC<SearchCategoryProps> = ({text}) => {
  return (
    <div className='flex flex-col justify-center gap-3 items-center text-center group cursor-pointer'>
        <div className='md:w-[80px] md:h-[80px] w-[50px] h-[50px] bg-gray-200 rounded-full md:p-2 p-1 group-hover:scale-110 group-hover:transition-all'>
            <div className='w-full h-full rounded-full bg-white'>
            </div>
        </div>
        <span className="w-[80px] md:text-sm text-xs">
            {text}
        </span>
    </div>
  )
}

export default SearchCategory