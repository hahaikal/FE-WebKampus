import axios from 'axios';

export default function loginHandler (placeholder) {
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (placeholder === 'NIM') {
      axios.post('http://localhost:3000/login/mahasiswa', {
        NIM: username,
        password: password
      })
      .then((response) => {
        console.log(response.data);
        alert(response.data.metadata)
      })
      .catch((error) => {
        alert(error.message);
      });
    } else if (placeholder === 'NIDN') {
      axios.post('http://localhost:3000/login/dosen', {
        nidn: username,
        password: password
      })
      .then((response) => {
        console.log(response.data);
        alert('berhasil login')
      })
      .catch((error) => {
        console.error(error);
        alert('gagal login')
      });
    }
  };

  return handleSubmit;
};

