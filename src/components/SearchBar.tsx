import { Search } from "lucide-react"

export interface SearchFilterProps {
    title: string
    subTitle: string
}

interface SearchBarProps {
    long?: boolean
    data?: SearchFilterProps[]
}

const defaultData: SearchFilterProps[] = [
    {
        title: 'Model Bisnis',
        subTitle: 'Sesuaikan'
    },
    {
        title: 'Harga',
        subTitle: 'Sesuaikan'
    },
]


const SearchBar: React.FC<SearchBarProps> = ({ data = defaultData, long = false }) => {
    return (
        <div className={`font-inter flex flex-row gap-4 bg-slate-200 min-w-[750px] max-w-[1320px] ${long ? 'w-full' : 'w-fit'} h-[60px] rounded-full p-[9px]`}>
            <input
                type="text"
                placeholder="Kebuli Abuya"
                className={`bg-white ${long ? 'min-w-[500px]' : 'min-w-[300px]'} mr-[20px] w-full h-full rounded-full text-sm text-gray-600 placeholder:text-sm focus:outline-none px-3`}>

            </input>
            {data && data.map((item, index) => (
                <div key={index} className="hover:bg-slate-100 cursor-pointer w-full max-w-[150px] flex flex-col border-l border-gray-400 px-2 text-[13px] justify-center transition-all">
                    <span className="font-semibold">{item.title}</span>
                    <span>{item.subTitle}</span>
                </div>
            ))}
            <div className="flex justify-center items-center h-full min-w-[42px] bg-white rounded-full ml-auto cursor-pointer hover:bg-[#a5408c] hover:text-white border-[3px] border-transparent hover:border-white hover:shadow-lg transition-all">
                <Search />
            </div>
        </div>
    )
}

export default SearchBar