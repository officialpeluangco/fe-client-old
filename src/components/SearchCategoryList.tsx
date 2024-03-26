import SearchCategory from './SearchCategory'

const SearchCategoryList = () => {
  return (
    <div className='flex flex-row gap-[80px] items-start'>
        <SearchCategory text='makan & minuman' />
        <SearchCategory text='perawatan diri' />
        <SearchCategory text='otomotif' />
        <SearchCategory text='kebutuhan sehari-hari' />
    </div>
  )
}

export default SearchCategoryList