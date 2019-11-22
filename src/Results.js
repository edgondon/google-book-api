import React, { Component } from 'react'
import './Results.css';
import Img from 'react-image'
import Price from './Price'


class Results extends Component {

    


    render() {
        let hit = this.props.state.ebook
        let stuff = this.props.data.items.map(function (stuff, index) {
            if (hit == "filter=paid-ebooks") {
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
                </div>)}
             else {   
            return (
                <div className='crop'>
                    <div>
                    {stuff.volumeInfo.title}
                    </div>
                    <div>
                    {stuff.volumeInfo.subtitle}   
                    </div>
                    <div>
                    Price is Free!
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
            )}
        })
        console.log('test')
        console.log(this.props.state.ebook)

        return (

            <div>
                {stuff}
            </div>
        )
    }


}

export default Results;