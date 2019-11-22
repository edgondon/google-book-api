import React, { Component } from 'react'
import './Results.css';


class Price extends Component {



    render() {
      

        return (

            <div>
                {this.props.state.data.items.saleInfo.listPrice.amount}
            </div>
        )
    }


}

export default Price;