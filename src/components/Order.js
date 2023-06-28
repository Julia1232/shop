import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'
import files from './ImgComp'

export class Order extends Component {
    render() {
        return (
            <div className='item'>
                <img alt={this.props.title} src={files[this.props.item.id - 1]} />
                <h2>{this.props.item.title}</h2>
                <b>{this.props.item.price}$</b>
                <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} />
            </div>
        )
    }
}

export default Order
