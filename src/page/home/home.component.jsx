import React, { Component } from 'react';
import './home.style.css';

import Cards from './../../components/cards/cards.component';

class Home extends Component {

    constructor() {
        super();

        this.state = {
            toursList: [],
        }
    }

    componentDidMount() {
        fetch('https://course-api.com/react-tours-project')
            .then(response => response.json())
            .then(list => this.setState({toursList: list}));
    }

    render() {
        return (
            <div className="home">
                <div className="title">
                    <h1 className="head">Our Tours</h1>
                    {
                        this.state.toursList.map(({id, ...otherProperty}) => (
                            <Cards key={id} {...otherProperty}/>
                        ))
                    }
                </div>
                
            </div>
        );
    }
}

export default Home;