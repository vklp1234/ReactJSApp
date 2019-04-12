import React from 'react'
// function Greet(){
//     return <h2>Hello Krishnakant sir are you ......</h2>
// }
const Greet = (props) => {
    console.log(props);
     return <h2>Hello Krishnakant sir are you {props.name} ......</h2>
}  
export default Greet