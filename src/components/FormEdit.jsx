import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const FormEdit = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="container mt-5">
            <div className="bg-light p-3 rounded-3 text-center mt-n2">
<img src="https://i.pinimg.com/736x/ca/53/34/ca5334034a44fb084e4cddb441e806e2.jpg" className="img-thumbnail rounded-circle border w-25 " alt="Foto Profil" />
                <div className="d-flex justify-content-center align-items-center">
                    <h1 className="mt-3">HOTBADIA BUTAR-BUTAR</h1>
                    <Button variant="primary" onClick={handleShow} className="btn btn-primary ms-1" style={{ padding: '.25rem .5rem', fontSize: '.60rem' }}>
                        Edit Profile
                    </Button>
                </div>
                <p className="lead">Web Developer</p>
            </div>

            <div className="mt-4 info">
                <h2>Informasi Tambahan</h2>
                <ul className="list-group">
                    <li className="list-group-item"><strong>Email :</strong> pengguna@example.com</li>
                    <li className="list-group-item"><strong>NPM / NIDM :</strong> 1237612</li>
                    <li className="list-group-item"><strong>Telepon :</strong> +62 812-3456-7890</li>
                    <li className="list-group-item"><strong>Fakultas :</strong> Teknik</li>
                    <li className="list-group-item"><strong>Prodi :</strong> Tekni informastika</li>
                </ul>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nama :</Form.Label>
                            <Form.Control type="text" placeholder="Nama Lengkap" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email :</Form.Label>
                            <Form.Control type="email" placeholder="Alamat Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Bio :</Form.Label>
                            <Form.Control as="textarea" rows={2} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>No. Hp/Telepon :</Form.Label>
                            <Form.Control type="text" placeholder="+62 822********" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Fakultas :</Form.Label>
                            <Form.Control type="text" placeholder="isi Fakultas" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Program Studi :</Form.Label>
                            <Form.Control type="text" placeholder="isi Program Studi" />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Foto Profile</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default FormEdit

