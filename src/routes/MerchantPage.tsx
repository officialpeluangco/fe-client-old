import BannerSection from "@/components/BannerSection"
import PartnerCardList from "@/components/PartnerCardList"
import SearchBar, { SearchFilterProps } from "@/components/SearchBar"
import Header from "@/components/Header"
import { Outlet, useParams } from "react-router-dom"
import Footer from "@/components/Footer"
import { dummyData, dummyLongData } from "@/types/partner"

const filterProps: SearchFilterProps[] = [
    {
        title: 'Kategori',
        subTitle: 'Sesuaikan'
    },
    {
        title: 'Model Bisnis',
        subTitle: 'Sesuaikan'
    },
    {
        title: 'Harga',
        subTitle: 'Sesuaikan'
    },
    {
        title: 'Tipe Bisnis',
        subTitle: 'Sesuaikan'
    },


]


const MerchantPage = () => {
    const param = useParams()

    return (
        <>
            <main className='w-full h-fit'>
                <Header white={false} />
                <div className="w-full mt-[90px] flex justify-center">
                    <SearchBar data={filterProps} long />
                </div>
                {
                    Object.keys(param).length != 0 ? (
                        <>
                            <Outlet />
                            <PartnerCardList data={dummyLongData} title="Mitra Lainnya" />
                        </>
                    ) :
                        <>
                            <BannerSection />
                            <PartnerCardList data={dummyData} title="Mitra Ekslusif" />
                            <PartnerCardList data={dummyLongData} isWrap title="Mitra Peluang.co" subTitle="Mitra terbaik yang sudah kami verifikasi." />
                            <BannerSection />
                        </>
                }
            </main>
            <Footer />
        </>

    )
}

export default MerchantPage