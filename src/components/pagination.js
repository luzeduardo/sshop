import React from 'react'
import PropTypes from 'prop-types'
import { arrowLeft, arrowRight } from 'src/components/icons'

const propTypes = {
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number
}

const defaultProps = {
  initialPage: 1
}

class Pagination extends React.Component {
  constructor (props) {
    super(props)
    this.state = { pager: {} }
  }

  componentWillMount () {
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage)
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage)
    }
  }

  setPage (page) {
    const items = this.props.items
    let pager = this.state.pager

    if (page < 1 || page > pager.totalPages) {
      return
    }

    pager = this.getPager(items.length, page)
    const controledItems = items.slice(pager.startIndex, pager.endIndex + 1)
    this.setState({ pager: pager })
    this.props.onChangePage(controledItems)
  }

  range (start, stop, step = 1) {
    return Array((stop - start) / step).fill(start).map((x, y) => x + y * step)
  }

  getPager (totalItems, currentPage, pageSize) {
    currentPage = currentPage || 1
    pageSize = pageSize || 6

    const totalPages = Math.ceil(totalItems / pageSize)

    let startPage, endPage
    if (totalPages <= 6) {
      startPage = 1
      endPage = totalPages
    } else {
      if (currentPage <= 4) {
        startPage = 1
        endPage = 6
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 5
        endPage = totalPages
      } else {
        startPage = currentPage - 3
        endPage = currentPage + 2
      }
    }

    var startIndex = (currentPage - 1) * pageSize
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)
    var pages = this.range(startPage, endPage + 1)

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    }
  }

  render () {
    const itemClassName = 'pagination__item'
    let pager = this.state.pager

    if (!pager.pages || pager.pages.length <= 1) {
      return null
    }

    return (
      <nav className="pagination">
        <ul className="pagination__list">
        
          <li className={pager.currentPage === 1 ? 'disabled' : '' + itemClassName}>
            <a className='pagination__link' onClick={() => this.setPage(pager.currentPage - 1)}>{arrowLeft}</a>
          </li>
          {pager.pages.map((page, index) =>
            <li key={index} className={pager.currentPage === page ? 'active' : '' + itemClassName}>
              <a className='pagination__link' onClick={() => this.setPage(page)}>{page}</a>
            </li>
          )}
          <li className={pager.currentPage === pager.totalPages ? 'disabled' : '' + itemClassName}>
            <a className='pagination__link' onClick={() => this.setPage(pager.currentPage + 1)}>{arrowRight}</a>
          </li>

        </ul>
      </nav>
    )
  }
}

Pagination.propTypes = propTypes
Pagination.defaultProps = defaultProps
export default Pagination
