import React, { useEffect } from 'react'

export default function CheckOutSuccess() {

    useEffect(
        ()=>{console.log('clearing Cart')}
        ,[])
  return (
    <div>
        Thanks for shopping with us today<br/>
        If we sent back info from our Flask App <br/>
        We could show it here.  Like an order Number and/or invoice
    </div>
  )
}
