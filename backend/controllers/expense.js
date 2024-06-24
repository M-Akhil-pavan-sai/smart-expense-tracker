const ExpenseSchema = require('../models/ExpenseModel')
exports.addExpense = async (req,res)=>{
    const {title,amount,category,description,date} = req.body;

    //mapping request body data with schema 
    const expense = ExpenseSchema({
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
                await expense.save()
                res.status(200).json({message:"Expense Added Successfully!"})
    }catch(e){
        res.status(500).json({message:"Something Went Wrong While Adding Expense"})
    }
    console.log("Here is the data present in request body: ",expense)
}

exports.getExpenses = async(req,res)=>{
    try{
        const expenses  = await ExpenseSchema.find().sort({createdAt:-1})
        res.status(200).json(expenses)
    }
    catch(e){
        res.status(500).json({message:"Something Went Wrong While Fetching Expenses"})
    }
}

exports.deleteExpense = async(req,res)=>{
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id).then(()=>{
        res.status(200).json({message:"Expense Deleted"})
    })
    .catch((e)=>{
        res.status(500).json({message:"Something Went Wrong While Deleting Expense"})
    })
}