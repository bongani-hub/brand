import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {BrandContext} from '../contexts/BrandContext';
import Brand from './Brand';
import AddForm from './AddForm';
import Pagination from './Pagination';

const BrandList = () => {

    const {sortedBrands} = useContext(BrandContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    

    const [currentPage, setCurrentPage] = useState(1);
    const [brandsPerPage] = useState(2)

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(()=> {
            setShowAlert(false);
        }, 2000)
    }

    useEffect(() => {
        handleClose();

        return () => {
            handleShowAlert();
        }
    }, [sortedBrands])

    const indexOfLastBrand = currentPage * brandsPerPage;
    const indexOfFirstBrand = indexOfLastBrand - brandsPerPage;
    const currentBrands = sortedBrands.slice(indexOfFirstBrand, indexOfLastBrand);
    const totalPagesNum = Math.ceil(sortedBrands.length / brandsPerPage);


    return (
    <>
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>Manage <b>Brands</b></h2>
            </div>
            <div className="col-sm-6">
                <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Brand</span></Button>					
            </div>
        </div>
    </div>

    <Alert show={showAlert} variant="success">
        Brand List Updated Succefully!
    </Alert>

    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>Thumbnail</th>
                <th>Name</th>
                <th>Title</th>
                
            </tr>
        </thead>
        <tbody>

                {
                  currentBrands.map(brand => (
                      <tr key={brand.id}>
                        <Brand brand={brand} />
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>

    <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentBrands ={currentBrands}
                sortedBrands = {sortedBrands} />

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add Brands
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>
    </>
    )
}

export default BrandList;