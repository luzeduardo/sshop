import React from 'react'
import { connect } from 'react-redux'

class ButtonCart extends React.Component {
  constructor (props) {
    super(props)
    this.addToCart = this.addToCart.bind(this)
  }

  addToCart () {
    this.props.dispatch({type: 'ADD_CART', payload: this.props})
  }

  inTheCart () {
    if (this.props.cart[this.props.id] && this.props.cart[this.props.id].qty > 0) {
      return (
        <button className="product__add-to-cart button button--primary button--in-cart" onClick={this.addToCart}>In Cart</button>
      )
    }
    return (
      <button className="product__add-to-cart button button--primary" onClick={this.addToCart}>Add to Cart</button>
    )
  }

  render () {
    return this.inTheCart()
    // <button onClick={this.addToCart.bind(this)}>{this.props.id} - In Cart</button>
    // <button onClick={this.addToCart} className="product__add-to-cart button button--primary">Add to Cart</button>
    // <button className="product__remove-from-cart button button--primary">Remove from Cart</button>
  }
}

ButtonCart.defaultProps = {
  cart: {}
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

export default connect(mapStateToProps)(ButtonCart)
