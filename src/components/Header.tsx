import React from 'react'
import logo1 from '../assets/images/Logo Putih 2024 - Draft 1.png'
import logo2 from '../assets/images/Logo pink 2024 - Draft 1.png'
import { useScrollPosition } from '@/hooks/useScrollPosition'

interface HeaderProps {
    white?: boolean
}

const Header: React.FC<HeaderProps> = ({ white }) => {
    const scrollPosition = useScrollPosition()

    return (
        <header
            className={`
                w-full h-[80px] flex flex-row justify-between items-center md:px-[150px] fixed top-0 transition-all z-50
                ${scrollPosition > 0 ? `text-black bg-white shadow-md` : `text-white bg-transparent shadow-none`}`
            }>
            {scrollPosition > 0 ? <img className="w-[139.86px] h-8 cursor-pointer" src={logo2} /> :
                <img className="w-[139.86px] h-8 cursor-pointer" src={logo1} />}

            <nav className={`flex flex-row items-center gap-2 list-none text-sm ${white ? '' : ''}`}>
                <li className={`font-inter cursor-pointer ${scrollPosition > 0 ? 'hover:border-black' : 'hover:border-white'}  border-2 border-transparent transition-all py-[5px] px-6 rounded-lg`}>
                    Jadi Mitra Peluang.co
                </li>
                <li className={`font-inter cursor-pointer ${scrollPosition > 0 ? 'hover:border-black' : 'hover:border-white'}  border-2 border-transparent transition-all py-[5px] px-6 rounded-lg`}>
                    Merchant
                </li>
                <li className={`font-inter cursor-pointer ${scrollPosition > 0 ? 'hover:border-black' : 'hover:border-white'}  border-2 border-transparent transition-all py-[5px] px-6 rounded-lg`}>
                    Masuk
                </li>
                <li className='text-white font-inter cursor-pointer border-2 border-transparent hover:bg-[#a5408c] bg-[#771444] py-[5px] px-6 rounded-lg transition-all ml-4'>
                    Daftar
                </li>
            </nav>
        </header>
    )
}

export default Header