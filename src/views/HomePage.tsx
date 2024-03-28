import BannerSection from "../components/BannerSection"
import HeroSection from "../components/HeroSection"
import PartnerCardList from "../components/PartnerCardList"

import logo1 from "../assets/images/logo1 1.png"
import logo2 from "../assets/images/logo2 1.png"
import logo3 from "../assets/images/logo3 1.png"
import SimpleArticle from "../components/SimpleArticle"

const dummyData = [
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

const HomePage = () => {
  return (
    <main className="w-full h-fit">
        <HeroSection />
        <BannerSection />
        <PartnerCardList data={dummyData} title="Mitra Ekslusif" subTitle="Mitra pilihan untuk masa depan kesuksesan anda." />
        <BannerSection />
        <SimpleArticle />
    </main>
  )
}

export default HomePage