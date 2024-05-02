// data ko querry string kay through lia hai or middle ware say travel kar kay call back
//  function kay through dubara response send kia hai 


let MWFn = function(req,res,next){
    console.log(req.query);

    // yeah for in loop ka method hai 
    // for (key in object) {
    //     // code block to be executed
    //   }

    let fullDetail = ""
    for(let k in req.query){
        // console.log(req.query[k]);
        fullDetail += req.query[k] + ' '
       
    }
    req.query  ={fullDetail}
    console.log(fullDetail);


    next()
}


export{
    MWFn
}