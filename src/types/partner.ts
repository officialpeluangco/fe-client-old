export interface PartnerCardProps {
    id: number
    imgUrl: string
    title: string
    desc: string
    category: string
    BEP: string
    price: string
}

import logo1 from "../assets/images/logo1 1.png"
import logo2 from "../assets/images/logo2 1.png"
import logo3 from "../assets/images/logo3 1.png"

export const dummyData: PartnerCardProps[] = [
    {
        id: 1,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/Kebuli+Abuya/Logo-Kebuli+ABUYA+(1).jpg",
        title: "Kebuli Abuya",
        category: "Food & Beverages",
        desc: "Peluang usaha bagi masyarakat yang ingin mendapatkan makanan berkualitas dengan harga terjangkau yang didukung oleh central kitchen terpercaya.",
        BEP: "N/A",
        price: "N/A"
    },
    {
        id: 2,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/Tohang/logo3+1.png",
        title: "Tohang's Barber",
        category: "Beauty/Self Care",
        desc: "Tohang’s Barber adalah sebuah perusahaan yang bergerak di bidang jasa potong rambut (barbershop) yang berdiri sejak 2014. Perusahaan kami memiliki konsep premium yang dibangun dari ide yang sederhana tetapi dibuat sangat matang dimana tujuan untuk menjawab kebutuhan para pria akan pentingnya gaya rambut dalam menunjang penampilan dan karakter sehari-hari di era modern ini. Kami mengutamakan layanan yang prima (service excellent), kualitas alat kerja yang mumpuni, dan kualitas desain interior yang baik sehingga membuat pelanggan puas akan hasil dan layanan kami.",
        BEP: "N/A",
        price: "N/A"
    },
    {
        id: 3,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/Balkan/balkan+logo.jpg",
        title: "Balkan Shawarma",
        category: "Food & Beverages",
        desc: "Tentang Balkan Shawarma merupakan perpaduan makanan khas Balkan dan Mediterania, warisan kuliner yang kaya akan cita rasa serta menggugah selera. Pelopor Balkan Shawarma ialah seorang pengusaha kuliner & hospitality yang berpengalaman lebih dari 20 tahun, berdedikasi serta berkomitmen untuk menciptakan inovasi makanan khas Eropa yang dapat dinikmati oleh seluruh masyarakat Indonesia.",
        BEP: "N/A",
        price: "N/A"
    },
    {
        id: 4,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/Autoclean/autoclean+logo.png",
        title: "Autoclean Waterless",
        category: "Automotive (Car Wash, Coating, etc)",
        desc: "Jasa cuci dan perawatan kendaraan Hemat Air yang hanya memerlukan 325ml cairan yang aman. Sudah menerima beberapa penghargaan sejak tahun 2017 dan pengembangan produk baru \"Waterless Foam' pertama di Indonesia.",
        BEP: "N/A",
        price: "N/A"
    },
    {
        id: 5,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/Cakwe+galaxy/logo+surabi.jpg",
        title: "Cakwe Galaxy",
        category: "Food & Beverages",
        desc: "Dengan Mengucap BISMILLAH dan Rasa Syukur yang Besar atas segala Rahmat dan Karunia ALLAH SUBHANAHU WATAALAA kami memulai bisnis kuliner pertama kali di tahun 2012 dengan berdagang Siomay dan mengembangkan bisnis kuliner, lalu menjelang akhir tahun 2012 dan awal 2013 bersama dengan team bahu membahu memulai usaha kuliner dengan menu utama Cakwe dengan brand CAKWE GALAXY dan buka di Pasar Ah poong sentul. Pada pertengan tahun 2013 sejalan dengan antusias yang tinggi dari penikmat cakwe di pasar ah poong kami buka satu gerai lagi di Grand Metropolitan Bekasi, CAKWE GALAXY : karena ukurannya super besar dan rasa yang super LEZAAAT dan juga dengan cocolan yang berbeda dari cakwe pada umumnya... Langsung menjadi jajanan Favorite bagi penikmat kuliner Nusantara !",
        BEP: "N/A",
        price: "N/A"
    },
]

export const dummyLongData = [
    {
        id: 1,
        imgUrl: logo1,
        title: "Balkan Shawarma",
        desc: "Tentang Balkan Shawarma merupakan perpaduan makanan khas Balkan dan Mediterania, warisan kuliner yang kaya akan cita rasa serta menggugah selera. Pelopor Balkan Shawarma ialah seorang pengusaha kuliner & hospitality yang berpengalaman lebih dari 20 tahun, berdedikasi serta berkomitmen untuk menciptakan inovasi makanan khas Eropa yang dapat dinikmati oleh seluruh masyarakat Indonesia.",
        category: "Self-manage dan Autopilot",
        BEP: 4,
        price: "259.000.000"
    },
    {
        id: 2,
        imgUrl: logo2,
        title: "Kebuli Abuya",
        desc: "Tentang Balkan Shawarma merupakan perpaduan makanan khas Balkan dan Mediterania, warisan kuliner yang kaya akan cita rasa serta menggugah selera. Pelopor Balkan Shawarma ialah seorang pengusaha kuliner & hospitality yang berpengalaman lebih dari 20 tahun, berdedikasi serta berkomitmen untuk menciptakan inovasi makanan khas Eropa yang dapat dinikmati oleh seluruh masyarakat Indonesia.",
        category: "Self-manage",
        BEP: 12,
        price: "90.000.000"
    },
    {
        id: 3,
        imgUrl: logo3,
        title: "Tohang's Barber",
        desc: "Tentang Balkan Shawarma merupakan perpaduan makanan khas Balkan dan Mediterania, warisan kuliner yang kaya akan cita rasa serta menggugah selera. Pelopor Balkan Shawarma ialah seorang pengusaha kuliner & hospitality yang berpengalaman lebih dari 20 tahun, berdedikasi serta berkomitmen untuk menciptakan inovasi makanan khas Eropa yang dapat dinikmati oleh seluruh masyarakat Indonesia.",
        category: "Autopilot",
        BEP: 12,
        price: "250.000.000"
    },
    {
        id: 1,
        imgUrl: logo1,
        title: "Balkan Shawarma",
        desc: "Tentang Balkan Shawarma merupakan perpaduan makanan khas Balkan dan Mediterania, warisan kuliner yang kaya akan cita rasa serta menggugah selera. Pelopor Balkan Shawarma ialah seorang pengusaha kuliner & hospitality yang berpengalaman lebih dari 20 tahun, berdedikasi serta berkomitmen untuk menciptakan inovasi makanan khas Eropa yang dapat dinikmati oleh seluruh masyarakat Indonesia.",
        category: "Self-manage dan Autopilot",
        BEP: 4,
        price: "259.000.000"
    },
    {
        id: 2,
        imgUrl: logo2,
        title: "Kebuli Abuya",
        desc: "Tentang Balkan Shawarma merupakan perpaduan makanan khas Balkan dan Mediterania, warisan kuliner yang kaya akan cita rasa serta menggugah selera. Pelopor Balkan Shawarma ialah seorang pengusaha kuliner & hospitality yang berpengalaman lebih dari 20 tahun, berdedikasi serta berkomitmen untuk menciptakan inovasi makanan khas Eropa yang dapat dinikmati oleh seluruh masyarakat Indonesia.",
        category: "Self-manage",
        BEP: 12,
        price: "90.000.000"
    },
    {
        id: 3,
        imgUrl: logo3,
        title: "Tohang's Barber",
        desc: "Tentang Balkan Shawarma merupakan perpaduan makanan khas Balkan dan Mediterania, warisan kuliner yang kaya akan cita rasa serta menggugah selera. Pelopor Balkan Shawarma ialah seorang pengusaha kuliner & hospitality yang berpengalaman lebih dari 20 tahun, berdedikasi serta berkomitmen untuk menciptakan inovasi makanan khas Eropa yang dapat dinikmati oleh seluruh masyarakat Indonesia.",
        category: "Autopilot",
        BEP: 12,
        price: "250.000.000"
    },
    {
        id: 1,
        imgUrl: logo1,
        title: "Balkan Shawarma",
        desc: "Tentang Balkan Shawarma merupakan perpaduan makanan khas Balkan dan Mediterania, warisan kuliner yang kaya akan cita rasa serta menggugah selera. Pelopor Balkan Shawarma ialah seorang pengusaha kuliner & hospitality yang berpengalaman lebih dari 20 tahun, berdedikasi serta berkomitmen untuk menciptakan inovasi makanan khas Eropa yang dapat dinikmati oleh seluruh masyarakat Indonesia.",
        category: "Self-manage dan Autopilot",
        BEP: 4,
        price: "259.000.000"
    },
    {
        id: 2,
        imgUrl: logo2,
        title: "Kebuli Abuya",
        desc: "Tentang Balkan Shawarma merupakan perpaduan makanan khas Balkan dan Mediterania, warisan kuliner yang kaya akan cita rasa serta menggugah selera. Pelopor Balkan Shawarma ialah seorang pengusaha kuliner & hospitality yang berpengalaman lebih dari 20 tahun, berdedikasi serta berkomitmen untuk menciptakan inovasi makanan khas Eropa yang dapat dinikmati oleh seluruh masyarakat Indonesia.",
        category: "Self-manage",
        BEP: 12,
        price: "90.000.000"
    },
    {
        id: 3,
        imgUrl: logo3,
        title: "Tohang's Barber",
        desc: "Tentang Balkan Shawarma merupakan perpaduan makanan khas Balkan dan Mediterania, warisan kuliner yang kaya akan cita rasa serta menggugah selera. Pelopor Balkan Shawarma ialah seorang pengusaha kuliner & hospitality yang berpengalaman lebih dari 20 tahun, berdedikasi serta berkomitmen untuk menciptakan inovasi makanan khas Eropa yang dapat dinikmati oleh seluruh masyarakat Indonesia.",
        category: "Autopilot",
        BEP: 12,
        price: "250.000.000"
    },
    {
        id: 1,
        imgUrl: logo1,
        title: "Balkan Shawarma",
        desc: "Tentang Balkan Shawarma merupakan perpaduan makanan khas Balkan dan Mediterania, warisan kuliner yang kaya akan cita rasa serta menggugah selera. Pelopor Balkan Shawarma ialah seorang pengusaha kuliner & hospitality yang berpengalaman lebih dari 20 tahun, berdedikasi serta berkomitmen untuk menciptakan inovasi makanan khas Eropa yang dapat dinikmati oleh seluruh masyarakat Indonesia.",
        category: "Self-manage dan Autopilot",
        BEP: 4,
        price: "259.000.000"
    },
    {
        id: 2,
        imgUrl: logo2,
        title: "Kebuli Abuya",
        desc: "Tentang Balkan Shawarma merupakan perpaduan makanan khas Balkan dan Mediterania, warisan kuliner yang kaya akan cita rasa serta menggugah selera. Pelopor Balkan Shawarma ialah seorang pengusaha kuliner & hospitality yang berpengalaman lebih dari 20 tahun, berdedikasi serta berkomitmen untuk menciptakan inovasi makanan khas Eropa yang dapat dinikmati oleh seluruh masyarakat Indonesia.",
        category: "Self-manage",
        BEP: 12,
        price: "90.000.000"
    },
    {
        id: 3,
        imgUrl: logo3,
        title: "Tohang's Barber",
        desc: "Tentang Balkan Shawarma merupakan perpaduan makanan khas Balkan dan Mediterania, warisan kuliner yang kaya akan cita rasa serta menggugah selera. Pelopor Balkan Shawarma ialah seorang pengusaha kuliner & hospitality yang berpengalaman lebih dari 20 tahun, berdedikasi serta berkomitmen untuk menciptakan inovasi makanan khas Eropa yang dapat dinikmati oleh seluruh masyarakat Indonesia.",
        category: "Autopilot",
        BEP: 12,
        price: "250.000.000"
    },
]