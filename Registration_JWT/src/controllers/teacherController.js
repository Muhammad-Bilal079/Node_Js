

let teacherController = (req,res)=>{
    res.status(200).json({
        msg:"ok",
        myEmail:req.email,
        myrole:req.role
    })
}


export default teacherController