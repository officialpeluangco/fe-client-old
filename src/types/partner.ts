export interface PartnerCardProps {
    id: number
    imgUrl: string
    title: string
    desc: string
    category: string
    BEP: string
    price: number | string
}
export interface PartnerCardPropsExtended {
    id: number
    imgUrl: string
    title: string
    desc: string
    category: string
    BEP: string
    price: number | string
    images: string[]
}

export const dummyData: PartnerCardProps[] = [
    {
        id: 1,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/Kebuli+Abuya/Logo-Kebuli+ABUYA+(1).jpg",
        title: "Kebuli Abuya",
        category: "Food & Beverages",
        desc: "Peluang usaha bagi masyarakat yang ingin mendapatkan makanan berkualitas dengan harga terjangkau yang didukung oleh central kitchen terpercaya.",
        BEP: "N/A",
        price: 90000000
    },
    {
        id: 2,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/Tohang/logo3+1.png",
        title: "Tohang's Barber",
        category: "Beauty/Self Care",
        desc: "Tohang’s Barber adalah sebuah perusahaan yang bergerak di bidang jasa potong rambut (barbershop) yang berdiri sejak 2014. Perusahaan kami memiliki konsep premium yang dibangun dari ide yang sederhana tetapi dibuat sangat matang dimana tujuan untuk menjawab kebutuhan para pria akan pentingnya gaya rambut dalam menunjang penampilan dan karakter sehari-hari di era modern ini. Kami mengutamakan layanan yang prima (service excellent), kualitas alat kerja yang mumpuni, dan kualitas desain interior yang baik sehingga membuat pelanggan puas akan hasil dan layanan kami.",
        BEP: "N/A",
        price: 256000000
    },
    {
        id: 3,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/Balkan/balkan+logo.jpg",
        title: "Balkan Shawarma",
        category: "Food & Beverages",
        desc: "Tentang Balkan Shawarma merupakan perpaduan makanan khas Balkan dan Mediterania, warisan kuliner yang kaya akan cita rasa serta menggugah selera. Pelopor Balkan Shawarma ialah seorang pengusaha kuliner & hospitality yang berpengalaman lebih dari 20 tahun, berdedikasi serta berkomitmen untuk menciptakan inovasi makanan khas Eropa yang dapat dinikmati oleh seluruh masyarakat Indonesia.",
        BEP: "N/A",
        price: 59000000
    },
    {
        id: 4,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/Autoclean/autoclean+logo.png",
        title: "Autoclean Waterless",
        category: "Automotive (Car Wash, Coating, etc)",
        desc: "Jasa cuci dan perawatan kendaraan Hemat Air yang hanya memerlukan 325ml cairan yang aman. Sudah menerima beberapa penghargaan sejak tahun 2017 dan pengembangan produk baru \"Waterless Foam' pertama di Indonesia.",
        BEP: "N/A",
        price: 98000000
    },
]

export const dummyLongData: PartnerCardProps[] = [
    {
        id: 1,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/Kebuli+Abuya/Logo-Kebuli+ABUYA+(1).jpg",
        title: "Kebuli Abuya",
        category: "Food & Beverages",
        desc: "Peluang usaha bagi masyarakat yang ingin mendapatkan makanan berkualitas dengan harga terjangkau yang didukung oleh central kitchen terpercaya.",
        BEP: "N/A",
        price: 90000000
    },
    {
        id: 2,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/Tohang/logo3+1.png",
        title: "Tohang's Barber",
        category: "Beauty/Self Care",
        desc: "Tohang’s Barber adalah sebuah perusahaan yang bergerak di bidang jasa potong rambut (barbershop) yang berdiri sejak 2014. Perusahaan kami memiliki konsep premium yang dibangun dari ide yang sederhana tetapi dibuat sangat matang dimana tujuan untuk menjawab kebutuhan para pria akan pentingnya gaya rambut dalam menunjang penampilan dan karakter sehari-hari di era modern ini. Kami mengutamakan layanan yang prima (service excellent), kualitas alat kerja yang mumpuni, dan kualitas desain interior yang baik sehingga membuat pelanggan puas akan hasil dan layanan kami.",
        BEP: "N/A",
        price: 256000000
    },
    {
        id: 3,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/Balkan/balkan+logo.jpg",
        title: "Balkan Shawarma",
        category: "Food & Beverages",
        desc: "Tentang Balkan Shawarma merupakan perpaduan makanan khas Balkan dan Mediterania, warisan kuliner yang kaya akan cita rasa serta menggugah selera. Pelopor Balkan Shawarma ialah seorang pengusaha kuliner & hospitality yang berpengalaman lebih dari 20 tahun, berdedikasi serta berkomitmen untuk menciptakan inovasi makanan khas Eropa yang dapat dinikmati oleh seluruh masyarakat Indonesia.",
        BEP: "N/A",
        price: 59000000
    },
    {
        id: 4,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/Autoclean/autoclean+logo.png",
        title: "Autoclean Waterless",
        category: "Automotive",
        desc: "Jasa cuci dan perawatan kendaraan Hemat Air yang hanya memerlukan 325ml cairan yang aman. Sudah menerima beberapa penghargaan sejak tahun 2017 dan pengembangan produk baru \"Waterless Foam' pertama di Indonesia.",
        BEP: "N/A",
        price: 98000000
    },
    {
        id: 6,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/Sukayaki/sukayaki-logo(2)+(2).png",
        title: "Sukayaki",
        category: "Food & Beverages",
        desc: "Sebah usaha kuliner yang mendistribusikan Product makanan Takoyaki dengan harga yang terjangkau namun disajikan dengan nuansa cita rasa yang lezat dan berbeda dengan takoyaki local lainya",
        BEP: "N/A",
        price: 9888888
    },
    {
        id: 7,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/Kriuk-Kriuk/LOGO+PNG+(1).png",
        title: "Kriuk Kriuk",
        category: "Food & Beverages",
        desc: "Kriuk-Kriuk menghasilkan Snack Ayam Favorit Indonesia dengan citarasa yang kekinian dan Pedas! Berdisi sejak 2018 dari sebuah outlet kecil di pusat kota Surabaya yang berlokasi di Gubeng, kini kami telah berkembang menjadi 7 outlet di wilayah surabaya. Kriuk Kriuk berhasil untuk tetap bertahan dan bahkan berkembang semasa pandemi",
        BEP: "N/A",
        price: 40000000
    },
    {
        id: 8,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/BongoBong/Artboard+4+logo.png",
        title: "BongOBong",
        category: "Food & Beverages",
        desc: "BongOBong merupakan restoran yang menerapakan sistem “All You Can Eat” dan “A La Carte”. BongOBong diambil dari kata ‘obong’ dalam Bahasa Jawa yang berarti bakar atau membakar. Kata tersebut Kami ambil karena Kami ingin menyajikan konsep makanan yang bertema bakar- bakaran (grill) dengan cita rasa Asian Fusion (Jepang dan Korea) namun telah disesuaikan dengan selera market Indonesia.",
        BEP: "N/A",
        price: 600000000
    },
    {
        id: 9,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/GYU-RIH/Artboard+5+(1).png",
        title: "GYU-RIH",
        category: "Food & Beverages",
        desc: "GYU-RIH adalah restaurant casual yang menghidangkan Authentic Japanes Street Yakiniku dengan Japan Vibes. GYU-RIH menyediakan hidangan Grill aneka variant daging yang kaya rasa dan khas jepang dengan nuansa japanese streetfood/neighbourhood.",
        BEP: "N/A",
        price: "N/A"
    },
    {
        id: 10,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/Studiopotong/LOGO+SP+WHITE+(1).jpg",
        title: "Studio Potong",
        category: "Beauty/Self Care",
        desc: "Dalam beberapa tahun terakhir, barbershop sudah menjadi tujuan utama bagi para pria untuk melakukan perawatan rutin pribadi. Kesadaran para pria untuk menjaga penampilan, salah satunya dengan merapikan potongan rambut menjadikan barbershop satu-satunya tempat pria bisa memenuhi berbagai kebutuhan perawatannya.",
        BEP: "N/A",
        price: 240000000
    },
    {
        id: 11,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/RotiRopi/logo+ropi.jpg",
        title: "Roti Ropi",
        category: "Food & Beverages",
        desc: "Dari gambarnya saja terbayang aroma roti kopi yang semerbak ketika roti ini dipanggang. Roti kopi bukanlah produk roti yang hanya mengikut trending saja, jenis roti ini sudah bertahan dua puluhan tahun di Indonesia. menjadi roti favorit di benak masyarakat sampai tebentuk loyal customer . Faktanya mengelola toko jenis roti ini tidak sulit, karena adonan sudah disediakan dari pabrik dan terkirim ke outlet dalam bentuk adonan beku per roti, sehingga di outlet tinggal panggang dan menyajikan saja.",
        BEP: "N/A",
        price: 150000000
    },
    {
        id: 12,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/BARBURGER/new-logo.png",
        title: "Barburger",
        category: "Food & Beverages",
        desc: "Barburger is all about passion for burgers. The first open-kitchen-bar burger restaurant in Indonesia offer a varied selections of gourmet style burgers, halal hotdog,fried chicken, fresh and hygienic food.",
        BEP: "N/A",
        price: 123000000
    },
    {
        id: 13,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/Crispyku/Crispyku.png",
        title: "Crispyku",
        category: "Food & Beverages",
        desc: "Crispyku merupakan salah satu Brand Fried Chicken di Indonesia yang telah berdiri sejak tahun 2010 dalam bisnis makanan cepat saji. Crispyku sudah memiliki 1000 Outlet yang tersebar di seluruh nusantara. Crispyku berkomitmen memberikan kualitas yang terbaik serta mutu dari bahan baku ayam segar dan rempah-rempah yang berkualitas asli produk Indonesia.",
        BEP: "N/A",
        price: 22000000
    },
    {
        id: 14,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/KANE+FRIED+CHICKEN/logo+kane.jpg",
        title: "KANE FRIED CHICKEN",
        category: "Food & Beverages",
        desc: "Kané Fried Chicken adalah merk dagang dari CV. Karyaneka Gemilang yang merupakan perusahaan waralaba makanan cepat saji dengan produk utamanya adalah ayam goreng crispy / Fried Chicken (Waralaba Fried Chicken / Franchise Fried Chicken). Kane Fried Chicken yang mengusung slogan Rasa Nikmat, Harga Hemat. sehat,halal, higiens serta harga yang hemat. Artinya, terjangkau untuk semua lapisan masyarakat dan disukai mulai dari anak-anak hingga orang dewasa. Kané Fried Chicken sudah berjalan dari awal tahun 2010. Sejak pertama kali berdiri, Kané Fried Chicken mendapat sambutan yang baik dari konsumen. Lambat laun, bisnis Kané Fried Chicken dan terus mengalami perkembangan. Sampai pada akhirnya, pada bulan Juni 2010, Kané Fried Chicken resmi diwaralabakan. Kané Fried Chicken punya semangat untuk mendorong calon wirausaha-wirausaha muda dan berbagi peluang usaha dengan modal yang terjangkau dengan imbal hasil yang menjanjikan namun dengan resiko yang minimal.",
        BEP: "N/A",
        price: 22000000
    },
    {
        id: 15,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/MIE+AYAM+BENGKEL/PHOTO-2024-04-19-15-33-50.jpg",
        title: "MIE AYAM BENGKEL",
        category: "Food & Beverages",
        desc: "Kamu bingung mau mulai bisnis di bidang apa? Lagi cari bisnis yang nggak ada matinya? Jangan bingung, yuk mulai usaha dan bisnismu sendiri bersama Mie Ayam Bengkel",
        BEP: "N/A",
        price: 35000000
    },
    {
        id: 18,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/JALAKOTEKU/LOGO+UTAMA.png",
        title: "Jalakoteku",
        category: "Food & Beverages",
        desc: "Trend cemilan olahan aci di masyarakat sudah menjadi kebiasaan yang ada dari dulu dan terus bertahan hingga sekarang. Maka tidak heran jika berbagai macam olahan aci sangat digemari oleh masyarakat di indonesia dari berbagai macam usia dan kalangan. namun banyak yang belum mengenal cemilan khas majalengka yang dinamakan Jalakotek ini. Oleh karena itu,\"Jalakoteku\" Hadir sebagai brand cemilan jalakotek khas majalengka yang inovatif serta mengedepankan produk yang berkualitas",
        BEP: "N/A",
        price: 4400000
    },
    {
        id: 19,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/MISNOW/logo+msinow.png",
        title: "Misnow",
        category: "Food & Beverages",
        desc: "Misnow Merupakan brand yang menyajikan Es Susu Salju dan Teh berbasis susu dengan mengusung konsep dessert yang berasal dari Korea. Misnow Menghadirkan produk Dessert yang unik & berkarakter dengan menggunakan bahan premium & berkualitas. Hadirnya Misnow memberikan masyarakat alternatif & sensasi yang baru dalam hidangan produk dessert yang bisa dinikmati seluruh kalangan masyarakat indonesia dengan harga terjangkau antara Rp 10.000 - Rp 25.000.",
        BEP: "N/A",
        price: 115000000
    },
    {
        id: 20,
        imgUrl: "https://peluang-images.s3.ap-southeast-1.amazonaws.com/Chic+e_+Nin/61b0478b52e45.webp",
        title: "Chick e'Nin",
        category: "Food & Beverages",
        desc: "Chick e’Nin terinspirasi dari adanya pangsa pasar yang luas serta permintaan yang tinggi akan camilan berbahan dasar ayam. Sebagai salah satu pelopor franchise ayam crispy ala taiwan yang otentik dan khas dengan konsep kaki lima, Chick e’Nin telah memiliki lebih dari 90 outlet di seluruh Indonesia sejak outlet pertamanya hadir pada tahun 2016.",
        BEP: "N/A",
        price: 9000000
    },
    // {
    //     id: 16,
    //     imgUrl: "https://placehold.co/500x400.png",
    //     title: "MIE AYAM + BAKSO BENGKEL",
    //     category: "Food & Beverages",
    //     desc: "N/A",
    //     BEP: "N/A",
    //     price: 65000000
    // },
    // {
    //     id: 17,
    //     imgUrl: "https://placehold.co/500x400.png",
    //     title: "Ayam penyet cobek kaisar",
    //     category: "Food & Beverages",
    //     desc: "N/A",
    //     BEP: "N/A",
    //     price: 100000000
    // },
]