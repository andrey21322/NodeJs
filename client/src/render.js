import React from 'react'

import './App.css'

function Render({data, removeItem}) {
    return (
      <>
         {data.length === 0 ?
          <div className='render'  onClick={() => console.log(data)} >log data</div>
          :
          data.map((item, key) => {
          return  <p key={key}>
                    <span>Name: {item.name}</span>
                    <span>Surname: {item.surname}</span> 
                    <button onClick={removeItem('say hi')}>УДАЛИТЬ</button>
                  </p>    
          })}
      </>
    )
  }

export default Render
