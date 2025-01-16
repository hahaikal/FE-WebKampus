import FormRegister from '../components/form'
import { useLocation } from 'react-router-dom'
import register from '../handler/register'

export default function Register () {
    const location = useLocation();
    const pathname = location.pathname;

    let placeholder = '';

    if (pathname === '/register/mahasiswa') {
        placeholder = 'NIM';
    } else if (pathname === '/register/dosen') {
        placeholder = 'NIDN';
    }

    const registerSubmit = register(placeholder)
    
    return (
        <FormRegister 
            placeholder={placeholder}
            handler={registerSubmit}
        />
    )
}