import picture1 from '../img/image-product-1.webp'
import picture2 from '../img/image-product-2.webp'
import picture3 from '../img/image-product-3.webp'
import picture4 from '../img/image-product-4.webp'
import { useState, useRef } from 'react'
import Thumbnail from './Thumbnail'
import prevIcon from '../img/sprite/icon-previous.svg'
import nextIcon from '../img/sprite/icon-next.svg'
import closeIcon from '../img/sprite/icon-close.svg'

interface LightboxProps {
    setVisible: (isVisible: boolean) => void,
}

function Lightbox({ setVisible }: LightboxProps) {
    const pictures = useRef([picture1, picture2, picture3, picture4])
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
        <div className="z-30 inset-0 overflow-y-auto fixed modal-wrapper w-screen h-full p-2">
            <div className="relative w-[38%] m-auto table">
                <button onClick={() => setVisible(false)} className="float-right mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" role="img" width="21" height="21">
                        <use xlinkHref={`#${closeIcon}`}></use>
                    </svg>
                </button>
                <div className='float-left'>
                    <div className='relative'>
                        <button onClick={onPrevButtonClick} className="absolute inset-0 mt-auto mb-auto mr-auto ml-[-20px] rounded-full bg-white w-10 h-10 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" width="9" height="14">
                                <use xlinkHref={`#${prevIcon}`}></use>
                            </svg>
                        </button>
                        <img className="rounded-[15px]" src={pictures.current[index]} />
                        <button onClick={onNextButtonClick} className="absolute inset-0 mt-auto mb-auto ml-auto mr-[-20px] rounded-full bg-white w-10 h-10 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" width="9" height="14">
                                <use xlinkHref={`#${nextIcon}`}></use>
                            </svg>
                        </button>
                    </div>
                    <div className='w-[81%] m-auto'>
                        <Thumbnail index={index} setIndex={setIndex} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lightbox