import Header from './components/HeaderPage';
import Categories from './components/Categories';
import React from 'react';
import Footer from './components/Footer';
import './App.css';
import data from './data.json';
import Items from './components/Items';
import ShowFullItem from './components/ShowFullItem';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      orders: [],
      currentItems: [],
      items: data,
      showFullItem: false,
      fullItem: {}
    }

    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
    const order = JSON.parse(localStorage.getItem('order'))
    this.state.orders = order;


  }





  render() {

    return (
      <div className="wrapper" >
        <Header orders={this.state.orders} onDelete={this.deleteOrder} onShowProfile={this.showProfile} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}></Items>
        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem} />}
        <Footer />

      </div>
    );
  }


  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })

  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) },

      () => { this.deleteOrderState() })
  }
  deleteOrderState() {
    localStorage.setItem('order', JSON.stringify(this.state.orders))

  }


  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true;
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] },
        () => {
          localStorage.setItem('order', JSON.stringify(this.state.orders))
        })
  }
}

export default App;
