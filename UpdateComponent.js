import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
    }, []);

    const getProductDetails = async () => {
        console.warn(params);
        let result = await fetch(`http://localhost:5001/product/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    };

    const updateProduct = async () => {
        console.warn(name, price, category, company);
        let result = await fetch(`http://localhost:5001/product/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        result = await result.json();
        if (result) {
            navigate('/');
        }
    };

    return (
        <div className='update-product-container'>
            <h1 className='update-product-title'>Update Product</h1>
            <input
                type='text'
                placeholder='Enter product name'
                className='input-field'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type='text'
                placeholder='Enter product price'
                className='input-field'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type='text'
                placeholder='Enter product category'
                className='input-field'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <input
                type='text'
                placeholder='Enter product company'
                className='input-field'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
            <button onClick={updateProduct} className='submit-button'>
                Update Product
            </button>
        </div>
    );
};

export default UpdateProduct;
