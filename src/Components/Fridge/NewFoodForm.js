import React, { Component, useState } from 'react';

const NewFoodForm = (props) => {
  const statee = {
    food_name: '',
    expiration_date: '',
    quantity: '',
    quantity_unit: '',
    value: '',
    food_category: '',
  };
  const [state_, setState_] = useState(statee);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState_({
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { addFood, toggleFoodForm } = props;
    addFood(state_);
    toggleFoodForm();
    setState_({
      food_name: '',
      expiration_date: '',
      quantity: '',
      quantity_unit: '',
      value: '',
      food_category: '',
    });
  };

  const {
    food_name,
    expiration_date,
    value,
    quantity,
    quantity_unit,
    food_category,
  } = state_;
  return (
    <form onSubmit={handleSubmit} className="new-food-form">
      <h3 className="new-food-form-title">Add Food Form</h3>

<<<<<<< HEAD
      <label>Name:</label>
      <input
        className="new-food-form-name-input"
        type="text"
        name="food_name"
        value={food_name}
        onChange={handleChange}
      />

      <select
        className="new-food-form-category-select"
        name="food_category"
        value={food_category}
        onChange={handleChange}
      >
        <option value="">category</option>
        <option value="dairy">Dairy</option>
        <option value="fruit">Fruit</option>
        <option value="vegetable">Vegetable</option>
        <option value="vegetable">Non-Vegitarian</option>
      </select>
=======
    render() {
        const { food_name, expiration_date, value, quantity, quantity_unit, food_category } = this.state
        return (
            <>         
                <form onSubmit={this.handleSubmit} className='new-food-form'>
                   
                    <label>Name</label>
                    <input className='food-form-element new-food-form-name-input' type="text" name="food_name" value={food_name} onChange={this.handleChange} />
                    <label htmlFor="">Food Category</label>
                    <select className='food-form-element new-food-form-category-select' name="food_category" value={food_category} onChange={this.handleChange} >
                            <option value="dairy">Dairy</option>
                            <option value="fruit">Fruit</option>
                            <option value="vegetable">Vegetable</option>
                            <option value="vegetable">Non-Vegitarian</option>
                    </select>
                    
                    <label>Expiration Date</label>
                    <input className='food-form-element new-food-form-expiration-date' type="date" name="expiration_date" value={expiration_date} onChange={this.handleChange} />
                    
                    <label>Quantity</label>
                    <input className='food-form-element new-food-form-quantity-input' type="number" name="quantity" min="0" step="0.1" value={quantity} onChange={this.handleChange} />
                    <label>Unit</label>
                    <select className='food-form-element new-food-form-quantity-unit-select' name="quantity_unit" value={quantity_unit} onChange={this.handleChange}>
                            <option value="">unit</option>
                            <option value="lbs">lbs</option>
                            <option value="oz">oz</option>
                            <option value="count">count</option>
                    </select>

                    <label>Cost</label>
                    <input className='food-form-element new-food-form-cost-input' type="number" name="value" value={value} min="0" step="0.1" onChange={this.handleChange} />
>>>>>>> 204837caca1ae6a8d774ebc3937fcbd88952ce50

      <label>Expiration Date:</label>
      <input
        className="new-food-form-expiration-date"
        type="date"
        name="expiration_date"
        value={expiration_date}
        onChange={handleChange}
      />

<<<<<<< HEAD
      <label>Quantity:</label>
      <input
        className="new-food-form-quantity-input"
        type="number"
        name="quantity"
        min="0"
        step="0.1"
        value={quantity}
        onChange={handleChange}
      />

      <select
        className="new-food-form-quantity-unit-select"
        name="quantity_unit"
        value={quantity_unit}
        onChange={handleChange}
      >
        <option value="">unit</option>
        <option value="lbs">lbs</option>
        <option value="oz">oz</option>
        <option value="count">count</option>
      </select>

      <label>Cost:</label>
      <input
        className="new-food-form-cost-input"
        type="number"
        name="value"
        value={value}
        min="0"
        step="0.1"
        onChange={handleChange}
      />

      <input
        className="new-food-form-submit-button"
        type="submit"
        value="Submit"
      />
    </form>
  );
};

export default NewFoodForm;
=======
                    <input className='new-food-form-submit-button' type="submit" value="Submit" />
               
                </form>
                </>
        )
    }
}
>>>>>>> 204837caca1ae6a8d774ebc3937fcbd88952ce50
