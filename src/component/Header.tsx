import { useState } from 'react'
import logo from '../img/logo.svg'
import avatar from '../img/image-avatar.webp'
import cartIcon, { size as cartSize } from '../img/sprite/icon-cart.svg'
import closeIcon, { size as closeSize } from '../img/sprite/icon-close.svg'
import menuIcon, { size as menuSize } from '../img/sprite/icon-menu.svg'
import useWindowWidth from '../hook/useWindowWidth'
import Cart from './Cart'
import Modal from './Modal'
import { useProductStore } from '../store.ts'

interface MobileNavProps {
    isNavVisible: boolean,
    onCloseButtonClick: () => void
}

function MobileNav({ isNavVisible, onCloseButtonClick }: MobileNavProps) {
    return (
        <>
            {
                isNavVisible &&
                <div className="absolute z-20 inset-0 header-wrapper h-screen w-screen ml-[-24px]">
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
        <nav className="flex ml-10 gap-8 h-full md:pt-[18px]">
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
    const [isCartPopupVisible, setCartPopupVisible] = useState<boolean>(false)
    const onCloseButtonClick = () => {
        setNavVisible(false)
    }

    const onMenuButtonClick = () => {
        setNavVisible(true)
    }

    const products = useProductStore(state => state.products)
    const totalAmount = products.reduce((acc, product) => acc + product.amount, 0)

    return (
        <header className="flex justify-between relative pb-1 md:pt-6 lg:border-b-2 md:border-[#F7F8FD]">
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
                {width === 'tablet' && <DesktopNav />}
                {width === 'desktop' && <DesktopNav />}
            </div>
            <div className='flex items-center gap-6 mb-5 pt-5 lg:pt-2 lg:gap-12'>
                <button className='relative' onClick={() => setCartPopupVisible(!isCartPopupVisible)}>
                    {totalAmount !== 0 && <span className='bg-[#FF7D1A] absolute right-[-8px] top-[-8px] text-white text-[10px] font-bold px-[7px] rounded-[9px]'>{totalAmount}</span>}
                    <svg fill={products.length ? '#000' : '#69707D'} xmlns="http://www.w3.org/2000/svg" role="img" {...cartSize}>
                        <use xlinkHref={`#${cartIcon}`}></use>
                    </svg>
                </button>
                <img className="h-6 w-6 lg:h-12 lg:w-12 rounded-full hover:border hover:border-[#FF7D1A]" src={avatar} alt="Avatar" />
            </div>
            <Modal isVisible={isCartPopupVisible}>
                <Cart products={products} />
            </Modal>
        </header>
    )
}

export default Header