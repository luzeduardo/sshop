import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'src/store'
import 'public/main.css'
import App from './App'

const store = configureStore()

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
ReactDOM.render(
  <Root />,
  document.getElementById('app')
)
