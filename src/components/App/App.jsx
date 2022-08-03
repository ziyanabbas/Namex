import { render } from '@testing-library/react'
import React from 'react'
import Header from '../header/header'
import ResultsContainer from '../ResultsContainer/ResultsContainer'
import SearchBox from '../searchbox/SearchBox'
import './App.css'

const name = require('@rstacruz/startup-name-generator')


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            headerText :"Namex!",
            headerExpanded: true,
            suggestedNames:[]
        }
    }
    handleInputChange = (inputText)=>{
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name
            (inputText) :[],
        })
    }
    render(){
        return(
            <div>
                <Header 
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames}/>
            </div>
            
        )
    }
}

export default App
