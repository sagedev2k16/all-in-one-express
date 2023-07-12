import knex from "knex";

import ModelUser from "./model/user.model.js";
import ModelTransaction from "./model/transactions.model.js";
import axios from "axios";

let db;

const initDb = async () => {
    // DB config
    db = knex({
        client: "sqlite3",
        connection: {
            filename: "./db.sqlite"
        },
        useNullAsDefault: true
    });

    // Initialize DB
    try {
        // Check if the table already exists, if not then create it
        if (!await db.schema.hasTable(ModelUser.TABLE_NAME)) {
            console.log(`Creating ${ModelUser.TABLE_NAME} table`);
            await db.schema.createTable(ModelUser.TABLE_NAME, ModelUser.createTable);
            console.log(`${ModelUser.TABLE_NAME} table created`);
        } else {
            console.log(`${ModelUser.TABLE_NAME} table exists already`);
        }

        if (!await db.schema.hasTable(ModelTransaction.TABLE_NAME)) {
            console.log(`Creating ${ModelTransaction.TABLE_NAME} table`);
            await db.schema.createTable(ModelTransaction.TABLE_NAME, ModelTransaction.createTable);
            console.log(`${ModelTransaction.TABLE_NAME} table created`);
        } else {
            console.log(`${ModelTransaction.TABLE_NAME} table exists already`);
        }

        let initialUsers = await getAllRecords(ModelUser.TABLE_NAME);
        let initialTxns = await getAllRecords(ModelTransaction.TABLE_NAME);

        if(initialUsers && initialUsers.length && initialUsers.length >= 4) {
            console.log("Users already exist", initialUsers);
        } else {
            await db(ModelUser.TABLE_NAME).insert(ModelUser.sampleData);
        }

        if(initialTxns && initialTxns.length && initialTxns.length >= 4) {
            console.log("Transactions already exist", initialTxns);
        } else {
            await db(ModelTransaction.TABLE_NAME).insert(ModelTransaction.sampleData);
        }
    } catch(e) {
        console.log(e);
    }
};

// Insert single record in DB
const insertRecord = async (tableName, record) => {
    let insertResult = await db(tableName).insert(record);
    console.log("insert result", insertResult);
    return insertResult;
}

// Insert multiple records in DB
const insertRecords = async (tableName, records) => {
    let insertResult = await db(tableName).insert(records);
    console.log("insert result", insertResult);
    return insertResult;
}

// Get all DB records
const getAllRecords = async (tableName) => {
    let dbUsers = await db.select().table(tableName);
    return dbUsers;
}

// Get a particular record by ID
const getRecordById = async (tableName, id) => {
    let user = await db(tableName).where("empId", id).first();
    console.log("User by id", user);
    return user;
}

// Get users belonging to a particular role
const getRecordsByRole = async (tableName, role) => {
    let users = await db(tableName).where("role", role);
    console.log("Users by role", users);
    return users;
}

// Update a record
const updateRecord = async (tableName, newRecord) => {
    let updateResult = await db(tableName)
        .where({empId: newRecord.empId})
        .update(newRecord);

    console.log("update result", updateResult);

    return updateResult;
}

// Delete record
const deleteRecord = async (tableName, id) => {
    let deleteResult = await db(tableName).where({empId: id}).delete();
    console.log("delete result", deleteResult);
    return deleteResult;
}

const getWeatherForCity = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`;
    const data = await axios.get(url, {
        headers: {
            Accept: "application/json"
        }
    });

    return data.data;
}

export function checkReadScope(req, res, next) {
    if(process.env.NODE_ENV === "production") {
        if(req.authInfo.checkLocalScope("read")) {
            return next();
        } else {
            console.log("Missing read authorization");
            res.status(403).end("Missing read authorization");
        }
    } else {
        return next();
    }
}

export function checkPerformScope(req, res, next) {
    if(process.env.NODE_ENV === "production") {
        if(req.authInfo.checkLocalScope("perform")) {
            return next();
        } else {
            console.log("Missing perform authorization");
            res.status(403).end("Missing perform authorization");
        }
    } else {
        return next();
    }
}

export {
    initDb,
    insertRecord,
    insertRecords,
    getAllRecords,
    getRecordById,
    getRecordsByRole,
    updateRecord,
    deleteRecord,
    getWeatherForCity
};