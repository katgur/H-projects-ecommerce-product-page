import { useState } from 'react'
import logo from '../img/logo.svg'
import avatar from '../img/image-avatar.webp'
import cartIcon, { size as cartSize } from '../img/sprite/icon-cart.svg'
import closeIcon, { size as closeSize } from '../img/sprite/icon-close.svg'
import menuIcon, { size as menuSize } from '../img/sprite/icon-menu.svg'
import useWindowWidth from '../hook/useWindowWidth'

interface MobileNavProps {
    isNavVisible: boolean,
    onCloseButtonClick: () => void
}

function MobileNav({ isNavVisible, onCloseButtonClick }: MobileNavProps) {
    return (
        <>
            {
                isNavVisible &&
                <div className="absolute z-10 inset-0 header-wrapper h-screen w-screen ml-[-24px]">
                    <nav className="flex flex-col bg-white w-2/3 h-full pt-6 pl-6">
                        {
                            <button onClick={onCloseButtonClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" {...closeSize}>
                                    <use xlinkHref={`#${closeIcon}`}></use>
                                </svg>
                            </button>
                        }
                        <a className="mt-12 pb-2 font-l" href="#">Collections</a>
                        <a className="mt-4 pb-1 font-l" href="#">Men</a>
                        <a className="mt-4 pb-1 font-l" href="#">Women</a>
                        <a className="mt-4 pb-1 font-l" href="#">About</a>
                        <a className="mt-4 pb-1 font-l" href="#">Contact</a>
                    </nav>
                </div>
            }
        </>
    )
}


function DesktopNav() {
    return (
        <nav className="flex ml-10 gap-9 h-full pt-3">
            <a className="font-s" href="#">Collections</a>
            <a className="font-s" href="#">Men</a>
            <a className="font-s" href="#">Women</a>
            <a className="font-s" href="#">About</a>
            <a className="font-s" href="#">Contact</a>
        </nav>
    )
}

function Header() {
    const [isNavVisible, setNavVisible] = useState<boolean>(false)
    const width = useWindowWidth()

    const onCloseButtonClick = () => {
        setNavVisible(false)
    }

    const onMenuButtonClick = () => {
        setNavVisible(true)
    }

    return (
        <header className="flex justify-between relative pt-3 pt-5 lg:pt-7 lg:border-b-2 lg:border-[#F7F8FD]">
            {width === 'mobile' && <MobileNav isNavVisible={isNavVisible} onCloseButtonClick={onCloseButtonClick} />}
            <div className='flex items-center gap-4'>
                {
                    width === 'mobile' &&
                    <button onClick={onMenuButtonClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" {...menuSize}>
                            <use xlinkHref={`#${menuIcon}`}></use>
                        </svg>
                    </button>
                }
                <img className="lg:mb-5" src={logo} alt="Sneakers Logo" />
                {width === 'desktop' && <DesktopNav />}
            </div>
            <div className='flex items-center gap-5 mb-5 lg:gap-12'>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" {...cartSize}>
                        <use xlinkHref={`#${cartIcon}`}></use>
                    </svg>
                </a>
                <img className="h-6 w-6 lg:h-12 lg:w-12 rounded-full hover:border hover:border-[#FF7D1A]" src={avatar} alt="Avatar" />
            </div>
        </header>
    )
}

export default Header