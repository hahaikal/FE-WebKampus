import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import EditProfile from '../handler/edit';

const FormEdit = () => {
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState(null);
  const [nimOrNidn, setNimOrNidn] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    fetchUserData();
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:3000/login/session');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      setUserData(data.user);
      setNimOrNidn(data.user.nim ? 'NIM' : 'NIDN');
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    if (show) {
      fetchUserData();
    }
  }, [show]);

  return (
    <div className="container mt-5">
      <div className="bg-light p-3 rounded-3 text-center mt-n2">
        <img src="https://i.pinimg.com/736x/ca/53/34/ca5334034a44fb084e4cddb441e806e2.jpg" className="img-thumbnail rounded-circle border w-25 " alt="Foto Profil" />
        <div className="d-flex justify-content-center align-items-center">
          <h1 className="mt-3">{userData?.name}</h1>
          <Button variant="primary" onClick={handleShow} className="btn btn-primary ms-1" style={{ padding: '.25rem .5rem', fontSize: '.60rem' }}>
            Edit Profile
          </Button>
        </div>
        <p className="lead">Web Developer</p>
      </div>

      <div className="mt-4 info">
        <h2>Informasi Tambahan</h2>
        {userData && (
          <ul className="list-group">
            <li className="list-group-item"><strong>Email :</strong> {userData.email} </li>
            <li className="list-group-item"><strong>{nimOrNidn} :</strong> {userData.nim || userData.nidn} </li>
            <li className="list-group-item"><strong>Telepon :</strong> {userData.telepon} </li>
            <li className="list-group-item"><strong>Fakultas :</strong> {userData.fakultas} </li>
            <li className="list-group-item"><strong>Prodi :</strong>  {userData.prodi} </li>
          </ul>
        )}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => EditProfile(e, userData.id, handleClose)}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nama :</Form.Label>
              <Form.Control type="text" placeholder="Nama Lengkap" defaultValue={userData?.name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email :</Form.Label>
              <Form.Control type="email" placeholder="Alamat Email" defaultValue={userData?.email} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bio">
              <Form.Label>Bio :</Form.Label>
              <Form.Control as="textarea" rows={2} defaultValue={userData?.bio} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="telepon">
              <Form.Label>No.Hp/ Telepon :</Form.Label>
              <Form.Control type="text" placeholder="+62 822********" defaultValue={userData?.telepon} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fakultas">
              <Form.Label>Fakultas :</Form.Label>
              <Form.Control type="text" placeholder="Fakultas" defaultValue={userData?.fakultas} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="prodi">
              <Form.Label>Prodi :</Form.Label>
              <Form.Control type="text" placeholder="Program Studi" defaultValue={userData?.prodi} />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FormEdit;