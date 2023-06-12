export default {
    TABLE_NAME: "users",
    idColName: "empId",
    sampleData: [
        {userName: "John", role: "employee", city: "Mumbai"},
        {userName: "Jane", role: "manager", city: "Paris"},
        {userName: "Luke", role: "manager", city: "London"},
        {userName: "Leia", role: "employee", city: "Tokyo"}
    ],
    createTable: (table) => {
        table.increments('empId');
        table.string('userName');
        table.string('role');
        table.string('city');
    }
}