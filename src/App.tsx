import Message from "./Message"

function App(){

  const name = 'Rene';

  if(name){
  return <h1>hello {name}</h1>
  }else{
    return <h1>Main App</h1>
  }
}


export default App;