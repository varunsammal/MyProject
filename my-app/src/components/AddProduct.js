import React from 'react';

const AddProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [error, setError] = React.useState(false);

    const addProduct = async () => {
        if (!name || !price || !company || !category) {
            setError(true);
            return false;
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5001/add-product", {
            method: "POST",
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        console.warn(result);
    };

    return (
        <div className='add-product'>
            <h1 className='add-product-title'>Add Reviews</h1>
            <input
                type="text"
                placeholder='Enter Valid User Name'
                className='input-field'
                value={name}
                onChange={(e) => { setName(e.target.value) }}
            />
            {error && !name && <span className='error-message'>Enter a valid Student name</span>}

            <input
                type="text"
                placeholder='Feedback Rating'
                className='input-field'
                value={price}
                onChange={(e) => { setPrice(e.target.value) }}
            />
            {error && !price && <span className='error-message'>Enter a valid price</span>}

            <input
                type="text"
                placeholder='Enter Course'
                className='input-field'
                value={category}
                onChange={(e) => { setCategory(e.target.value) }}
            />
            {error && !category && <span className='error-message'>Enter a valid category</span>}

            <textarea
                placeholder='Add  Feedback'
                className='input-field'
                value={company}
                onChange={(e) => { setCompany(e.target.value) }}
            />
            {error && !company && <span className='error-message'>Enter a valid description</span>}

            <button onClick={addProduct} className='submit-button'>Add Product</button>
        </div>
    );
};

export default AddProduct;
