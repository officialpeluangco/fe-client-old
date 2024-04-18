import logo1 from '../assets/images/Logo Putih 2024 - Draft 1.png'
import logo2 from '../assets/images/Logo 2024 - Berwarna.png'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

interface HeaderProps {
    white?: boolean
}

const Header: React.FC<HeaderProps> = ({ white }) => {
    const scrollPosition = useScrollPosition()
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header
            className={`
                w-full md:h-[80px] h-[60px] flex flex-row justify-between items-center px-0 md:px-[100px] fixed top-0 transition-all z-50
                ${scrollPosition > 0 ? `md:text-black bg-white shadow-md` : `md:text-white bg-transparent shadow-none`}`
            }>
            <Link to='/' className='pl-4 md:pl-0' >
                {white === false ? <img className="md:w-[139.86px] w-[100px] cursor-pointer" src={logo2} />
                    : scrollPosition > 0
                        ?
                        <img className="md:w-[139.86px] w-[100px] cursor-pointer" src={logo2} />
                        :
                        <img className="md:w-[139.86px] w-[100px] cursor-pointer" src={logo1} />}
            </Link>

            <ul className={`absolute md:static top-[60px] py-4 md:py-0 md:bg-transparent bg-white w-full md:flex-row flex-col items-center gap-2 justify-end list-none text-sm transition-all ${isOpen ? `hidden` : `flex`} ${white && scrollPosition == 0 ? 'md:text-white' : 'md:text-black'}`}>
                <li className={`font-inter cursor-pointer hover:border-black ${scrollPosition > 0 || white === false ? 'md:hover:border-black' : 'md:hover:border-white'}  border-2 border-transparent transition-all py-[5px] px-6 rounded-lg`}>
                    Jadi Mitra Peluang.co
                </li>
                <li className={`font-inter cursor-pointer hover:border-black ${scrollPosition > 0 || white === false ? 'hover:border-black' : 'md:hover:border-white'}  border-2 border-transparent transition-all py-[5px] px-6 rounded-lg`}>
                    <Link to='/merchant'>
                        Merchant
                    </Link>
                </li>
                <li className={`font-inter cursor-pointer hover:border-black ${scrollPosition > 0 || white === false ? 'hover:border-black' : 'md:hover:border-white'}  border-2 border-transparent transition-all py-[5px] px-6 rounded-lg`}>
                    Masuk
                </li>
                <li className='text-white font-inter cursor-pointer border-2 border-transparent hover:bg-[#a5408c] bg-[#771444] py-[5px] px-6 rounded-lg transition-all md:ml-4'>
                    Daftar
                </li>
            </ul>
            <button onClick={toggleMenu} className={`mr-4 md:hidden ${scrollPosition > 0 || white === false ? 'text-black' : 'text-white'}`}>
                {isOpen ? <Menu /> : <X />}
            </button>
        </header>
    )
}

export default Header