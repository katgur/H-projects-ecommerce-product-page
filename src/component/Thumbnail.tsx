import thumbnail1 from '../img/image-product-1-thumbnail.webp'
import thumbnail2 from '../img/image-product-2-thumbnail.webp'
import thumbnail3 from '../img/image-product-3-thumbnail.webp'
import thumbnail4 from '../img/image-product-4-thumbnail.webp'
import { useRef } from 'react'

interface ThumbnailProps {
    index: number,
    setIndex: (index: number) => void
}

function Thumbnail({ index, setIndex }: ThumbnailProps) {
    const thumbnails = useRef([thumbnail1, thumbnail2, thumbnail3, thumbnail4])

    return (
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
                        <li onClick={() => setIndex(currentIndex)} key={thumbnail} className={itemStyle}>
                            <img className={imageStyle} src={thumbnail} alt="White sneakers" />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Thumbnail