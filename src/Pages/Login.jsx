export default function Login () {
    return (
    <div className="wrapper  d-flex justify-content-center align-items-center vh-100">
        <form action="">
            <div className="icon"><i className='bx bxs-user' ></i></div>
            <h1>Login
                <p>Sebagai : </p>
            </h1>

            <div className="option">
            <a href="/login/dosen">Dosen</a>
            <a href="/login/mahasiswa">Mahasiswa</a>
            </div>
        </form>
    </div>
    )
}