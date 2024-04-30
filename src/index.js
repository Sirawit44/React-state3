import React from 'react';
import ReactDOM from 'react-dom/client';

// problem1
// function App (){
//   const [dollar,setDollar] = React.useState('');
  
//   const convert = (event)=> {setDollar(event.target.value)};

//   return (
//     <>
//     <div>
//       <label>Enter Dollar:</label>
//       <input type='number' onChange={convert}/>
//     </div>
//       <p>Convert to THB: {dollar*30}</p>
//     </>
//   )
// }

// problem2

// function App(){

//   const [phoneNum, setPhoneNum] = React.useState(0)

//   const handlePhone = (event) => {setPhoneNum(event.target.value)}
//   const handleSumbit = (event) => {
//     if (phoneNum.trim() === ''){
//        = 'Phone Number is required'
      
//     }
//     else if (isNaN(value)){
//        = 'Phone Number is Invalid'
      
//     }
//     else if (phoneNum.Num.length !== 10){
//        = 'Invalid length'
//     }
//     else{
//       alert('Your number is valid')
//     }
//   }

//   return(
//     <>
//     <form onSubmit={handleSumbit}>
//       <input type='text' placeholder='Phone Number' onChange={phoneNum}></input>
//       <button onClick={handlePhone}>Check</button>
//       <p>dmd</p>
//     </form>
//     </>
//   )
// }


// Problem 3

function App(){

  const handleCheck = (event) =>{
    console.log(event.target.name)
    console.log(event.target.value)
    console.log(event.target.checked)

  }

  return (
    <>
    <input 
      type ='checkbox'
      name = 'PhoneBrand'
      id ='Phone-1'
      value= 'IPHONE'
      onChange={handleCheck}
    />
    <label htmlFor ='phone-1'>Samsung</label>
    <br />
    <input 
      type ='checkbox'
      name = 'PhoneBrand'
      id ='Phone-2'
      value= 'IPHONE'
      onChange={handleCheck}
    />
    <label htmlFor ='phone-1'>Iphone</label>
    <br />
    <input 
      type ='checkbox'
      name = 'PhoneBrand'
      id ='Phone-3'
      value= 'IPHONE'
      onChange={handleCheck}
    />
    <label htmlFor ='phone-1'>Oppo</label>
    <br />
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

