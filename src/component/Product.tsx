import Gallery from './Gallery'
import Details from './Details'
import { useState } from 'react'

interface ProductProps {
    setVisible: (isVisible: boolean) => void,
}

function Product({ setVisible }: ProductProps) {
    const [count, setCount] = useState<number>(0)

    return (
        <div className="lg:mt-[91px] lg:flex lg:items-center lg:gap-[11%]">
            <Gallery setVisible={setVisible} />
            <Details count={count} setCount={setCount} />
        </div>
    )
}

export default Product