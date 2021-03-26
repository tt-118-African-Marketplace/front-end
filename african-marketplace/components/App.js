import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import axios from 'axios'

import ItemForm from './ItemForm'

import { formSchema } from './components/validation/formSchema'

const initialFormValues = {
  itemName: '',
  description: '',
  price: '',
  location: '',
  category: ''
}

const initialFormErrors = {
  itemName: '',
  description: '',
  price: '',
  location: '',
  category: ''
}

const initialItems = []
const initialDisabled = true

export default function App() {

  const [items, setItems] = useState(initialItems)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  // const [disabled, setDisabled] = useState(initialDisabled) 

  const updateForm = (event) => {
    // const { name, value, type, checked} = event.target
    // const updatedInfo = type === 'checkbox' ? checked: value;
    const { name, value, type } = event.target
    setFormValues({...formValues, [name]: updatedInfo})
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(({errors}) => setFormErrors({...formErrors, [name]: errors[0]}))
  }

  const submitForm = (event) => {
    
    event.preventDefault()
    
    const newItem = {
    itemName: formValues.name.trim(),
    description: formValues.description.trim(),
    price: formValues.price.trim(),
    location: formValues.location.trim(),
    category: formValues.category.trim()
    }
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => setDisabled(!valid))
  })

  //to see data
  // useEffect(() => {
  //   console.log(items)
  // }, [items])
  
   
  return (
    <div className="App">
      <h1>Items Form</h1>
      <h3>Add Items</h3>

      <ItemForm 
        formValues={formValues}
        updateForm={updateForm}
        submitForm={submitForm}
        disabled={disabled}
        errors={errors}
      />
    </div>
  );
}
