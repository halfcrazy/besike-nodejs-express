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
    app.use(function(request,response,next) {
                var url=request.url.split("/");
                if(url[1]=="current-time"){
                    response.write((new Date()).toISOString());
                    response.end();
                }
                // console.log(url[1]);
                next();
            });
    app.listen(p);
};
