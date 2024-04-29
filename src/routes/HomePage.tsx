import BannerSection from "../components/BannerSection"
import HeroSection from "../components/HeroSection"
import PartnerCardList from "../components/PartnerCardList"
import SimpleArticle from "../components/SimpleArticle"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store"


const HomePage = () => {
  const merchants = useSelector((state:RootState) => state.merchant.merchants)
  console.log(merchants)
  return (
    <>
      <main className="w-full h-fit">
        <Header white />
        <HeroSection />
        <BannerSection />
        <PartnerCardList data={merchants} title="Mitra Ekslusif" subTitle="Mitra pilihan untuk masa depan kesuksesan anda." />
        <BannerSection />
        <SimpleArticle />
      </main>
      <Footer />
    </>

  )
}

export default HomePage