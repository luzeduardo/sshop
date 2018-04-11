import React from 'react'
import products from 'public/products.json'
import Product from 'src/components/product'
import Pagination from 'src/components/pagination'
import Header from 'src/components/header'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      enabledItems: products,
      controledItems: []
    }

    this.onChangePage = this.onChangePage.bind(this)
  }

  onChangePage (controledItems) {
    this.setState({ controledItems: controledItems })
  }

  render () {
    return (
      <div>
        <header className="header container">
          <h1 className="page-title">BRAND</h1>
          <Header />
        </header>

        <main className="product-page">
          <div className="container">
            <ul className="product-list">
              { this.state.controledItems.map((item, i) => <Product key={i} product={item}/>) }
            </ul>

            <Pagination items={this.state.enabledItems} onChangePage={this.onChangePage}/>
          </div>
        </main>

        <footer className="container">
          <p className="footer__sidenote">Footer</p>
        </footer>
      </div>
    )
  }
}

export default App
