import React from 'react'
import { connect } from 'react-redux'
import { wishlist, wishlistremove } from 'src/components/icons'

class ButtonWish extends React.Component {
  constructor (props) {
    super(props)
    this.addToWish = this.addToWish.bind(this)
    this.removeFromToWish = this.removeFromToWish.bind(this)
  }

  addToWish () {
    this.props.dispatch({type: 'ADD_WISH', payload: this.props})
  }

  removeFromToWish () {
    this.props.dispatch({type: 'REMOVE_WISH', payload: this.props})
  }

  inTheWish () {
    if (this.props.wish[this.props.id] && this.props.wish[this.props.id].qty > 0) {
      return (
        <button onClick={this.removeFromToWish} className="product__wishlist-button button button--round button--wishlist">{wishlistremove}</button>
      )
    }
    return (
      <button onClick={this.addToWish} className="product__wishlist-button button button--round button--wishlist">{wishlist}</button>
    )
  }

  render () {
    console.log('asdashdgjadhgajdgadgag')
    return this.inTheWish()
  }
}

ButtonWish.defaultProps = {
  wish: {}
}

const mapStateToProps = (state) => ({
  wish: state.wish
})

export default connect(mapStateToProps)(ButtonWish)
