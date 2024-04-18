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
        <div className={`font-inter flex flex-row md:gap-4 md:bg-slate-200 bg-white md:min-w-[750px] max-w-[1320px] w-full ${long ? 'md:w-full' : 'md:w-fit'} md:h-[60px] h-[45px] rounded-full md:p-[9px]`}>
            <input
                type="text"
                placeholder="Kebuli Abuya"
                className={`bg-white ${long ? 'md:min-w-[500px]' : 'md:min-w-[300px]'} md:mr-[20px] w-full h-full rounded-full text-sm text-gray-600 placeholder:text-sm focus:outline-none px-3`}>

            </input>
            {data && data.map((item, index) => (
                <div key={index} className="hover:bg-slate-100 cursor-pointer w-full max-w-[150px] md:flex hidden flex-col border-l border-gray-400 px-2 text-[13px] justify-center transition-all">
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