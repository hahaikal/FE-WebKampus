import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function LoginHandler (placeholder) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (placeholder === 'NIM') {
      axios.post('http://localhost:3000/login', {
        nim: username,
        password: password
      })
      .then((response) => {
        alert(response.data.message)
        sessionStorage.setItem('userData', JSON.stringify(response.data.user));
        navigate('/home', {state: response.data.user})
      })
      .catch((error) => {
        console.error(error.response.data.message);
        alert(error.response.data.message);
      });
    } else if (placeholder === 'NIDN') {
      axios.post('http://localhost:3000/login', {
        nidn: username,
        password: password
      })
      .then((response) => {
        alert(response.data.message)
        sessionStorage.setItem('userData', JSON.stringify(response.data.user));
        navigate('/home', {state: response.data.user})
      })
      .catch((error) => {
        console.error(error.message);
        alert(error.message)
      });
    }
  };

  return handleSubmit;
};

