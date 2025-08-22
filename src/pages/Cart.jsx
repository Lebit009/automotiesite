import React from 'react'

const Cart = () => {
  return (
   <>
<div style={{
    maxWidth: '400px',
    margin: '40px auto',
    padding: '24px',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    background: '#fff'
}}>
    <h2 style={{ marginBottom: '16px', fontWeight: 600 }}>Your Cart</h2>
    <div style={{ marginBottom: '12px', color: '#555' }}>
        <strong>Product:</strong> Automotive Part
    </div>
    <div style={{ marginBottom: '12px', color: '#555' }}>
        <strong>Quantity:</strong> 2
    </div>
    <div style={{ marginBottom: '12px', color: '#555' }}>
        <strong>Price:</strong> $120.00
    </div>
    <hr style={{ margin: '16px 0' }} />
    <div style={{ fontWeight: 600, fontSize: '1.1em' }}>
        Total: $240.00
    </div>
    <button style={{
        marginTop: '20px',
        padding: '10px 24px',
        background: '#1976d2',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: 500
    }}>
        Checkout
    </button>
</div>
   </>
  )
}

export default Cart