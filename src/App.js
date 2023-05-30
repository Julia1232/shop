import Header from './components/Header';
import Categories from './components/Categories';
import React from 'react';
import Footer from './components/Footer';
import './App.css';
import Items from './components/Items';
import ShowFullItem from './components/ShowFullItem';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'White table',
          img: 'столик_3.jpg',
          desk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius rhoncus mi, in ultricies lacus ultricies pharetra.',
          category: 'tables',
          price: '59.99'
        },
        {
          id: 2,
          title: 'Gold table',
          img: 'столик.jpg',
          desk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius rhoncus mi, in ultricies lacus ultricies pharetra.',
          category: 'tables',
          price: '69.99'
        },
        {
          id: 3,
          title: 'Dark table',
          img: 'столик_2.jpg',
          desk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius rhoncus mi, in ultricies lacus ultricies pharetra.',
          category: 'tables',
          price: '45.99'
        },
        {
          id: 4,
          title: 'Mirror',
          img: 'зеркало.jpg',
          desk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius rhoncus mi, in ultricies lacus ultricies pharetra.',
          category: 'mirror',
          price: '15.99'
        },
        {
          id: 5,
          title: 'Decorations gold',
          img: 'украшения.jpg',
          desk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius rhoncus mi, in ultricies lacus ultricies pharetra.',
          category: 'decorations',
          price: '59.99'
        },
        {
          id: 6,
          title: 'Decorations gold',
          img: 'украшения_2.jpg',
          desk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius rhoncus mi, in ultricies lacus ultricies pharetra.',
          category: 'decorations',
          price: '59.99'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {

    return (
      <div className="wrapper" >
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
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
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })

  }
}

export default App;
