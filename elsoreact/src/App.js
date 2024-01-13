import "./App.css";
import { list } from "./model/Datas";
import Card from "./components/Card";

// ctrl + ,
// emmet -> include -> javascript - javascriptreact

// jsx a namee
// html, komponens, js kódok
// komponens: kezdő nagybetű, return(), egyetlen egy root elemje van
// üres gyökérelem: react fragment <></>

function App() {
  function myClick(id) {
    console.log(list[id-1]);
  }

  let name = "Dóra";
  return (
    <div className="App">
      <header className="App-header">
        <h1>Első React Projekt</h1>
      </header>
      <article className="row">
        {list.map((elem, index) => {
          return <Card obj={elem} key={index} myClick={myClick}></Card>;
        })}

        <p>Ez itt a tartalom helye</p>
        <p>Szia {name}!</p>
      </article>
    </div>
  );
}

export default App;
