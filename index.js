var connect=require('connect');
module.exports=function(port){
    var p;
    if(port){
        p=port;
    }
    else{
        p=4000;
    }
    console.log("Starting mini-harp on http://localhost:"+p);
    var app=connect();
    app.listen(p);
};
