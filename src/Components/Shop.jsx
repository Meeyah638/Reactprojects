import React, { useState } from 'react'
import logo from '../assets/react.svg'
import './Shop.css'
import image from '../assets/images.png'
const Shop = () => {
    const [allProducts, setAllProducts] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [product, setProduct] = useState({
        image: logo,
        title: '',
        price: '',
        desc: '',
    })

    const handleChange = (e) => {
        // const {name, value} = e.target
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setAllProducts([...allProducts, product])
        setProduct({
            image: logo,
            title: '',
            price: '',
            desc: '',
        })
        console.log(allProducts)
    }

    return (
        <div >
            <button className='addproduct' onClick={() => setShowForm(!showForm)}>
                ADD PRODUCT
            </button>
            <div className="empty-cart">
                <p>Cart is currently empty</p>
                <img src={image} alt="" className='cartImage' />
            </div>

            {/* ADD PRODUCT FORM */}
            {
                showForm &&
                <form onSubmit={handleSubmit}>
                    <div className='inputs'>
                        <label htmlFor="title">name</label>
                        <input type="text" id='title' name='title' value={product.title} onChange={handleChange} required />
                    </div>
                    <div className='inputs'>
                        <label htmlFor="price">Price</label>
                        <input type="number" id='price' name='price' value={product.price} onChange={handleChange} required />
                    </div>
                    <div className='inputs'>
                        <label htmlFor="desc">Description</label>
                        <textarea className='desc' name="desc" value={product.desc} onChange={handleChange} id="desc"></textarea>
                    </div>
                    <div className='inputs'>
                        <label>Preview</label>
                        <img src={logo} className='prodImage' alt="imagePreview" />
                    </div>
                    <div className='inputs'>
                        <label htmlFor="file">Picture Image</label>
                        <input type="file" id='file' />
                    </div>

                    <button className='add'>
                        ADD PRODUCT
                    </button>
                </form>
            }

            <div className='gallery'>
                {
                    allProducts.map((prod, index) => (
                        <div className='product' key={index}>
                            <img src={logo} alt="" className='prodImage' />
                            <p className='prodTitle'>{prod.title} </p>
                            <div className='side'>
                                <p>${prod.price}</p>
                                <button>Add to Cart</button>
                            </div>
                            <div className='prodDesc'>
                                {prod.desc}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Shop