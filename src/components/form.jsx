// eslint-disable-next-line react/prop-types
function FormLogin ({handler, placeholder}) {
    
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="formLogin">
                <form onSubmit={handler}>
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

export default FormLogin