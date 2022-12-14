import { Form, Button } from "react-bootstrap"

import {BrandContext} from '../contexts/BrandContext';
import {useContext, useState} from 'react';




const EditForm = ({theBrand}) =>{

    const id = theBrand.id;

    const [thumbnail, setThumbnail] = useState(theBrand.thumbnail);
    
    const [name, setName] = useState(theBrand.name);
    const [title, setTitle] = useState(theBrand.title);
   


    const {updateBrand} = useContext(BrandContext);

const updatedBrand = {id, thumbnail, name, title, }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateBrand(id, updatedBrand)
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                 
                
                
                 type='img'
                 placeholder="Thumbnail"
                 name="image"
                 value={Image}
                 img src='apple.png' alt="" 
                 onChange={(e)=> setThumbnail(e.target.value)}
                 />
                 </Form.Group>
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
            <Button variant="success" type="submit" block>
                Edit Brand
            </Button>
        </Form>

     )
}

export default EditForm;