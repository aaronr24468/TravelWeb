//const API_URL = import.meta.env.REACT_VITE_API_URL;
const URL_PATH = 'https://api.moveandgo.com.mx'

export const registerUserData = async (data) => {
    const res = await fetch(`${API_URL}/register`, {
        method: 'put',
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(data)
    });
    return (res.json())
}

export const uploadImageUser = async (file, id) => {
    const formData = new FormData();
    formData.append('image', file)
    console.log(formData)

    const result = await fetch(`${API_URL}/register/setImage/${id}`, {
        method: 'post',
        body: formData
    })
    return (result.json())
}

export const registerDriverData = async(data) =>{
    const result = await fetch(`${API_URL}/register/registDriver`,{
        method: 'PUT',
        credentials: 'include',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })

    return(result.json());
}

export const setImageDriver = async(file, id) =>{
    const formData = new FormData();
    formData.append('image', file)
    const result = await fetch(`${API_URL}/register/registDriver/setDriverImage/${id}`,{
        method: 'POST',
        credentials: 'include',
        body: formData
    })

    return(result.json());
}