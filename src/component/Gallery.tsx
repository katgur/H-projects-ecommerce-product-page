import prevIcon from '../img/sprite/icon-previous.svg'
import nextIcon from '../img/sprite/icon-next.svg'
import { useState, useRef } from 'react'
import useWindowWidth from '../hook/useWindowWidth'
import picture1 from '../img/image-product-1.webp'
import picture2 from '../img/image-product-2.webp'
import picture3 from '../img/image-product-3.webp'
import picture4 from '../img/image-product-4.webp'
import thumbnail1 from '../img/image-product-1-thumbnail.webp'
import thumbnail2 from '../img/image-product-2-thumbnail.webp'
import thumbnail3 from '../img/image-product-3-thumbnail.webp'
import thumbnail4 from '../img/image-product-4-thumbnail.webp'

function MobileGallery() {
    const [index, setIndex] = useState<number>(0)

    const onPrevButtonClick = () => {
        if (index === 0) {
            return
        }
        setIndex(index - 1)
    }

    const onNextButtonClick = () => {
        if (index === 3) {
            return
        }
        setIndex(index + 1)
    }

    return (
        <div className={`gallery index-${index} relative mx-[-24px] h-[300px] w-[400vw]`}>
            <div className="absolute w-screen inset-0 z-10 flex justify-between items-center px-4">
                <button onClick={onPrevButtonClick} className="rounded-full bg-white w-10 h-10 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" width="9" height="14">
                        <use xlinkHref={`#${prevIcon}`}></use>
                    </svg>
                </button>
                <button onClick={onNextButtonClick} className="rounded-full bg-white w-10 h-10  flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" width="9" height="14">
                        <use xlinkHref={`#${nextIcon}`}></use>
                    </svg>
                </button>
            </div>
        </div>
    )
}

function DesktopGallery() {
    const pictures = useRef([picture1, picture2, picture3, picture4])
    const thumbnails = useRef([thumbnail1, thumbnail2, thumbnail3, thumbnail4])
    const [index, setIndex] = useState<number>(0)

    const onThumbnailClick = (newIndex: number) => {
        setIndex(newIndex)
    }

    return (
        <div className='lg:w-[40%]'>
            <img className='w-full rounded-2xl' src={pictures.current[index]} />
            <ul className="mt-[30px] flex justify-between">
                {
                    thumbnails.current.map((thumbnail, currentIndex) => {
                        let itemStyle = 'rounded-[12px] w-[19%]'
                        let imageStyle = 'rounded-[10px]'
                        if (currentIndex === index) {
                            itemStyle += ' border-2 border-[orange]'
                            imageStyle += ' opacity-20'
                        } else {
                            itemStyle += ' cursor-pointer hover:border-2 hover:border-[orange]'
                            imageStyle += ' hover:opacity-50'
                        }
                        return (
                            <li onClick={() => onThumbnailClick(currentIndex)} key={thumbnail} className={itemStyle}>
                                <img className={imageStyle} src={thumbnail} alt="White sneakers" />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

function Gallery() {
    const width = useWindowWidth()

    return (
        <>
            {width === 'mobile' && <MobileGallery />}
            {width === 'desktop' && <DesktopGallery />}
        </>
    )
}

export default Gallery