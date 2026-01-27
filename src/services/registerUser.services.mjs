const URL_PATH = 'http://localhost:8080'

export const registerUserData = async (data) => {
    const res = await fetch(`${URL_PATH}/register`, {
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

    const result = await fetch(`${URL_PATH}/register/setImage/${id}`, {
        method: 'post',
        body: formData
    })
    return (result.json())
}