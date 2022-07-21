import './App.css';
import Array from './components/Array';
import ArrayOfObject from './components/ArrayOfObject';
import Objects from './components/Objects';
import Users from './components/Users';


const family = {
  name: "rpkeya islam",
  role: 1,
  country: "bangladesh",
  languages:["arabik","hindi"]
  
}

const users = [
  { name: "rpkeya islam",
  role: 1,
  country: "bangladesh",
  languages:["arabik","hindi"],
},
  { name: "kabir islam",
  role: 2,
  country: "bangladesh",
  languages:["arabik","hindi"],
},
  { name: "rakib islam",
  role: 3,
  country: "bangladesh",
  languages:["arabik","hindi"],
},
]
function App() {
  return (
    <div className="App">
      <h2>my class 3 of typescript</h2>
      <Users name="faiz ullah" age={23} isStudent={false} role={2} />
      <Array lang={["bangla ", "english"]} />
      <Objects family={family} />
      <ArrayOfObject users={ users} />
    </div>
  );
}

export default App;
