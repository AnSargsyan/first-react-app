import logo from './logo.svg';
import './App.css';

const RECORDS = [
  {name: 'Ani'},
  {name: 'James'}
]

const MyRow = ({myVal}) => {
  return (
    <tr>
      <td>NAME</td><td>{myVal.name}</td>
    </tr>
  )
}
const MyComp = ({record}) => {

  const result = record.map(myObject => {
    return (
        <MyRow myVal={myObject} key={myObject.name} />
    )
  })
  return (
    
      <table>
      {
        result
      }
      </table>
    
  )
}

function App() {
  return (
    <div className="App">
      
      <MyComp record={RECORDS} />
    </div>
  );
}

export default App;
