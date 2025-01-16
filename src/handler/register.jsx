import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = (placeholder) => {
    const navigate = useNavigate();

    const registerSubmit = (event) => {
        event.preventDefault();

        const name = document.querySelector('#name').value
        const email = document.querySelector('#email').value
        const nimOrNidn = document.querySelector(`#${placeholder}`).value
        const password = document.querySelector('#password').value
        const confirmPassword = document.querySelector('#confirmPassword').value
        
        if (placeholder === 'NIM') {
            axios.post('http://localhost:3000/register/mahasiswa', {
                name,
                email,
                password,
                nim : nimOrNidn,
                confirmPassword
            }).then((res) => {
                alert(res.data.metadata)
                sessionStorage.setItem('userData', JSON.stringify(res.data));
                navigate('/home', {state: res.data})
            }).catch((e) => {
                alert(e.response.data.error)
                console.log(e.response.data.error)
            })
        } else if (placeholder === 'NIDN') {
            axios.post('http://localhost:3000/register/dosen', {
                name,
                email,
                password,
                nidn: nimOrNidn,
                confirmPassword
            }).then((res) => {
                alert(res.data.metadata)
                sessionStorage.setItem('userData', JSON.stringify(res.data));
                navigate('/home', {state: res.data})
            }).catch((e) => {
                alert(e.response.data.error)
                console.log(e.response.data.error)
            })
        }
    }
    return registerSubmit
}

export default Register