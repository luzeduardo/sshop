export default (state = {}, { type, payload = {} }) => {
  const {id, price, priceDiscounted} = payload
  const mutation = (node, id, qty) => {
    let nQty = 1
    if (state[node][id]) {
      nQty = (state[node][id]['qty'] + qty)
    }

    const triggerKey = `${id}:${nQty}`
    const newNodeQty = {
      [node]: {
        [id]: {
          qty: nQty,
          price,
          priceDiscounted
        }
      }
    }
    const newData = {...state[node], ...newNodeQty[node]}
    let newInnerData = {
      [node]: Object.assign({}, state[node], newData)
    }
    return Object.assign({triggerKey}, state, newInnerData)
  }

  switch (type) {
    case 'ADD_WISH':
      return mutation('wish', id, 1)
    case 'REMOVE_WISH':
      return mutation('wish', id, -1)
    case 'ADD_CART':
      return mutation('cart', id, 1)
    case 'REMOVE_CART':
      return mutation('cart', id, -1)
    default:
      return state
  }
}
