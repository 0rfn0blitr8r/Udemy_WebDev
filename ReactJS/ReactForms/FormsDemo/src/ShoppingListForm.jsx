import { useState } from "react";

function ShoppingListForm({addItem}) {
    const [ formData, setFormData ] = useState({
        product : "",
        qty : 0
    });

    const handleChange = (evt) => {
        setFormData(currData => {
                return {
                    ...currData, 
                    [evt.target.name] : evt.target.value
                }
            })
        }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("Submitted");
        addItem(formData);
    }

    return (
        <form onSubmit={handleSubmit} >
            <h1>Product is: </h1>
            <p>
            <label htmlFor="product">Product</label>
            <br />
            <input 
                type="text" 
                placeholder="product name"
                name="product"
                id="product"
                onChange={ handleChange }
                value={formData.product}
            />
            <br />
            </p>
            <label htmlFor="qty">Quantity</label>
            <br />
            <p>
                <input 
                    type="number" 
                    placeholder="quantity"
                    name="qty"
                    id="qty"
                    onChange={ handleChange }
                    value={formData.qty}
                />
            </p>
            <br />
            <p>
                <button> Add Item </button>
            </p>
        </form>
    )
}

export default ShoppingListForm