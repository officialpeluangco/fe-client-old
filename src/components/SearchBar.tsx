import { Search } from "lucide-react"

const SearchBar = () => {
    return (
        <div className='font-inter flex flex-row gap-4 bg-slate-200 min-w-[750px] w-fit h-[60px] rounded-full p-[9px]'>
            <input
                type="text"
                placeholder="Kebuli Abuya"
                className="bg-white max-w-[300px] w-full h-full rounded-full placeholder:text-sm focus:outline-none px-3">

            </input>
            <div className="hover:bg-slate-100 cursor-pointer w-full max-w-[150px] flex flex-col border-l border-gray-400 px-2 text-[13px] justify-center transition-all">
                <span className="font-semibold">Model Bisnis</span>
                <span>Sesuaikan</span>
            </div>
            <div className="hover:bg-slate-100 cursor-pointer w-full max-w-[150px] flex flex-col border-l border-gray-400 px-2 text-[13px] justify-center transition-all">
                <span className="font-semibold">Harga</span>
                <span>Sesuaikan</span>
            </div>
            <div className="flex justify-center items-center h-full w-[42px] bg-white rounded-full ml-auto cursor-pointer hover:bg-[#a5408c] hover:text-white border-[3px] border-transparent hover:border-white hover:shadow-lg transition-all">
                <Search />
            </div>
        </div>
    )
}

export default SearchBar