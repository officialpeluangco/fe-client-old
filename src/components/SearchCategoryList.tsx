import SearchCategory from './SearchCategory'

const SearchCategoryList = () => {
  return (
    <div className='flex flex-wrap md:flex-row md:gap-[80px] items-start justify-center'>
        <SearchCategory text='makan & minuman' />
        <SearchCategory text='perawatan diri' />
        <SearchCategory text='otomotif' />
        <SearchCategory text='kebutuhan sehari-hari' />
    </div>
  )
}

export default SearchCategoryList