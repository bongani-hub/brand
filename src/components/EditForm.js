import { Form, Button } from "react-bootstrap"

import {BrandContext} from '../contexts/BrandContext';
import {useContext, useState} from 'react';

const EditForm = ({theBrand}) =>{

    const id = theBrand.id;

    const [name, setName] = useState(theBrand.name);
    const [title, setTitle] = useState(theBrand.title);
    /*const [address, setAddress] = useState(theEmployee.address);
    const [phone, setPhone] = useState(theEmployee.phone);*/


    const {updateBrand} = useContext(BrandContext);

const updatedBrand = {id, name, title, /*address, phone*/}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateBrand(id, updatedBrand)
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="title"
                    placeholder="Title *"
                    name="title"
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    /*as="textarea"
                    placeholder="Address"
                    rows={3}
                    name="address"
                    value={address}
                    onChange={(e)=> setAddress(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)} */
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Edit Brand
            </Button>
        </Form>

     )
}

export default EditForm;