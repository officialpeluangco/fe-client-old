import { dummyData } from "@/types/partner"
import BannerSection from "../components/BannerSection"
import HeroSection from "../components/HeroSection"
import PartnerCardList from "../components/PartnerCardList"
import SimpleArticle from "../components/SimpleArticle"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const HomePage = () => {



  return (
    <>
      <main className="w-full h-fit">
        <Header white />
        <HeroSection />
        <BannerSection />
        <PartnerCardList data={dummyData} title="Mitra Ekslusif" subTitle="Mitra pilihan untuk masa depan kesuksesan anda." />
        <BannerSection />
        <SimpleArticle />
      </main>
      <Footer />
    </>

  )
}

export default HomePage