const logger=(req,res,next)=>{
    const st=new Date();
    const  timestamp=st.toLocaleDateString();

    const meth=req.method;
    const url=req.url;

    res.on('finish',()=>{
        const et=new Date();
        const duration=et-st;
        const statusCode=res.statusCode;
        console.log(`[${timestamp}] ${method} ${url}- Status: ${statusCode} (${duration}ms)`);
    });
    next();
};

module.exports=logger;
