const addToDb = id => {
    let shoppingCart = {}
  
    const storedCart = localStorage.getItem('apply-job')
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart)
    }
  
    const quantity = shoppingCart[id]
    if (quantity) {
      const newQuantity = quantity + 1
      shoppingCart[id] = newQuantity
    } else {
      shoppingCart[id] = 1
    }
    localStorage.setItem('apply-job', JSON.stringify(shoppingCart))
  };

  export default addToDb;