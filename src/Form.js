import React, { Component } from 'react'
import './Form.css';


class Form extends Component {
    render() {

        return (
            <form onSubmit={this.props.mySubmitHandler} >
                <p className='linea'>Search: <input type="text" onChange={this.props.textChange} id="myForm" required placeholder="text here"></input><input type="submit" value="Submit" ></input></p>
                <div className='lineb'>
                    <div>Print Type: &nbsp;
                        <select value={this.props.state.print} onChange={this.props.myChangeHandler}>
                            <option value="all" defaultValue>All</option>
                            <option value="books">Books</option>
                            <option value="magazines">Magazines</option>
                        </select>
                    </div>
                    <div className='type'>Book Type: &nbsp;
                        <select value={this.props.state.ebook} onChange={this.props.myChangeHandler2}>
                            <option value="">None</option>
                            <option value="filter=free-ebooks">Free E-books</option>
                            <option value="filter=paid-ebooks">Pay E-books</option>
                        </select>

                    </div>
                </div>

            </form>
        )
    }
}

export default Form;