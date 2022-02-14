import React,{useRef} from 'react'

function IncomeForm({income,setIncome}) {
    const desc=useRef(null);
    const date=useRef(null);
    const price=useRef(null); //to take the amount to be added as the expense

    const AddIncome=e=>{
        e.preventDefault();

        let d=date.current.value.split("-"); //slitting date with a heiphen
        let newD= new Date(d[0],d[1], d[2]);

        setIncome([...income,{
            "desc":desc.current.value,
            "price":price.current.value,
            "date":newD.getTime()
        }]);

        desc.current.value="";
        price.current.value=null;
        date.current.value=null;
    }
  return (
    <form className="income-form" onSubmit={AddIncome}>
    <div className='form-inner'>
        <input type="text" name="desc" id="desc" placeholder="Expense Description..." ref={desc}/>
        <input type="number" name="price" id="price" placeholder="Enter the Amount" ref={price}/>
        <input type="date" name="date" id="date" placeholder="Enter date of Expense.." ref={date}/>
        <input type="submit" value="Add Income"/>
    
    </div>

    </form>
  )
}

export default IncomeForm