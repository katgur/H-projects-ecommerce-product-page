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
        <div>
            <button onClick={onMenuButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" role="img" {...menuSize}>
                    <use xlinkHref={`#${menuIcon}`}></use>
                </svg>
            </button>
            {
                isNavVisible &&
                <nav>
                    <button onClick={onCloseButtonClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" {...closeSize}>
                            <use xlinkHref={`#${closeIcon}`}></use>
                        </svg>
                    </button>
                    <a href="#">Collections</a>
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>
            }
            <img src={logo} alt="Sneakers Logo" />
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" {...cartSize}>
                    <use xlinkHref={`#${cartIcon}`}></use>
                </svg>
            </a>
            <img src={avatar} alt="Avatar" />
        </div>
    )
}

export default Header