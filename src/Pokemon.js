import React from 'react';

class Pokemon extends React.Component {

    render(props) {

        return (
            <li className="card">
                <div className="card__img">
                    <img alt="pokemon" src={this.props.item.photo} />
                </div>
                <h3 className="card__title">{this.props.item.name}</h3>
                <div >{this.props.item.types.map((item, index) => {
                    return <ul key={index}>
                        <li className="card__btn">
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