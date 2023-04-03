import Express from "express";
import { 
    getAllRecords, 
    getRecordById, 
    getRecordsByRole, 
    insertRecord, 
    updateRecord, 
    deleteRecord 
} from "./utils.js";
const router = Express.Router();

const tableName = 'users';

// Get all DB users
router.get("/users", async (req, res) => {
    let dbUsers = await getAllRecords(tableName);
    res.send(dbUsers);
});

// Get DB user by id
router.get("/userById/:id", async (req, res) => {
    console.log("Getting user with id", req.params.id);

    let user = await getRecordById(tableName, req.params.id);

    if(!user) {
        res.status(404).send({
            msg: `No user found with id - ${req.params.id}`
        });
    } else {
        res.send(user);
    }
});

// Get DB user by role
router.get("/usersByRole/:role", async (req, res) => {
    console.log("Getting users with role", req.params.role);

    let usersWithRole = await getRecordsByRole(tableName, req.params.role);

    if(!usersWithRole) {
        res.status(404).send({
            msg: `No users found with role - ${req.params.role}`
        });
    } else {
        res.send(usersWithRole);
    }
});

// Create new DB user
router.post("/create/:type", async (req, res) => {
    let type = req.params.type;
    let newUser = req.body; // {userName: "Bob"}

    if(!type) {
        console.error("type path param not found");
        res.status(400).send({"msg": "type path param not found"});
        return;
    } else if(!newUser.userName) {
        console.error("userName property not found");
        res.status(400).send({"msg": "userName property not found"});
        return;
    } else {
        newUser.role = req.params.type;

        let newRowNum = await insertRecord(tableName, newUser);

        if(newRowNum && newRowNum.length) {
            res.status(201).send({
                msg: "New user created",
                user: newUser
            });
        } else {
            res.status(200).send({
                msg: "New user not created",
                user: newUser
            });
        }
    }
});

// Update existing DB user
router.put("/update", async (req, res) => {
    let updatedUser = req.body;

    console.log(updatedUser);

    if(!updatedUser.empId) {
        console.error("empId property not found");
        res.status(400).send({"msg": "empId property not found"});
        return;
    } else {
        let rowNum = await updateRecord(tableName, updatedUser);

        if(rowNum && rowNum > 0) {
            res.status(200).send({
                msg: "User updated",
                user: updatedUser
            });
        } else {
            res.status(404).send({
                msg: "User not updated",
                user: updatedUser
            });
        }
    }
});

// Delete existing DB user
router.delete("/delete/:id", async (req, res) => {
    let id = req.params.id;

    if(!id) {
        console.log("deletion - id param not found");
        res.status(400).send({"msg": "id param not found"});
    } else {
        let deleteIndex = await deleteRecord(tableName, id);

        if(deleteIndex && deleteIndex > 0) {
            res.status(200).send({"msg": "User deleted"});
        } else {
            res.status(404).send({"msg": "User not found"});
        }
    }
});

export default router;