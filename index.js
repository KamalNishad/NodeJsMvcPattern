var express = require('express');
var app = express();


app.get('/test',function(req,res){                  //testing api
    return res.send({error:true,message:'hello'});
});


//routes creations......

var userRoute = require('./routes/Users')           ///intilize Users route
app.use("/userapi",userRoute)


var adminroute = require('./routes/Admin')           
app.use("/adminapi",adminroute)

//..........End Routes//



app.listen(3000,function(){                         //Lister server function on port 3000
    console.log('Node App is runnting on port 3000');
})

module.exports=app;