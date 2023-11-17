import { Product } from '../util/types'
import deleteIcon from '../img/sprite/icon-delete.svg'

interface CartProps {
    products: Product[]
}

function Cart({ products }: CartProps) {
    return (
        <div className="absolute z-10 inset-0 bg-white rounded-[10px] h-fit m-2 mt-[76px]">
            <h1 className="font-bold text-[15px] leading-[14px] pl-6 py-[27px] border-b-2 border-[#F7F8FD]">Cart</h1>
            {
                (!products || products.length === 0) &&
                <p className='h-[190px] flex justify-center items-center text-[15px] leading-[11px] tracking-wider font-bold text-[#68707D]'>Your cart is empty.</p>
            }
            {
                products && products.length !== 0 &&
                <div className="mx-6 pb-[34px]">
                    <ul>
                        {
                            products.map(product => (
                                <li className='w-full table clear-both mt-6'>
                                    <img className='w-[50px] h-[50px] rounded float-left mr-4' src={product.imageUrl} alt={product.name} />
                                    <h2 className='float-left text-[16px] font-medium'>{product.name}</h2>
                                    <br />
                                    <p className='float-left text-[16px] font-medium tracking-wide'>${product.cost.toFixed(2)} x {product.amount}
                                        <span className="font-bold"> ${(product.cost * product.amount).toFixed(2)}</span>
                                    </p>
                                    <button className="float-right">
                                        <svg width="14" height="16">
                                            <use xlinkHref={`#${deleteIcon}`} />
                                        </svg>
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                    <button className='mt-[28px] w-full flex justify-center align-center rounded-[10px] py-4 bg-[#FF7D1A] font-m text-white font-bold lg:shadow-lg lg:shadow-orange-200'>Checkout</button>
                </div>
            }
        </div>
    )
}

export default Cart