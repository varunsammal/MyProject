import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch('http://localhost:5001/products', {
            headers: {
                authorization: JSON.parse(localStorage.getItem('token'))
            }
        });
        result = await result.json();
        setProducts(result);
    }

    const deleteProduct = async (id) => {
        console.warn(id)
        let result = await fetch(`http://localhost:5001/product/${id}`, {
            method: "DELETE"
        });
        result = await result.json();
        if (result) {
            getProducts();
        }
    }

    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5001/search/${key}`);
            result = await result.json();
            if (result) {
                setProducts(result);
            }
        } else {
            getProducts();
        }
    }

    return (
        <div className="product-list-container">
            <h3 className="product-list-title">Student Feedback</h3>
            <input
                type="text"
                className="product-search-box"
                placeholder="Search ......"
                onChange={searchHandle}
            />
            <div className="product-table">
                <div className="product-table-header">
                    <span>S. No.</span>
                    <span>Name</span>
                    <span>Subject</span>
                    <span>Rate</span>
                    <span>Feedback</span>
                    <span>Operation</span>
                </div>
                {products.length > 0 ? (
                    products.map((item, index) => (
                        <div className="product-row" key={item._id}>
                            <span>{index + 1}</span>
                            <span>{item.name}</span>
                            <span>{item.price}</span>
                            <span>{item.category}</span>
                            <span>{item.company}</span>
                            <span>
                                <button
                                    className="delete-button"
                                    onClick={() => deleteProduct(item._id)}
                                >
                                    Delete
                                </button>
                                <Link to={`/update/${item._id}`} className="update-link">
                                    Update
                                </Link>
                            </span>
                        </div>
                    ))
                ) : (
                    <h1 className="no-results">No Result Found</h1>
                )}
            </div>
        </div>
    );
}

export default ProductList;
