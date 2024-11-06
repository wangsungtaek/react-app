// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header(props) {
  return(
    <h1>
      <a href='/' onClick={(event) => {
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a>
    </h1>
  )
}
function Nav(props) {
  const lis = []
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a id={t.id} href={'/read/'+t.id} onClick={event => {
          event.preventDefault();
          props.onChangeMode(event.target.id);
        }}>{t.title}</a>
      </li>
    )
  }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}
function Article(props) {
  return (
    <article>
      <h2>
        {props.title}
      </h2>
      {props.body}
    </article>
  )
}

function App() {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("WELCOME");
  const [body, setBody] = useState("Hello, WEB!!");
  
  if(id === 0){
    setTitle("WELCOME");
    setBody("Hello, WEB!!");
  } else if(id === 1) {
    setTitle("HTML");
    setBody("Hello, HTML!!");
  } else if(id === 2) {
    setTitle("CSS");
    setBody("Hello, CSS!!");
  } else {
    setTitle("JAVASCRIPT");
    setBody("Hello, JAVASCRIPT!!");
  }

  const topics = [
    {id: 1, title: 'html', body: 'html is ...'},
    {id: 2, title: 'css', body: 'css is ...'},
    {id: 3, title: 'javascript', body: 'javascript is ...'},
  ]
  return (
    <div className="App">
      <Header title="REACT" onChangeMode={() => {
        setId(0);
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id) => {
        setId(_id);
      }}></Nav>
      <Article title={title} body={body}></Article>
    </div>
  );
}

export default App;
