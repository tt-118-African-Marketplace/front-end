import * as yup from 'yup'

export const formSchema = yup.object().shape({
    username: yup
        .string()
        .required('username is required')
        .min(3, 'username must be at least 3 characters long')
        .trim(),
    password: yup.
        string()
        .required('password is required')
        .min(8, 'password must be at least 8 characters long')
        .trim(),
    department: yup
        .string()
        .oneOf(['buyer', 'seller'], 'department is required'),        
    itemName: yup
        .string()
        .trim()
        .required('Item name is required'),
    description: yup
        .string()
        .trim()
        .required('Description of item is required'),
    price: yup
        .string()
        .trim()
        .required('Price of item is required'),
    location: yup
        .string()
        .required('Location is required'),
    category: yup
        .string()
        .required('Item category is required')
})