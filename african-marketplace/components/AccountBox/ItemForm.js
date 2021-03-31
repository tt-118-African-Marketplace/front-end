import React, { useContext, useState } from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton, Label } from './common'
import { Marginer } from '../marginer'

export default function ItemForm(props) {

    const { formValues, updateForm, submitForm, disabled} = props
    return(
    <BoxContainer>
        <FormContainer className='form-container' onSubmit={submitForm}>
            <HeaderText>Items Form</HeaderText>
            <SmallText>Add Items</SmallText>
            <div className='form-group inputs'>
                <Label>Item Name
                    <Input
                        type='text'
                        value={formValues.itemName}
                        placeholder='Item Name'
                        onChange={updateForm}
                    />
                </Label>
                <Label>Description
                    <Input
                        type='text'
                        value={formValues.description}
                        placeholder='Description'
                        onChange={updateForm}
                    />
                </Label>
                <Label>Price
                    <Input
                        type='text'
                        value={formValues.price}
                        placeholder='Price'
                        onChange={updateForm}
                    />
                </Label>
                <Label>Location
                    <Input
                        type='text'
                        value={formValues.location}
                        placeholder='Location'
                        onChange={updateForm}
                    />
                </Label>
                <Label>Category
                    <Input
                        type='text'
                        value={formValues.category}
                        placeholder='Category'
                        onChange={updateForm}
                    />
                </Label>
            </div>
            <div className='form-group submit'>
                <Marginer direction="vertical" margin={5} />
                <SubmitButton disabled={disabled}>Submit Item</SubmitButton>

                <div className='errors'>
                    <div>{errors.itemName}</div>
                    <div>{errors.description}</div>
                    <div>{errors.price}</div>
                    <div>{errors.location}</div>
                    <div>{errors.category}</div>
                </div>
            </div>
        </FormContainer>
    </BoxContainer>
    )
}