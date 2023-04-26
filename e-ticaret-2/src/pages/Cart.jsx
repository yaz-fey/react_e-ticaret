import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartTotal } from '../redux/cardSlice'
import CartComp from '../components/Cart/CartComp'

const Cart = () => {

    const dispacth = useDispatch()
    const navigate = useNavigate()
    const { carts, totalAmount, itemCount } = useSelector(state => state.carts)
    console.log("carts", carts, totalAmount, itemCount)
    useEffect(() => {
        dispacth(getCartTotal())
    }, [dispacth])
    return (
        <div>
            {
                carts?.length > 0 ? 
                <div>
                    {
                        carts?.map((cart,i) => (
                            <CartComp key={i} cart= {cart}/>
                        ))
                    }
                
                    <div className='flex items-center justify-end' >TOPLAM TUTAR:<span className='font-bold text-xl ml-2' >{totalAmount} TL</span></div>
                </div> : 
                <div>
                    Kartınız Boş.....
                </div>
            }
        </div>
    )
}

export default Cart