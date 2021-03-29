import * as yup from 'yup'

export const formSchema = yup.object().shape({
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