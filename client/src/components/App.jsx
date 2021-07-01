import React from 'react';
import GroceryList from './GroceryList.jsx';
import groceriesData from '../data/groceriesData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

   // create a state object to store groceries data and values from input forms

    this.state = {
      data: groceriesData,
      item: '',
      quantity: ''
    };

    this.updateItem = this.updateItem.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // create a function to handle changes to the item
  updateItem(event) {
    this.setState({item: event.target.value});
  }

  // create a function to handle changes to the quantity
  updateQuantity(event) {
    this.setState({quantity: event.target.value});
  }

  // create a function that handles clicks
  handleClick(event) {
    event.preventDefault();
    this.setState({
      // var newObject = {name:___, quantity:____};
      // data: this.state.groceriesData.concat(item);
      data: [{name: this.state.item, quantity: this.state.quantity}, ...this.state.data],
      item: '',
      quantity: ''
    })
  };
  // groceriesData: [...this.state.groceriesData, newItem]
  // groceriesData: [newItem, ...this.state.groceriesData]

  // create an event handler to trigger a state change

     // We can create our own methods.
  render() {
      // use our own methods with 'this....'
    return (
      <div>
        <img src="grocery-bags.png" />
        <h1>Grocery List</h1>
        <form>
          <label> Item
            <input name="item" value = {this.state.item} onChange = {this.updateItem}/>
          </label>
          <label> Quantity
            <input name="quantity" value = {this.state.quantity} onChange = {this.updateQuantity} />
          </label>
          <button onClick={this.handleClick}>Add Grocery</button>
        </form>
        <GroceryList groceriesData = {this.state.data}/>
      </div>
       // return the JSX
      )
  }
}


export default App;

// const App = () => (
//   <div>
//     <img src="grocery-bags.png" />
//     <h1>Grocery List</h1>
//     <form>
//       <label> Item
//         <input name="item" value="" />
//       </label>
//       <label> Quantity
//         <input name="quantity" value="" />
//       </label>
//       <button>Add Grocery</button>
//       <ul className="groceries">
//         <li>
//           <span>apples - </span>
//           <span>4</span>
//         </li>
//         <li>
//           <span>bread - </span>
//           <span>2</span>
//         </li>
//         <li>
//           <span>etc...</span>
//         </li>
//       </ul>
//     </form>
//   </div>
// );
