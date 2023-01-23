import React from 'react'

import './App.css'
     
function InputsPage({handleInputChange, handleSubmit}) {
  
    return (
      <div>
        <div className="container">
          <form onSubmit={handleSubmit} method='POST'>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div>
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div>
              <input
                type="text"
                name="txt"
                placeholder="Txt"
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div>
              <button>
                Добавить данные
              </button>
              <br />
            </div>
          </form>
        </div>
      </div>
    );
  }
export default InputsPage;