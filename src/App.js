import { useEffect, useState } from 'react';
import './App.css';
import Rutas from './routes/Rutas';
import './styles/style.css';
import {db} from './firebase.config'
import { collection, getDocs } from 'firebase/firestore';




function App() {

  const [prod,setProd] = useState([])
  const [load,setLoad]= useState(false)

useEffect(() => {

  const getProd = async ()=>{

    setLoad(true)
    try{

const col = collection(db,"Bebidas")
const data = await getDocs(col)
const docs = data.docs.map(doc => doc={ id:doc.id, ...doc.data()}) 

    }catch(error){

  }
}
getProd()
}, [])



  return (
    
    <div className="App">
     
      <Rutas/>
      
      
    </div>
    
  
  );
}

export default App;
