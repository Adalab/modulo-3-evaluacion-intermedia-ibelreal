import React from 'react';

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(props) {
        console.log(...this.props.item.types);
        return (
            <li>
                <div>
                    <img alt="pokemon" src={this.props.item.photo} />
                </div>
                <h3>{this.props.item.name}</h3>
                <div>{this.props.item.types.map((item, index) => {
                    return <ul key={index}>

                        <li>

                            {item}
                        </li>
                    </ul>
                })}
                </div>
            </li>
        );
    }
}

export default Pokemon;