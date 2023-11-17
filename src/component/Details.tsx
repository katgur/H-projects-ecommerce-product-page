import minusIcon from '../img/sprite/icon-minus.svg'
import plusIcon from '../img/sprite/icon-plus.svg'
import cartIcon from '../img/sprite/icon-cart.svg'

interface DetailsProps {
    count: number;
    setCount: (x: number) => void,
}

function Details({ count, setCount }: DetailsProps) {
    const onPlusButtonClick = () => {
        setCount(count + 1)
    }

    const onMinusButtonClick = () => {
        if (count === 0) {
            return
        }
        setCount(count - 1)
    }

    return (
        <section className="lg:w-[40%] mt-5 pb-[88px] lg:pb-0 lg:mt-0">
            <p className='font-xxs'>
                Sneaker Company
            </p>

            <h2 className="font-xxl mt-3">
                Fall Limited Edition Sneakers
            </h2>

            <p className="font-xs mt-4 lg:mt-9">
                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>

            <div className="mt-[30px] flex items-center flex-wrap lg:gap-2">
                <ins className='font-xl'>$125.00</ins>
                <span className='ml-4 badge'>50%</span>
                <del className='font-m text-[#1D2025] font-bold ml-auto tracking-wider lg:ml-0 lg:basis-full'>$250.00</del>
            </div>

            <div className="flex gap-4 flex-col lg:flex-row mt-[27px] lg:mt-[34px]">
                <div className='lg:w-[36%] flex justify-between items-center rounded-[10px] px-6 py-4 bg-[#F7F8FD] font-m text-[#1D2025] font-bold'>
                    <button onClick={onMinusButtonClick} className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" role='img' width='12' height="4">
                            <use xlinkHref={`#${minusIcon}`} />
                        </svg>
                    </button>
                    <span>{count}</span>
                    <button onClick={onPlusButtonClick} className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" role='img' width='12' height="12">
                            <use xlinkHref={`#${plusIcon}`} />
                        </svg>
                    </button>
                </div>
                <button className='lg:w-[63%] flex justify-center gap-4 align-center w-full rounded-[10px] py-4 bg-[#FF7D1A] font-m text-white font-bold lg:shadow-lg lg:shadow-orange-200'>
                    <svg fill="#fff" width="20" height="20" xmlns="http://www.w3.org/2000/svg" role='img'>
                        <use xlinkHref={`#${cartIcon}`} />
                    </svg>
                    <span>Add to cart</span>
                </button>
            </div>
        </section>
    )
}

export default Details