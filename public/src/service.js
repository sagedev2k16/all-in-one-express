const apiHost = import.meta.env.VITE_API_HOST;

const getAllUsers = async () => {
    let resp = await fetch(apiHost + "/db/users", {
        method: 'get',
    });

    let respJson = await resp.json();

    return respJson;
}

const getUserById = async (id) => {
    let resp = await fetch(apiHost + `/db/userById/${id}`, {
        method: 'get',
    });

    let respJson = await resp.json();

    return respJson;
}

const getUsersByRole = async (role) => {
    let resp = await fetch(apiHost + `/db/usersByRole/${role}`, {
        method: 'get',
    });

    let respJson = await resp.json();

    return respJson;
}

const createUser = async (type, userName, city) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let resp = await fetch(apiHost + `/db/create/${type}`, {
        method: 'post',
        body: JSON.stringify({userName, city}),
        headers: myHeaders
    });

    let respJson = await resp.json();

    return respJson;
}

const updateUser = async(userObj) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let resp = await fetch(apiHost + `/db/update`, {
        method: 'put',
        body: JSON.stringify(userObj),
        headers: myHeaders
    });

    let respJson = await resp.json();

    return respJson;
}

const deleteUser = async(id) => {
    let resp = await fetch(apiHost + `/db/delete/${id}`, {
        method: 'delete'
    });

    let respJson = await resp.json();

    return respJson;
}

export default {
    getAllUsers,
    getUserById,
    getUsersByRole,
    createUser,
    updateUser,
    deleteUser
}