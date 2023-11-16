import Gallery from './Gallery'
import Details from './Details'
import { useState } from 'react'

function Product() {
    const [count, setCount] = useState<number>(0)

    return (
        <div className="lg:mt-[91px] lg:flex lg:items-center lg:gap-[11%]">
            <Gallery />
            <Details count={count} setCount={setCount} />
        </div>
    )
}

export default Product