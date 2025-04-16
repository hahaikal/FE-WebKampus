const EditProfile = async (e, id, handleClose) => {  
    e.preventDefault();  
  
    const userData = JSON.parse(sessionStorage.getItem('userData'));  
    const name = document.querySelector('#name').value === '' ? null : document.querySelector('#name').value;
    const email = document.querySelector('#email').value === '' ? null : document.querySelector('#email').value; 
    const bio = document.querySelector('#bio').value === '' ? null : document.querySelector('#bio').value;
    const telepon = document.querySelector('#telepon').value === null ? null : document.querySelector('#telepon').value;
    const fakultas = document.querySelector('#fakultas').value === '' ? null : document.querySelector('#fakultas').value;
    const prodi = document.querySelector('#prodi').value === '' ? null : document.querySelector('#prodi').value; 
  
    const data = { name, email, bio, telepon, fakultas, prodi }; 
    console.log(data);
  
    try {  
        const response = await fetch(`http://localhost:3000/edit/${id}`, {  
            method: 'PUT',  
            headers: {  
                'Content-Type': 'application/json',  
            },  
            body: JSON.stringify(data),  
        });  
        console.log(response);
  
        if(!response.ok) {  
            const errorResult = await response.json();  
            return alert(errorResult.message);  
        }  
      
        const result = await response.json();  
        console.log(result)
        const updatedUserData = { ...userData };  
        
        // Update only the modified fields
        Object.keys(data).forEach(key => {
            if (data[key] !== userData[key]) {
                updatedUserData[key] = data[key];
            }
        });
        
        sessionStorage.setItem('userData', JSON.stringify(updatedUserData));  
        alert(result.message);  
        return handleClose();  
    } catch (error) {  
        console.error('There was a problem with the fetch operation:', error);  
    }  
};

export default EditProfile;
