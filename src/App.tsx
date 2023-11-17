import { useState } from 'react'
import Header from './component/Header'
import Lightbox from './component/Lightbox'
import Product from './component/Product'

export default function App() {
    const [isVisible, setVisible] = useState<boolean>(false)
    return (
        <div>
            <div className="mx-6 lg:mx-[165px] lg:pb-[130px]">
                <Header />
                <Product setVisible={setVisible} />
            </div>
            {isVisible && <Lightbox setVisible={setVisible} />}
        </div>
    )
}