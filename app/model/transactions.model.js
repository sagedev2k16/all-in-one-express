export default {
    TABLE_NAME: "transactions",
    idColName: "txnId",
    sampleData: [
        {txnName: "Buy food", txnType: "Buy", txnDesc: "Bought 50 units of cereal"},
        {txnName: "Buy water", txnType: "Buy", txnDesc: "Bought 10 bottles of water"},
        {txnName: "Sell chocolate", txnType: "Sell", txnDesc: "Sold some chocolate"},
        {txnName: "Replace cloth", txnType: "Replace", txnDesc: "Replaced faulty cloth"}
    ],
    createTable: (table) => {
        table.increments('txnId');
        table.string('txnName');
        table.string('txnType');
        table.string('txnDesc');
    }
}