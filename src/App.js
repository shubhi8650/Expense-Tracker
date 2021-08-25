
import { createContext, useReducer } from 'react';
import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Heading from './components/Heading';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';


const GlobalState = createContext()

const initialState = {

  transactions:[]
}
// actions
const reducer = (state, action)=>{
  switch(action.type){
    case 'DELETE_TRANSACTION':
      return{
        ...state,
        transactions: state.transactions.filter(trans=> (trans.id !== action.payload))
      }
    case 'ADD_TRANSACTION':
      return{
        ...state,
        transactions:[action.payload, ...state.transactions]
      }  
    default:
      return state
  }
}



function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  //Aeleting a Transaction
  function deleteTransaction(id){
    
    dispatch({
      type:'DELETE_TRANSACTION',
      payload: id
    });
  }
  // Adding a transaction
  function addTransaction(transaction){
    
    dispatch({
      type:'ADD_TRANSACTION',
      payload: transaction
    });
  }
  return (

    <GlobalState.Provider value={{
      transaction: state.transactions, 
      deleteTransaction,
      addTransaction
      }}>
        <div className="App">
            <Heading/>
            <Balance/>
            <IncomeExpense/>
            <TransactionList/>
            <AddTransaction/>
        </div>
    </GlobalState.Provider>
      
    
  );
}

export default App;

export {GlobalState};
