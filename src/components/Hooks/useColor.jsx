import React from 'react'

const useColor = () => {


const variarColor = (stock) =>{

if (stock <= 2){
    return 'Red'
}else if(stock >= 3 && stock <= 7){
    return 'Orange'
}else{
return 'Green'

}
}


  return {variarColor}
    




}

export default useColor