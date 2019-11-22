import React, { Component } from 'react'
import './Results.css';
import Img from 'react-image'
import Price from './Price'


class Results extends Component {

    


    render() {
        let stuff = this.props.data.items.map(function (stuff, index) {
            
            return (
                <div className='crop'>
                    <div>
                    {stuff.volumeInfo.title}
                    </div>
                    <div>
                    {stuff.volumeInfo.subtitle}   
                    </div>
                    <div>
                    {stuff.saleInfo.listPrice.amount}
                    </div>
                    <div>
                    {stuff.volumeInfo.authors}
                    </div>
                    <div>
                        {stuff.volumeInfo.subtitle}
                    </div>
                    <div>
                        <Img className='loud' src={stuff.volumeInfo.imageLinks.thumbnail}alt="bookimage"></Img>
                    </div>
                </div>
            )
        })
        console.log('test')
        console.log(this.props.data.items[0].volumeInfo.title)

        return (

            <div>
                {stuff}
            </div>
        )
    }


}

export default Results;