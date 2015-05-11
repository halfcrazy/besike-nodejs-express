var connect=require('connect');
var serve_static=require('serve-static');
module.exports=function(path,port){
    var Port;
    if(port){
        Port=port;
    }
    else{
        Port=4000;
    }
    var Path;
    if(path){
        Path=path;
    }
    else{
        Path=process.cwd();
    }
    console.log("Starting mini-harp on http://localhost:"+Port);
    var app=connect();
    app.use(function(request,response,next) {
            var url=request.url.split("/");
            if(url[1]=="current-time"){
            response.end((new Date()).toISOString());
            }
            next();
            }).use(serve_static(Path));
    app.listen(Port);
};
