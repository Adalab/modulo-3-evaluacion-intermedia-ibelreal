import React from 'react';
import './App.scss';
import PokeList from './PokeList';
import Pokemon from './Pokemon';
import apiData from './api.json';

console.log(apiData);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: apiData }
  }

  render() {
    return (
      <main>
        {/* <h1 className="App">Mi lista de Pokemon</h1>
        {JSON.stringify(this.state.data)}
        {/* <ul>
          <li>
            <div>
              {/* <img src={this.state.data.url} /> */}
        {/* </div> */}
        {/* {this.state.data.name}
        <p>{this.state.data.types}</p> */}
        {/* </li >
        </ul > * /} */}
        <PokeList>
          {this.state.data.map((item, index) => {
            return <Pokemon key={index}
              item={
                {
                  name: item.name,
                  photo: item.url,
                  types: [...item.types]
                }

              } />
          })}
        </PokeList>
      </main >
    );
  }
}

export default App;
