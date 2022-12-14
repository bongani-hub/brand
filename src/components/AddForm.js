import { Form, Button } from "react-bootstrap"


import {BrandContext} from '../contexts/BrandContext';
import {useContext, useState} from 'react';




const AddForm = () =>{

    const {addBrand} = useContext(BrandContext);

    const [newBrand, setNewBrand] = useState({

      thumbnail:"", name:"", title:"", 
    });

    const onInputChange = (e) => {
        setNewBrand({...newBrand,[e.target.name]: e.target.value})
    }

    const {thumbnail, name, title, } = newBrand;

    const handleSubmit = (e) => {
        e.preventDefault();
        addBrand(thumbnail, name, title, );

    
    }

     return (

        <Form onSubmit={(handleSubmit)}>
            <Form.Group>
                <Form.Control
                
               
                img src="apple.png" height="100px" width="100px"
                
               
            />
            </Form.Group>
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
            <Button variant="success" type="submit" block>
                Add New Brand
            </Button>
        </Form>

     )
}

export default AddForm;