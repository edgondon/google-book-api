import React, { Component } from 'react';
import Form from './Form'
import Results from './Results'
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            print: 'all',
            ebook: 'filter=free-ebooks',
            search: 'text here',

        };
    }

    textChange = (event) => {
        this.setState({search: event.target.value});
       
    }
    

    myChangeHandler = (event) => {
       
        this.setState({print: event.target.value});
        
      }

      myChangeHandler2 = (event) => {
        
        this.setState({ebook: event.target.value});
        
      }

    mySubmitHandler = (event) => {
        event.preventDefault();
        this.componentDidUpdate();
        
         fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&printType=${this.state.print}&${this.state.ebook}&key=AIzaSyBssP3Kjt5eSXYxMti1CH9lxZh8Me7S7uY`)
          .then(response => {
            console.log('About to check for errors');
            if(!response.ok) {
                console.log('An error did occur, let\'s throw an error.');
                throw new Error(response.statusText);
            }
            return response;
        })
        
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.list(data);
                
                
        })
        .catch(err => {
            console.log(err.message)
        })
      }


      componentDidUpdate() {
        console.log(this.state.print)
        console.log(this.state.ebook)
        console.log(this.state.search)
        console.log(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&printType=${this.state.print}&${this.state.ebook}&key=AIzaSyBssP3Kjt5eSXYxMti1CH9lxZh8Me7S7uY`)
        



      }

      componentDidMount() {
        console.log(this.state.print)
        console.log(this.state.ebook)
        console.log(this.state.search)
        
       


      }

      list = (data) => {

      }

    render() {
        return (
            <main className='App'>
                <div className='title'>
                    <h1 className='tut'>Google Book Search</h1>
                </div>
                <Form 
                myChangeHandler={this.myChangeHandler}
                myChangeHandler2={this.myChangeHandler2}
                state={this.state}
                mySubmitHandler={this.mySubmitHandler}
                textChange={this.textChange}
                />
                <Results list={this.list}/>
            </main>
        );
    }
}

export default App;