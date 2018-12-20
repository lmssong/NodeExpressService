var sql = require('mssql')
var config = require('../utils/sqlConfig')

const sqlService = {
    getApprovalCenterDatas: function(params,callback){
        new sql.ConnectionPool(config).connect().
        then(pool => {
           
            const request = new sql.Request(pool)
            request.execute('proc_wx_getApprovalCenterDatas')
            .then(result => {
                console.log(result.recordset)
                callback(result.recordset)
            }).then(err => {
                request.cancel()
            }).then(result => {
                pool.close()
            })
        })
        .catch(err => {
            console.log(err)
        })

    },
    getDocumentCenterDatas: function(params,callback){
        new sql.ConnectionPool(config).connect().
        then(pool => {
           
            const request = new sql.Request(pool)
            request.execute('proc_wx_getDocumentCenterDatas')
            .then(result => {
                console.log(result.recordset)
                callback(result.recordset)
            }).then(err => {
                request.cancel()
            }).then(result => {
                pool.close()
            })
        })
        .catch(err => {
            console.log(err)
        })

    },
    getReceiveSampleList: function(params,callback){
        new sql.ConnectionPool(config).connect().
        then(pool => {
           
            const request = new sql.Request(pool)
            request.execute('proc_wx_QueryReceiveSample')
            .then(result => {
                console.log(result.recordset)
                callback(result.recordset)
            }).then(err => {
                request.cancel()
            }).then(result => {
                pool.close()
            })
        })
        .catch(err => {
            console.log(err)
        })

    },
    getTestingTaskList: function(params,callback){
        new sql.ConnectionPool(config).connect().
        then(pool => {
           
            const request = new sql.Request(pool)
            request.execute('proc_wx_QueryTestingTask')
            .then(result => {
                console.log(result.recordset)
                callback(result.recordset)
            }).then(err => {
                request.cancel()
            }).then(result => {
                pool.close()
            })
        })
        .catch(err => {
            console.log(err)
        })

    }
}

module.exports = sqlService