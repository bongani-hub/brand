import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BrandContext = createContext()

const BrandContextProvider  = (props) => {

    const [brand, setBrand] = useState([
        {id:uuidv4(), name: '', title: ''},
        {id:uuidv4(), name: '', title: ''},
        {id:uuidv4(), name: '', title: ''},
        {id:uuidv4(), name: '', title: ''},
        {id:uuidv4(), name: '', title: ''}
])

useEffect(()=> {
    setBrand(JSON.parse(localStorage.getItem('brand')))
},[])

useEffect(() => {
    localStorage.setItem('brand', JSON.stringify(brand));
})



const sortedBrands = brand.sort((a,b)=>(a.name < b.name ? -1 : 1));



const addBrand = (name, title, /*address, phone*/) => {
    setBrand([...brand , {id:uuidv4(), name, title,/* address, phone*/}])
}

const deleteBrand = (id) => {
    setBrand(brand.filter(brand=> brand.id !== id))
}

const updateBrand = (id, updatedBrand) => {
    setBrand(brand.map((brand) => brand.id === id ? updatedBrand : brand))
}

    return (
        <BrandContext.Provider value={{sortedBrands, addBrand, deleteBrand, updateBrand}}>
            {props.children}
        </BrandContext.Provider>
    )
}

export default BrandContextProvider;