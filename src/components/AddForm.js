import { Form, Button } from "react-bootstrap"

import {BrandContext} from '../contexts/BrandContext';
import {useContext, useState} from 'react';



const AddForm = () =>{

    const {addBrand} = useContext(BrandContext);

    const [newBrand, setNewBrand] = useState({
        name:"", title:"", /*phone:"", address:""*/
    });

    const onInputChange = (e) => {
        setNewBrand({...newBrand,[e.target.name]: e.target.value})
    }

    const {name, title, /*phone, address*/} = newBrand;

    const handleSubmit = (e) => {
        e.preventDefault();
        addBrand(name, title, /*phone, address*/);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="title"
                    placeholder="Title *"
                    name="title"
                    value={title}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            /*
            <Form.Group>
                <Form.Control
                   /* as="textarea"
                    placeholder="Address"
                    rows={3}
                    name="address"
                    value={address}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange = { (e) => onInputChange(e)}*/
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Add New Brand
            </Button>
        </Form>

     )
}

export default AddForm;