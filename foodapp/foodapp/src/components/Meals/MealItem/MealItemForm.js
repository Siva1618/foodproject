import {useRef,useState} from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = (props) => {
  const [amountIsValid,setAmountIsValid] = useState();
  const amountInputUseRef = useRef();
 
  const submitHandler = event =>{
    event.preventDefault();
    const eneterdAmount = amountInputUseRef.current.value;
    const eneterdAmountNumber = +eneterdAmount;
    if(eneterdAmount.trim().length === 0 || eneterdAmountNumber < 1 || eneterdAmountNumber > 5){
      setAmountIsValid(false);
      return;
      props.onAddToCart(eneterdAmountNumber);
    }
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input 
        ref = {amountInputUseRef}
        label="Amount" 
        input=
        {{
            id:'amount',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            deafaultValue:'1'

    }}/>
        <button>+ Add</button>
        {!amountIsValid && <p>enter a valid amount(1-5).</p>}
    </form>
  )
}

export default MealItemForm
