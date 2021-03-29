import React from 'react'

export default function ItemForm(props) {

    const { formValues, updateForm, submitForm, disabled} = props
    return(
        <form className='form-container' onSubmit={submitForm}>
            <div className='form-group inputs'>
                <label>Item Name
                    <input
                        type='text'
                        value={formValues.itemName}
                        placeholder='Item Name'
                        onChange={updateForm}
                    />
                </label>
                <label>Description
                    <input
                        type='text'
                        value={formValues.description}
                        placeholder='Description'
                        onChange={updateForm}
                    />
                </label>
                <label>Price
                    <input
                        type='text'
                        value={formValues.price}
                        placeholder='Price'
                        onChange={updateForm}
                    />
                </label>
                <label>Location
                    <input
                        type='text'
                        value={formValues.location}
                        placeholder='Location'
                        onChange={updateForm}
                    />
                </label>
                <label>Category
                    <input
                        type='text'
                        value={formValues.category}
                        placeholder='Category'
                        onChange={updateForm}
                    />
                </label>
            </div>
            <div className='form-group submit'>
                <button disabled={disabled}>Submit Item</button>

                <div className='errors'>
                    <div>{errors.itemName}</div>
                    <div>{errors.description}</div>
                    <div>{errors.price}</div>
                    <div>{errors.location}</div>
                    <div>{errors.category}</div>
                </div>
            </div>
        </form>
    )
}