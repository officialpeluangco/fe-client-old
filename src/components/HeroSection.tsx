import SearchBar from "./SearchBar"


const HeroSection = () => {
  return (
    <section className='font-inter w-full flex flex-col gap-10 items-center justify-center p-4 h-[600px] bg-gradient-to-b from-indigo-900 to-white mx-auto'>
      <div className="text-4xl text-white">
        <span className="font-normal">Mau Sukses? Buka Bisnis </span><span className="font-bold">Makanan</span>
      </div>
      <SearchBar />
    </section>
  )
}

export default HeroSection