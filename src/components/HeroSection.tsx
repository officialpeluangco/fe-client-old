import SearchBar from "./SearchBar"
import SearchCategoryList from "./SearchCategoryList"


const HeroSection = () => {
  return (
    <section className='font-inter w-full flex flex-col gap-10 items-center justify-end p-4 h-[540px] pb-[50px] bg-gradient-to-b from-indigo-900 to-white mx-auto'>
      <div className="text-4xl text-white">
        <span className="font-normal">Mau Sukses? Buka Bisnis </span><span className="font-bold">Makanan</span>
      </div>
      <SearchBar />
      <SearchCategoryList />
    </section>
  )
}

export default HeroSection