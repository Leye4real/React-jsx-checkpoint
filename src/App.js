import Card from 'react-bootstrap/Card';
import './App.css';
import Description from './components/Description';
import Image from './components/Image';
import Name from './components/Name';
import Price from './components/Price';

const firstName = "";

function App() {
  return (
    <div className="App">
      <Card>
        <Card.Body>
      <Name/>
      <Image/>
      <Description/>
      <Price/>
      </Card.Body>
      </Card>
      <p>Hello {firstName? firstName: "There"}</p>
      {firstName? <Image/>: ""}
    </div>
  );

}



export default App;
