import Express from "express";
const router = Express.Router();

// Define initial list of users
let users = [
    {userName: "John", empId: 1, role: "employee"},
    {userName: "Luke", empId: 2, role: "manager"},
    {userName: "Jane", empId: 3, role: "manager"},
    {userName: "Leia", empId: 4, role: "employee"},
];

// Read all users
router.get("/users", (req, res) => {
    console.log("Getting users");
    res.send(users);
});

// Read a user with id
router.get("/userById/:id", (req, res) => {
    console.log("Getting user with id", req.params.id);

    let user = users.filter((v) => v.empId === +req.params.id);

    res.send(user);
});

// Read a users with a particular role
router.get("/usersByRole/:role", (req, res) => {
    console.log("Getting users with role", req.params.role);

    let usersWithRole = users.filter((v) => v.role === req.params.role);

    res.send(usersWithRole);
});

// Create a new user
router.post("/create/:type", (req, res) => {
    let type = req.params.type;
    let newUser = req.body;

    console.log("newUser", newUser);

    if(!newUser.userName) {
        console.error("userName property not found for the new user");
        res.status(400).send({"msg": "userName property not found for the new user"});
        return;
    }

    console.log("Creating new", type, req.body);
    newUser["empId"] = users.length + 1;
    newUser["role"] = type;

    console.log("Creating new user", newUser);
    users.push(newUser);

    res.status(201).send({
        msg: "New user created",
        user: newUser
    });
});

// Update an existing user
router.put("/update", (req, res) => {
    let updatedUser = req.body;

    console.log(updatedUser);

    if(!updatedUser.empId) {
        console.error("empId property not found");
        res.status(400).send({"msg": "empId property not found"});
        return;
    }

    let user = users.filter((v) => v.empId === updatedUser.empId);

    if(!user || user.length == 0) {
        console.error("No user found with id", updatedUser.empId);
        res.status(400).send({"msg": `No user found with id ${updatedUser.empId}`});
        return;
    }

    console.log("Updating user", updatedUser);
    
    users.forEach((v) => {
        if(v.empId === updatedUser.empId) {
            if(updatedUser.role) {
                v.role = updatedUser.role;
            }

            if(updatedUser.userName) {
                v.userName = updatedUser.userName;
            }
        }
    });

    res.status(201).send({
        msg: "User updated",
        user: updatedUser
    });
});

router.delete("/delete/:id", (req, res) => {
    let id = req.params.id;
    let deleteIndex = -1;

    users.forEach((v, i) => {
        if(v.empId === +id) {
            deleteIndex = i;
        }
    });

    if(deleteIndex > -1) {
        users.splice(deleteIndex, 1);
        res.status(200).send({"msg": "User deleted"});
    } else {
        res.status(404).send({"msg": "User not found"});
    }
});

export default router;