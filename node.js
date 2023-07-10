// const express=require('express')
// const cors=require('cors')

// const app =express()
// app.use(cors('*'))
// app.get('/',(request,response)=>{response.send('this is version2 of my backend application')
// })

// app.listen(4000,'0.0.0.0',()=>{
//     console.log('server started on port 4000')
// })
// ---------------------------------------------------------------
const express =  require('express');
const config = require('config');

const appForEmps = express.Router();
const mysql = require('mysql');
var connection = mysql.createConnection({
    host     : localhost,
    user     : sunbeam,
    password : sunbeam,
    database : classwork
   });


//GET = SELECT FROM DB
appForEmps.get("/", (request, response)=>{

    connection.query("select * from Employee_Tb", (error, result)=>{
                if(error==null)
                {
                    var data = JSON.stringify(result) 
                    response.setHeader("Content-Type","application/json");
                    response.write(data);
                } 
                else
                {
                    console.log(error);
                    response.setHeader("Content-Type","application/json");
                    response.write(error)
                }
                response.end();
    })

})

//POST = INSERT INTO DB
appForEmps.post("/", (request, response)=>{
   var query = 
    `insert into Employee_Tb values(${request.body.id}, '${request.body.e_name}','${request.body.email}','${request.body.password}',${request.body.emp_id},'${request.body.dname}','${request.body.doj}')`;

    connection.query(query, (error, result)=>{
        if(error==null)
        {
            var data = JSON.stringify(result) 
            response.setHeader("Content-Type","application/json");
            response.write(data);
        } 
        else
        {
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error)
        }
        response.end();
})
})

//PUT = UPDATE INTO DB
appForEmps.put("/:id", (request, response)=>{
    var query = 
    `update Employee_Tb set e_name = '${request.body.e_name}',
                    email = '${request.body.email}',password='${request.body.password}',emp_id=${request.body.emp_id},dname='${request.body.dname}',doj='${request.body.doj}' where id = ${request.params.id}`;

    connection.query(query, (error, result)=>{
                        if(error==null)
                        {
                            var data = JSON.stringify(result) 
                            response.setHeader("Content-Type","application/json");
                            response.write(data);
                        } 
                        else
                        {
                            console.log(error);
                            response.setHeader("Content-Type","application/json");
                            response.write(error)
                        }
                        response.end();
                })
})

//DELETE  = DELETE FROM DB
appForEmps.delete("/:id", (request, response)=>{
    var query = 
    `delete from Employee_Tb where id = ${request.params.id}`;
                    
    connection.query(query, (error, result)=>{
                        if(error==null)
                        {
                            var data = JSON.stringify(result) 
                            response.setHeader("Content-Type","application/json");
                            response.write(data);
                        } 
                        else
                        {
                            console.log(error);
                            response.setHeader("Content-Type","application/json");
                            response.write(error)
                        }
                        response.end();
                })
})

appForEmps.listen(4000,'0.0.0.0',()=>{
    console.log('server started on port 4000')
})