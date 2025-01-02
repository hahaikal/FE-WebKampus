import '../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigasiBar() {
  return (
    <>
      <Navbar className='pt-3'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Logo UNIKA"
              src="../src/assets/image/logo kebanggan.png"
              width="80"
              height="80"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link className="fs-5 fw-bolder me-5" href="#home">Halaman</Nav.Link>
                    <Nav.Link className="fs-5 fw-bolder me-5" href="#link">Panduan</Nav.Link>
                    <Nav.Link className="fs-5 fw-bolder" href="/login">Masuk</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="continer">
        <div className="content">
            <div className="info">
                <br/><h2>bimbingan<br/><span>jadi lebih efektif!</span></h2>
                <p className='fs-16 fw-bolder mb-5'>
                    Selamat datang di platform bimbingan akademik kami! Kami hadir untuk memudahkan komunikasi antara dosen pembimbing dan mahasiswa, memungkinkan Anda untuk menjadwalkan pertemuan, mengakses materi pembelajaran, dan mendapatkan dukungan yang Anda butuhkan. Bersama, kita wujudkan kesuksesan akademik yang lebih mudah dan efektif!. 
                    lorem100
                </p>
                <a href="#" className="info-btn">Tentang Kami</a>
            </div>
        </div>
      </div>
    </>
  )
}

export default NavigasiBar