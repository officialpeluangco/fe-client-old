import article1 from '../assets/images/article1.png'

const SimpleArticle = () => {
    return (
        <section className='w-full h-[350px] my-4'>
            <div className='flex flex-row justify-center gap-[200px] w-full max-w-[1320px] mx-auto h-full'>
                <div className='w-[350px] h-full object-cover'>
                    <img
                        className='w-full h-full'
                        src={article1}
                        alt=""
                    />
                </div>
                <div className='font-inter max-w-[640px] flex flex-col justify-end pb-2 gap-[30px]'>
                    <h2 className='text-2xl font-semibold'>
                        Mulai Bisnis dan Kelola Usaha Jadi Gampang
                    </h2>
                    <div>
                        <h3 className='text-base font-semibold'>
                            Mudahnya Mulai Bisnis Kemitraan dan Waralaba.
                        </h3>
                        <p className='text-xs text-gray-500'>
                            Beli Bisnis Kemitraan atau Waralaba dengan mudah dan cepat. Tidak perlu risau, hanya dengan satu sentuhan
                            jari, bisnis yang kamu impikan bisa didapatkan dengan mudah.
                        </p>
                    </div>
                    <div>
                        <h3 className='text-base font-semibold'>
                            Ada banyak pilihan Bisnis Kemitraan dan Waralaba terbaik.
                        </h3>
                        <p className='text-xs text-gray-500'>
                            Ada banyak pilihan bisnis kemitraan dengan sistem terlengkap dan terpercaya seperti Bisnis Makanan,
                            Otomotif, Kebutuhan sehari-hari, dan masih banyak lainya. Tersedia juga bisnis Waralaba yang sudah terjamin
                            legalitas dan rekam jejaknya.
                        </p>
                    </div>
                    <div>
                        <h3 className='text-base font-semibold'>
                            Banyak Pilihan Cara Pembayaran.
                        </h3>
                        <p className='text-xs text-gray-500'>
                            Saat transaksi di peluang.co, kamu bisa memilih cara pembayaran sesuai keinginan. Ada pilihan pembayaran via
                            bank transfer, ATM transfer, Virtual Account (VA), kartu debit online, maupun kartu kredit. Bisa dicicil juga, lho.
                            Prosesnya mudah dan simpel!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SimpleArticle