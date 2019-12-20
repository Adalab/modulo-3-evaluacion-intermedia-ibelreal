import React from 'react';
import './App.scss';
import PokeList from './PokeList';
import Pokemon from './Pokemon';
import apiData from './api.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: apiData }
  }

  render() {
    return (
      <main>
        <h2 className="title">
          Mi Lista de Pokemon
          </h2>
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
