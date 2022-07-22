import './App.css';
import Button from './components/Button';
import DataFeatch from './components/DataFeatch';
import Item from './components/Item';
import Post from './components/Post';
import Repost from './components/Repost';
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
      {/* <Array lang={["bangla ", "english"]} /> */}
      {/* <Objects family={family} /> */}

      <DataFeatch status="success" />
      <Button>click me</Button>
      <Post></Post>
      <Repost />
      <Item/>
      {/* <ArrayOfObject users={ users} /> */}
    </div>
  );
}

export default App;
