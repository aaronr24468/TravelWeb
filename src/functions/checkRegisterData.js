export const checkData = (info) => {
    const ageC = Number(info.age);
    const resultN = Number.isNaN(ageC)
    
    if(info.name === "" || info.lastname === "" || info.age === "" || resultN === true  || info.username === "" || info.password === "" || info.phone === ""){
        return('Empty')
    }else{
        return('Full')
    }
}