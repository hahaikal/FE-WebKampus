import FormLoginComponent from '../components/form'
import { useLocation } from 'react-router-dom';
import loginHandler from '../handler/login';

export default function FormLogin() {

    const location = useLocation();
    const pathname = location.pathname;

    let placeholder = '';

    if (pathname === '/login/mahasiswa') {
        placeholder = 'NIM';
    } else if (pathname === '/login/dosen') {
        placeholder = 'NIDN';
    }

    const handleSubmit = loginHandler(placeholder)
    
    return (
        <FormLoginComponent 
            placeholder={placeholder}
            handler={handleSubmit}
        />
    )
}