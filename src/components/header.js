import React from 'react'
import { connect } from 'react-redux'
import { bag, wishlist } from 'src/components/icons'

class Header extends React.PureComponent {
  reduceAndSumQty (index) {
    return Object.values(this.props[index]).reduce(
      (prior, current) => {
        return prior + parseInt(current.qty, 10)
      }, 0)
  }

  getQtyCart () {
    return this.reduceAndSumQty('cart')      
  }

  getQtyWish () {
    return this.reduceAndSumQty('wish')
  }

  getCartValue () {
    return Object.values(this.props.cart).reduce(
      (prior, current) => {
        const price = parseInt(current.priceDiscounted, 10) || parseInt(current.price, 10)
        return prior + (parseInt(current.qty, 10) * price)
      }, 0)
  }
  render () {
    return (
      <aside className="header-bag">
        <div className="header-bag__item header-bag__count">
          <div className="header-bag__price">£{this.getCartValue()}</div>
          {bag}
          <span className="bag__item-counter">{this.getQtyCart()}</span>
        </div>
        <div className="header-bag__item header-bag__wishlist-count">
          {wishlist}
          <span className="bag__item-counter">{this.getQtyWish()}</span>
        </div>
      </aside>
    )
  }
}

Header.defaultProps = {
  wish: {},
  cart: {}
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  wish: state.wish
})

export default connect(mapStateToProps)(Header)
