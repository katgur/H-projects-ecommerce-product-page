import prevIcon from '../img/sprite/icon-previous.svg'
import nextIcon from '../img/sprite/icon-next.svg'
import { useState, useRef } from 'react'
import useWindowWidth from '../hook/useWindowWidth'
import picture1 from '../img/image-product-1.webp'
import picture2 from '../img/image-product-2.webp'
import picture3 from '../img/image-product-3.webp'
import picture4 from '../img/image-product-4.webp'
import Thumbnail from './Thumbnail'
import Modal from './Modal'
import Lightbox from './Lightbox'

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
        <div className={`gallery index-${index} relative mx-[-24px] h-[300px] w-sreen`}>
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
    const [index, setIndex] = useState<number>(0)
    const [isModalVisible, setModalVisible] = useState<boolean>(false)

    return (
        <div className='lg:w-[40%]'>
            <img onClick={() => setModalVisible(true)} className='cursor-zoom-in w-full rounded-2xl' src={pictures.current[index]} />
            <Thumbnail index={index} setIndex={setIndex} />
            <Modal isVisible={isModalVisible}>
                <Lightbox onCloseButtonClick={() => setModalVisible(false)} />
            </Modal>
        </div>
    )
}

function Gallery() {
    const width = useWindowWidth()

    return (
        <>
            {width === 'mobile' && <MobileGallery />}
            {width === 'tablet' && <DesktopGallery />}
            {width === 'desktop' && <DesktopGallery />}
        </>
    )
}

export default Gallery