import BannerSection from "@/components/BannerSection"
import PartnerCardList from "@/components/PartnerCardList"
import SearchBar, { SearchFilterProps } from "@/components/SearchBar"
import { dummyData } from "./HomePage"

import logo1 from "../assets/images/logo1 1.png"
import logo2 from "../assets/images/logo2 1.png"
import logo3 from "../assets/images/logo3 1.png"

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
const dummyLongData = [
    {
        imgUrl: logo1,
        title: "Balkan Shawarma",
        category: "Self-manage dan Autopilot",
        BEP: 4,
        price: "259.000.000"
    },
    {
        imgUrl: logo2,
        title: "Kebuli Abuya",
        category: "Self-manage",
        BEP: 12,
        price: "90.000.000"
    },
    {
        imgUrl: logo3,
        title: "Tohang's Barber",
        category: "Autopilot",
        BEP: 12,
        price: "250.000.000"
    },
    {
        imgUrl: logo1,
        title: "Balkan Shawarma",
        category: "Self-manage dan Autopilot",
        BEP: 4,
        price: "259.000.000"
    },
    {
        imgUrl: logo2,
        title: "Kebuli Abuya",
        category: "Self-manage",
        BEP: 12,
        price: "90.000.000"
    },
    {
        imgUrl: logo3,
        title: "Tohang's Barber",
        category: "Autopilot",
        BEP: 12,
        price: "250.000.000"
    },
    {
        imgUrl: logo1,
        title: "Balkan Shawarma",
        category: "Self-manage dan Autopilot",
        BEP: 4,
        price: "259.000.000"
    },
    {
        imgUrl: logo2,
        title: "Kebuli Abuya",
        category: "Self-manage",
        BEP: 12,
        price: "90.000.000"
    },
    {
        imgUrl: logo3,
        title: "Tohang's Barber",
        category: "Autopilot",
        BEP: 12,
        price: "250.000.000"
    },
    {
        imgUrl: logo1,
        title: "Balkan Shawarma",
        category: "Self-manage dan Autopilot",
        BEP: 4,
        price: "259.000.000"
    },
    {
        imgUrl: logo2,
        title: "Kebuli Abuya",
        category: "Self-manage",
        BEP: 12,
        price: "90.000.000"
    },
    {
        imgUrl: logo3,
        title: "Tohang's Barber",
        category: "Autopilot",
        BEP: 12,
        price: "250.000.000"
    },
]

const MerchantPage = () => {
    return (
        <main className='w-full h-fit'>
            <div className="w-full mt-[90px] flex justify-center">
                <SearchBar data={filterProps} long />
            </div>
            <BannerSection />
            <PartnerCardList data={dummyData} title="Mitra Ekslusif" />
            <PartnerCardList data={dummyLongData} isWrap title="Mitra Peluang.co" subTitle="Mitra terbaik yang sudah kami verifikasi." />
            <BannerSection />
        </main>
    )
}

export default MerchantPage