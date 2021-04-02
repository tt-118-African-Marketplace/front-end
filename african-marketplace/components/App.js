import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import axios from 'axios'

import styled from 'styled-components'

import { AccountBox } from './components/AccountBox';

import { formSchema } from './components/validation/formSchema'

const AppStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;`;

const initialFormValues = {
  username: '',
  password: '',
  department: '',
  itemName: '',
  description: '',
  price: '',
  location: '',
  category: ''
}

const initialFormErrors = {
  username: '',
  password: '',
  department: '',
  itemName: '',
  description: '',
  price: '',
  location: '',
  category: ''
}

const initialUsers = [];
const initialItems = []
const initialDisabled = true

export default function App() {

  const [users, setUsers] = useState(initialUsers);
  const [items, setItems] = useState(initialItems)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 

  // Users component code
  const getUsers = () => {
    axios.get('https://african-marketplace-tt118.herokuapp.com/api/users').then((res) => {
      setUsers(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };
  const postNewUser = (newUser) => {
    axios.post('https://african-marketplace-tt118.herokuapp.com/api/users', newUser).then((res) => {
      setUsers([res.data, ...users]);
      setFormValues(initialFormValues);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  // Items component code
  const getItems = () => {
    axios.get('https://african-marketplace-tt118.herokuapp.com/api/items')
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err)
    })
  }
  const postNewItem = (newItem) => {
    axios.post('https://african-marketplace-tt118.herokuapp.com/api/items/additem', newItem)
      .then((res) => {
        setItems([res.data, ...items])
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const updateForm = (event) => {
    // const { name, value, type, checked} = event.target
    // const updatedInfo = type === 'checkbox' ? checked: value;
    const { name, value, type, username } = event.target
    setFormValues({...formValues, [name]: updatedInfo})
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(({errors}) => setFormErrors({...formErrors, [name]: errors[0]}))
  }

  const submitForm = (event) => {
    
    event.preventDefault()
    
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      department: ['buyer', 'seller'].filter((dept) => formValues[dept]
      ),
    };
    postNewUser(newUser)

    const newItem = {
    itemName: formValues.name.trim(),
    description: formValues.description.trim(),
    price: formValues.price.trim(),
    location: formValues.location.trim(),
    category: formValues.category.trim()
    }
  }
  postNewItem(newItem)

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => setDisabled(!valid))
  }, [formValues])

  // to see data
  // useEffect(() => {
  //   console.log(items)
  // }, [items])
  // useEffect(() => {
  //   getUsers();
  // }, []);
   
  return (
    <AppStyle>
      <AccountBox 
        values={formValues}
        change={updateForm}
        submit={submitForm}
        disabled={disabled}
        errors={errors}
      />
      <ItemForm 
        formValues={formValues}
        updateForm={updateForm}
        submitForm={submitForm}
        disabled={disabled}
        errors={errors}
      />
    </AppStyle>
  );
}
