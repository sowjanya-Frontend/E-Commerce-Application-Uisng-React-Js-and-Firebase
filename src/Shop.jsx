import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './store/cart';
import { Link } from "react-router-dom";
import img1 from './Images/ban1.jpg';
import img2 from './Images/ban2.jpg';
import img3 from './Images/ban3.jpg';
import img4 from './Images/ban4.jpg';
import img5 from './Images/img4.jpg';
import img6 from './Images/img6.png';
import img7 from './Images/img3.jpg';


function Shop() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const [cart, setCart] = useState([])
  const [products] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 1,
      url: img1,
      cart: false,
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 2,
      url: img2,
      cart: false,
      quantity: 1,
    },
    {
      id: 3,
      name: "Product 3",
      price: 3,
      url: img3,
      cart: false,
      quantity: 1,
    },
    {
      id: 4,
      name: "Product 4",
      price: 4,
      url: img4,
      cart: false,
      quantity: 1,
    },
    {
      id: 5,
      name: "Product 5",
      price: 5,
      url: img5,
      cart: false,
      quantity: 1,
    },
    {
      id: 6,
      name: "Product 6",
      price: 6,
      url: img6,
      cart: false,
      quantity: 1,
    },
    {
      id: 7,
      name: "Product 7",
      price: 7,
      url: img7,
      cart: false,
      quantity: 1,
    },
    {
      id: 8,
      name: "Product 8",
      price: 8,
      url: img3,
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
    dispatch(increment())
  }

  function removetocart(item) {

    let cart2 = cart.filter((i) => i.id != item.id)
    products.map((i) => {
      if (i.id == item.id) {
        i.cart = false
      }
    })
    setCart(cart2)
    dispatch(decrement())
  }
  function increase(item) {
    let x = cart.map((i) => {

      if (item.id == i.id) {
        i.quantity += 1
      }
      return i
    })
    setCart(x)

  }
  function decrease(item) {
    let x = cart.map((i) => {

      if (item.id == i.id && i.quantity > 1) {
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
    <React.Fragment>
      <div className='mt-2 card-list p-15'>
        <div className='row card-first-row'>
          {products.map((item) => (
            <div className='col-3' key={item.id}>
              <div className="card"  >
                <img src={item.url} className="card-img-top" />
                <div className="card-body">
                  <h6 className="card-title">
                    {item.name} - $ {item.price}
                  </h6>
                  {
                    item.cart == false
                    &&
                    <button className='btn btn-primary' onClick={() => addtocart(item)}>
                      Add to cart
                    </button>
                  }
                  {
                    item.cart == true
                    &&
                    <button className='btn btn-success' onClick={() => addtocart(item)}>
                      Add to cart
                    </button>
                  }
                </div>
              </div>
            </div>

          ))}

        </div>

        <div className='row mt-3 card-second-row'>
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
      </div>
      <div className='mt-2 card-grid p-15'>

        <div className="row align-css">
          <div className="col">
            <h4>TOTAL: {total()}</h4>
          </div>
        </div>
        <div class="align-css">
          <button type="button" class="btn btn-success" title="Checkout">
            <Link className="nav-link" to={'/Checkout'}>
              Checkout
            </Link>
          </button>
        </div>

      </div >
    </React.Fragment>
  );
}

export default Shop;
