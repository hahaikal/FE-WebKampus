import { useLocation } from 'react-router-dom';

export default function FormLogin() {

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const role = searchParams.get('role')
    const placeholder = role === 'dosen' ? 'NIDN' : 'NIM'

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="formLogin">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder={placeholder} required />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <i className='bx bxs-lock-alt'></i>
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />Ingat saya</label>
                        <a href="#">Lupa Password?</a>
                    </div>

                    <button type="submit" className="btn">Login</button>

                    <div className="register-link">
                        <p>Belum Memiliki Akun?<a href="../Register-Form/index.html"> Daftar</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}