import React from 'react'
const Hello = () =>{
    // return(
    //     <div>
    //         <h2>Hey I am Veer</h2>
    //     </div>
    // )
    return React.createElement('div',{id:'hello',className:'root'},React.createElement('h1',null,'Hello welcome in my show'))
}
export default Hello