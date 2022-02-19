import './App.css';
import React, {useState} from 'react';

function App() {
  const[firstname,setFirstName]=useState("");
  const[lastname,setLastName]=useState("");
  const[names,setNames]=useState([]);

  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(firstname,lastname);
    const data={firstname,lastname}
  
    if(firstname&&lastname) {
      setNames((nms)=>[...nms,data])
      setFirstName("")
      setLastName("")

    }
  }

  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit={handlesubmit}>
      <div className='inputs'>
        <label>First Name :
        <input type="text"
        name="firstname" 
        value={firstname}
        onChange={e => setFirstName(e.target.value)}
        style={{marginLeft: "5px"}} />
        
        
        </label> 
        <label>Last Name :
        <input type="text"
        value={lastname}
        onChange={e => setLastName(e.target.value)} 
        style={{marginLeft: "5px"}} />
        </label>
        </div>
         <button style={{marginBottom: "5px"}} ><strong>Submit</strong></button>
      </form>

         <div>
          <table>
          <thead>
           <tr>
             <th>First Name</th>
             <th>Last Name</th>
            </tr>
            </thead>
          </table>
          
          </div>
          {
          names.map((value)=><div>
            
            <table>
              <tbody>
              <tr>
              <td>{value.firstname}</td>
              <td>{value.lastname}</td>
              </tr>  
              </tbody>
            </table>
            
             </div>

          )
         
        }
      </header>
    </div>
  );
}

export default App;
