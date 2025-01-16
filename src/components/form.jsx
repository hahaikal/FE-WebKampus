import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function FormLogin ({handler, placeholder}) {
    const location = useLocation();
    const [inputs, setInputs] = useState([]);
    const loginM = '/login/mahasiswa'
    const loginD = '/login/dosen'
    
    useEffect(() => {
        if (location.pathname === loginM || location.pathname === loginD) {
            setInputs([
                { type: 'text', placeholder: placeholder, icon: 'bx bxs-user' },
                { type: 'password', placeholder: 'Password', icon: 'bx bxs-lock-alt' },
            ]);
        } else if (location.pathname === '/register/mahasiswa' || location.pathname === '/register/dosen') {
            setInputs([
                { type: 'text', placeholder: 'Nama Lengkap', icon: 'bx bxs-user', id:'name'},
                { type: 'text', placeholder: 'Email', icon: 'bx bx-envelope', id:'email' },
                { type: 'text', placeholder: placeholder, icon: 'bx bxs-user', id: placeholder },
                { type: 'password', placeholder: 'Password', icon: 'bx bxs-lock-alt', id: 'password' },
                { type: 'password', placeholder: 'Confirm Password', icon: 'bx bxs-lock-alt', id: 'confirmPassword' },
            ]);
        }
    }, [location.pathname, placeholder]);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="formLogin">
                <form onSubmit={handler}>
                    <h1>{location.pathname === loginM || location.pathname === loginD ? 'Login' : 'Register'}</h1>

                    {inputs.map((input, index) => {
                        return (
                        <div key={index} className="input-box">
                            <input type={input.type} placeholder={input.placeholder} id={input.id} required />
                            <i className={`${input.icon}`}></i>
                        </div>
                        );
                    })}

                    <div className="remember-forgot">
                        <label><input type="checkbox" />Ingat saya</label>
                        <a href="#">Lupa Password?</a>
                    </div>

                    <button type="submit" className="btn">Login</button>

                    <div className="register-link">
                        <p>{location.pathname === loginM || location.pathname === loginD ? 'Belum Memiliki Akun?' : 'Sudah Memiliki Akun?'}</p>
                        <a href={location.pathname === loginM ? '/register/mahasiswa' :
                                 location.pathname === loginD ? '/register/dosen' : '/login'}>
                                {location.pathname === loginM || location.pathname === loginD ? 'Daftar' : 'Login'}</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormLogin