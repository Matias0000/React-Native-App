const API ='http://10.0.2.2:3000/tasks'

export const getTasks = async()=>{
    const res = await fetch(API)
    return await res.json()
    
}

export const saveTask = async(newTask)=>{
    const response = await fetch(API,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newTask)
    });
    return await response.json()
}

export const deleteTask = async(id)=>{
     await fetch(`${API}/${id}`,{
        method:"DELETE",
    })
}

export const getTask = async(id)=>{
    const response = await fetch(`${API}/${id}`);
    return await response.json()
}

export const updateTask= async(id,newTask)=>{
    const response =await fetch(`${API}/${id}`,{
        method:'PUT',
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newTask)
    })
    return response;
}