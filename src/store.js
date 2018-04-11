import {createStore, compose} from 'redux'
import checkout from 'src/reducer/checkout'

export default function configureStore (initialState = {
  wish: {},
  cart: {}
}) {
  const store = createStore(checkout, initialState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
  return store
}
