const IncomeSchema = require('../models/IncomeModel')
exports.addIncome = async (req,res)=>{
    const {title,amount,category,description,date} = req.body;

    //mapping request body data with schema 
    const income = IncomeSchema({
    title,
    amount,
    category,
    description,
    date
    })
    
    //validating the received data
    try{
        if(!title || !category || !description || !date)
            {
                return res.status(400).json({message:"Some Of The Required Fields Are Missing!"})
            }
            if(amount<=0 || !amount==='number')
                {
                    return res.status(400).json({message:"Amount Data Should Be Positive Value"})
                }
                await income.save()
                res.status(200).json({message:"Income Added Successfully!"})
    }catch(e){
        res.status(500).json({message:"Something Went Wrong While Adding Income"})
    }
    console.log("Here is the data present in request body: ",income)
}

exports.getIncomes = async(req,res)=>{
    try{
        const incomes  = await IncomeSchema.find().sort({createdAt:-1})
        res.status(200).json(incomes)
    }
    catch(e){
        res.status(500).json({message:"Something Went Wrong While Fetching Incomes"})
    }
}

exports.deleteIncome = async(req,res)=>{
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id).then(()=>{
        res.status(200).json({message:"Income Deleted"})
    })
    .catch((e)=>{
        res.status(500).json({message:"Something Went Wrong While Deleting Income"})
    })
}