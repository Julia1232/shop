import React, { Component } from 'react'
import files from './ImgComp'


export class ShowFullItem extends Component {


    render() {
        console.log(this.props.files)
        return (
            <div className='full-item'>
                <div>
                    <img alt={this.props.title} src={files[this.props.item.id - 1]} onClick={() => this.props.onShowItem(this.props.item)} />
                    <h2>{this.props.item.title} </h2>
                    <p>{this.props.item.desk}</p>
                    <b>{this.props.item.price}$</b>
                    <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
                </div>
            </div>
        )
    }
}

export default ShowFullItem
