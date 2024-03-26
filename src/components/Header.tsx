import React from 'react'
import logo from '../assets/images/Logo Putih 2024 - Draft 1.png'

interface HeaderProps {
    white?: boolean
}

const Header: React.FC<HeaderProps> = ({ white }) => {
    return (
        <header className="w-full h-8 flex flex-row justify-between items-center md:px-[150px] pt-4">
            <img className="w-[139.86px] h-8 cursor-pointer" src={logo} />
            <nav className={`flex flex-row items-center gap-2 list-none text-sm ${white ? 'text-white' : 'text-black'}`}>
                <li className='font-inter cursor-pointer hover:border-white border-2 border-transparent transition-all py-[5px] px-6 rounded-lg'>
                    Jadi Mitra Peluang.co
                </li>
                <li className='font-inter cursor-pointer hover:border-white border-2 border-transparent transition-all py-[5px] px-6 rounded-lg'>
                    Merchant
                </li>
                <li className='font-inter cursor-pointer hover:border-white border-2 border-transparent transition-all py-[5px] px-6 rounded-lg'>
                    Masuk
                </li>
                <li className='font-inter cursor-pointer border-2 border-transparent hover:bg-[#a5408c] bg-[#771444] py-[5px] px-6 rounded-lg transition-all'>
                    Daftar
                </li>
            </nav>
        </header>
    )
}

export default Header