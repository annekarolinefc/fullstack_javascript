import './App.css';
//import HelloWorld_af from './Hello';
import LoremIpsum from './components/lorem-ipsum';

//CRIANDO O COMPONENT
function HelloWorld(){
  return (
    <h1>Hello World!</h1>
  );
}

//importando o componente
function App() {
  return (
    <div>
      <HelloWorld/>
      <LoremIpsum />
    </div>
  );
}

export default App;
