import { useState } from "react";
import { Link } from "react-router-dom";

function Details() {
  const [cart, setCart] = useState([])
  const [products] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 1,
      url:
        "https://images.ray-ban.com/is/image/RayBan/8053672000481__002.png?impolicy=RB_Product&width=1024&bgc=%23f2f2f2",
      cart: false,
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 2,
      url: "https://www.beverlyhillsmagazine.com/wp-content/uploads/Beverly-Hills-Magazine-8-Qualities-of-Good-Eyeglasses-min-768x479.jpg",
      cart: false,
      quantity: 1,
    },
    {
      id: 3,
      name: "Product 3",
      price: 3,
      url:
        "https://m.media-amazon.com/images/I/71st14k4NbL._UX679_.jpg",
      cart: false,
      quantity: 1,
    }
  ])
  function addtocart(item) {
    let cart2 = [...cart]
    cart2.push({ ...item })
    products.map((i) => {
      if (i.id == item.id) {
        i.cart = true
      }
    })
    setCart(cart2)

  }
  function removetocart(item) {
    let cart2 = cart.filter((i) => i.id != item.id)
    products.map((i) => {
      if (i.id == item.id) {
        i.cart = false
      }
    })
    setCart(cart2)

  }
  function increase(item) {
    let x = cart.map((i) => {

      if (item.id == i.id) {
        console.log('hola')
        i.quantity += 1
      }
      return i
    })
    setCart(x)

  }
  function decrease(item) {
    let x = cart.map((i) => {

      if (item.id == i.id && i.quantity > 1) {
        console.log('hola')
        i.quantity -= 1
      }
      return i
    })
    setCart(x)
  }
  function total() {
    let x = 0
    cart.map((i) => {
      x += i.price * i.quantity

    })
    return x
  }
  return (
    <div className='container mt-2'>

      <div className='row mt-3'>
        <table className="table  text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((i, index) => (

                < tr key={i.id}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">
                    <img src={i.url} style={{ width: '4rem' }} />
                  </th>
                  <td>{i.name}</td>
                  <td>
                    {i.price}
                  </td>
                  <td>
                    <button
                      onClick={() => decrease(i)}
                      className="btn btn-primary btn-sm"
                    >
                      -
                    </button>
                    {i.quantity}
                    <button
                      onClick={() => increase(i)}

                      className="btn btn-primary btn-sm"
                      size="sm"
                    >
                      +
                    </button>
                  </td>

                  <td>
                    <button onClick={() => removetocart(i)} className="btn btn-danger">
                      Remove
                    </button>
                  </td >
                </tr >
              ))
            }
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col text-center">
          <h4>TOTAL: {total()}</h4>
        </div>
      </div>
      <div class="text-right">
        <button type="button" class="btn btn-success" title="Checkout">
          <Link className="nav-link" to={'/Checkout'}>
            Checkout
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Details;
