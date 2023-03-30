const apiHost = import.meta.env.VITE_API_HOST;

const getAllUsers = async () => {
    let resp = await fetch(apiHost + "/users", {
        method: 'get',
    });

    let respJson = await resp.json();

    return respJson;
}

const getUserById = async (id) => {
    let resp = await fetch(apiHost + `/userById/${id}`, {
        method: 'get',
    });

    let respJson = await resp.json();

    return respJson;
}

const getUsersByRole = async (role) => {
    let resp = await fetch(apiHost + `/usersByRole/${role}`, {
        method: 'get',
    });

    let respJson = await resp.json();

    return respJson;
}

const createUser = async (type, userName) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let resp = await fetch(apiHost + `/create/${type}`, {
        method: 'post',
        body: JSON.stringify({userName}),
        headers: myHeaders
    });

    let respJson = await resp.json();

    return respJson;
}

const updateUser = async(userObj) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let resp = await fetch(apiHost + `/update`, {
        method: 'put',
        body: JSON.stringify(userObj),
        headers: myHeaders
    });

    let respJson = await resp.json();

    return respJson;
}

const deleteUser = async(id) => {
    let resp = await fetch(apiHost + `/delete/${id}`, {
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