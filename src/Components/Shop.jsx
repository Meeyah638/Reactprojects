import React, { useState } from 'react'
import logo from '../assets/react.svg'
import './Shop.css'
import image from '../assets/images.png'
const Shop = () => {
    const [allProducts, setAllProducts] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [product, setProduct] = useState({
        image: null,
        title: '',
        price: '',
        desc: '',
    })
    const handleImageChange = (e) => {
        const allFiles = e.target.files
        const [img] = allFiles
        const url = URL.createObjectURL(img)
        setProduct({ ...product, [e.target.name]: url })
        console.log(product.image)
    }
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    const [errorLog, seterrorLog] = useState({})

    const handleError = () => {
        const errors = {}
        if (!product.title) {
            errors.title = 'Title of your product is required'
        }
        if (!product.price) {
            errors.price = 'Price of your product is required'
        }
        if (!product.desc) {
            errors.desc = 'Description of your product is required'
        }
        if (product.image === null) {
            errors.image = 'Image of your product is required'
        }
        return errors
    }

const handleSubmit = (e) => {
        e.preventDefault()

        const err = handleError()
        if (Object.keys(err).length > 0) {
            seterrorLog(err)
            console.log(errorLog)
        }
        else {
            seterrorLog({})
            setAllProducts([...allProducts, product])
            setShowForm(false)
            setProduct({
                image: null,
                title: '',
                price: '',
                desc: '',
            })
            // console.log(allProducts)
        }
    }

    return (
        <div>
            <button className='addproduct' onClick={() => setShowForm(!showForm)}>
                ADD PRODUCT
            </button>
            {allProducts.length === 0 && (
                <div className="empty-cart">
                    <p>Cart is currently empty</p>
                    <img src={image} alt="" className='cartImage' />
                </div>)}

            {/* ADD PRODUCT FORM */}
            {
                showForm &&
                <form onSubmit={handleSubmit}>
                    <div className='inputs'>
                        <label htmlFor="title">name</label>
                        <input type="text" id='title' name='title' value={product.title} onChange={handleChange} />
                        {errorLog.title && <span className='error'> {errorLog.title}</span>}
                    </div>
                    <div className='inputs'>
                        <label htmlFor="price">Price</label>
                        <input type="number" id='price' name='price' value={product.price} onChange={handleChange} />
                        {errorLog.price && <span className='error'>{errorLog.price}</span>}
                    </div>
                    <div className='inputs'>
                        <label htmlFor="desc">Description</label>
                        <textarea className='desc' name="desc" value={product.desc} onChange={handleChange} id="desc"></textarea>
                        {errorLog.desc && <span className='error'>{errorLog.desc}</span>}
                    </div>
                    <div className='inputs'>
                        <label>Preview</label>
                        <img src={product.image} className='prodImage' alt="imagePreview" />
                        {errorLog.image && <span className='error'>{errorLog.image}</span>}
                    </div>
                    <div className='inputs'>
                        <label htmlFor="file">Picture Image</label>
                        <input type="file" id='file' name='image' onChange={handleImageChange} />
                    </div>
                    {errorLog.image && <span className='error'>{errorLog.image}</span>} <br />
                    <button className='add'>
                        ADD PRODUCT
                    </button>
                </form>
            }

            <div className='gallery'>
                {
                    allProducts.map((prod, index) => (
                        <div className='product' key={index}>
                            <img src={prod.image} alt="" className='prodImage' />
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