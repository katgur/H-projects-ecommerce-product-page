import { useState } from 'react'
import logo from '../img/logo.svg'
import avatar from '../img/image-avatar.webp'
import cartIcon, { size as cartSize } from '../img/sprite/icon-cart.svg'
import closeIcon, { size as closeSize } from '../img/sprite/icon-close.svg'
import menuIcon, { size as menuSize } from '../img/sprite/icon-menu.svg'

function Header() {
    const [isNavVisible, setNavVisible] = useState<boolean>(false)

    const onCloseButtonClick = () => {
        setNavVisible(false)
    }

    const onMenuButtonClick = () => {
        setNavVisible(true)
    }

    return (
        <header className="flex justify-between h-16 px-6 pt-3 pb-5 relative">
            {
                isNavVisible &&
                <div className="absolute z-10 inset-0 header-wrapper h-screen w-screen">
                    <nav className="flex flex-col bg-white w-2/3 h-full pt-6 pl-6">
                        <button onClick={onCloseButtonClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" {...closeSize}>
                                <use xlinkHref={`#${closeIcon}`}></use>
                            </svg>
                        </button>
                        <a className="mt-12 pb-2 font-l" href="#">Collections</a>
                        <a className="mt-4 pb-1 font-l" href="#">Men</a>
                        <a className="mt-4 pb-1 font-l" href="#">Women</a>
                        <a className="mt-4 pb-1 font-l" href="#">About</a>
                        <a className="mt-4 pb-1 font-l" href="#">Contact</a>
                    </nav>
                </div>
            }
            <div className='flex items-center gap-4'>
                <button onClick={onMenuButtonClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" {...menuSize}>
                        <use xlinkHref={`#${menuIcon}`}></use>
                    </svg>
                </button>
                <img src={logo} alt="Sneakers Logo" />
            </div>
            <div className='flex items-center gap-5'>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" {...cartSize}>
                        <use xlinkHref={`#${cartIcon}`}></use>
                    </svg>
                </a>
                <img className="h-6 w-6" src={avatar} alt="Avatar" />
            </div>
        </header>
    )
}

export default Header