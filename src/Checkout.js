import { useAlert } from "react-alert";
import { Link } from "react-router-dom";

function Checkout() {
    const alert = useAlert();
    return (
        <main class="page payment-page">
            <section class="payment-form dark">
                <div class="container">
                    <div class="block-heading">
                        <h2>Payment</h2>
                    </div>
                    <form>
                        <div class="products">
                            <h3 class="title">Checkout</h3>
                            <div class="item">
                                You have {2} items in your cart !
                            </div>
                            <div class="total"><h6>TOTAL: 55$</h6></div>
                        </div>
                        <div class="card-details">
                            <h6 class="title">Delivery Address</h6>
                            <div class="row">
                                <div class="form-group col-sm-5">
                                    <input type="text" class="form-control" placeholder="Address Line 1" aria-label="Address Line 1" aria-describedby="basic-addon1"></input>
                                </div>
                                <div class="form-group col-sm-5">
                                    <input type="text" class="form-control" placeholder="Address Line 2" aria-label="Address Line 2" aria-describedby="basic-addon1"></input>
                                </div>
                            </div>
                            <h6 class="title card-details-paddding">Card Details</h6>
                            <div class="row">
                                <div class="form-group col-sm-5">
                                    <label for="card-holder">Card Holder</label>
                                    <input id="card-holder" type="text" class="form-control" placeholder="Card Holder" aria-label="Card Holder" aria-describedby="basic-addon1"></input>
                                </div>
                                <div class="form-group col-sm-5">
                                    <label for="">Expiration Date</label>
                                    <div class="input-group expiration-date">
                                        <input type="text" class="form-control" placeholder="MM" aria-label="MM" aria-describedby="basic-addon1"></input>
                                        <span class="date-separator">/</span>
                                        <input type="text" class="form-control" placeholder="YY" aria-label="YY" aria-describedby="basic-addon1"></input>
                                    </div>
                                </div>
                                <div class="form-group col-sm-5">
                                    <label for="card-number">Card Number</label>
                                    <input id="card-number" type="text" class="form-control" placeholder="Card Number" aria-label="Card Holder" aria-describedby="basic-addon1"></input>
                                </div>
                                <div class="form-group col-sm-5">
                                    <label for="cvc">CVV</label>
                                    <input id="cvc" type="text" class="form-control" placeholder="CVV" aria-label="Card Holder" aria-describedby="basic-addon1"></input>
                                </div>
                                <div class="form-group col-sm-12">
                                    <button type="button" class="btn btn-success" onClick={() => alert.success("You have Ordered Successfully!")}>Proceed  <Link className="nav-link" to={'/Shop'}></Link></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Checkout;
