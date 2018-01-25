import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';

class SearchContainer extends Component {
    state = {
        value: 'Luis Fonsi'
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.input.value, 'submit')
        this.props.dispatch({ //se accede gracias a connect
            type: 'SEARCH_VIDEO',
            payload: {
                query: this.input.value
            }
        })
    }

    handleChange = event => {
        this.setState({
            value: event.target.value.replace(' ', '-')
        })
    }

    setInputRef = element => {
        this.input = element
    }

    render() {
        return (
            <Search 
                setRef={this.setInputRef}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                value={this.state.value}
            />
        )
    }
}

export default connect()(SearchContainer);