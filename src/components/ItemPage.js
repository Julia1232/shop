import React, { Component } from 'react'
import files from './ImgComp'


export class item extends Component {




    render() {

        return (
            <div className='item'>
                <img src={files[this.props.item.id - 1]} alt={this.props.title} onClick={() => this.props.onShowItem(this.props.item)} />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desk}</p>
                <b>{this.props.item.price}$</b>
                <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
            </div>
        )
    }
}

export default item
