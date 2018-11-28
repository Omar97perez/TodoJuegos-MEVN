<template>
  <div class="container-fluid">
    <div class="shopping-cart">
        <div class="cart-tittle">
            Carrito
        </div>

        <!--Producto-->
        <ul>
            <div class="item">
                <div class="image">
                    <img class="product-img" src="img/fifa19.jpg" alt="" />
                </div>

                <div class="description">
                    <span>Fifa 19</span>
                    <span>Normal edition</span>
                    <span>39,99€</span>
                </div>

                <div class="quantity">
                    <button class="plus-btn" type="button" name="button">
                      <img src="img/plus.svg" alt="" />
                    </button>
                    <input type="text" name="name" value="1">
                    <button class="minus-btn" type="button" name="button">
                        <img src="img/minus.svg" alt="" />
                    </button>
                </div>

                <div class="total-price">39,99€</div>
                <div class="delete-btn">
                    <img src="img/delete-icn.svg" alt="">
                </div>
            </div>
        </ul>
        <!--Fin de producto-->
        <div class="cart-tittle">
            Precio total: 39,99€
            <a href="#">
                <input type="button" value="Comprar" class="btn btn-dark btn-lg buy-btn" data-toggle="collapse" data-target="#card-pay"/>
            </a>
        </div>

        <!--Desplegable del pago con tarjeta-->
        <div class="container">
            <div class="row">
                <div class="collapse col-xs-12 col-md-4" id="card-pay">
                    <div class="panel panel-default credit-card-box">
                        <div class="panel-heading display-table">
                            <div class="row display-tr">
                                <h3 class="panel-tittle display-td">Detalles de pago</h3>
                                <div class="display-td" >
                                    <img class="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png">
                                </div>
                            </div>
                        </div>

                        <div class="panel-body">
                            <form role="form" id="payment form" method="POST" action="">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="form-group">
                                            <label for="cardNumber">Número de tarjeta</label>
                                            <div class="input-group">
                                                <input
                                                    type="tel"
                                                    class="form-control"
                                                    name="cardNumber"
                                                    placeholder="Nº de tarjeta"
                                                    autocomplete="cc-number"
                                                    required autofocus
                                                >
                                                <span class="input-group-addon"><i class="fa fa-credit-card"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-7 col-md-7">
                                        <div class="form-group">
                                                <label for="cardExpiry"><span class="hidden-xs">EXPIRATION</span><span class="visible-xs-inline">EXP</span> DATE</label>
                                                <input
                                                    type="tel"
                                                    class="form-control"
                                                    name="cardExpiry"
                                                    placeholder="MM / YY"
                                                    autocomplete="cc-exp"
                                                    required
                                                />
                                        </div>
                                    </div>
                                    <div class="col-xs-5 col-md-5 pull-right">
                                        <div class="form-group">
                                            <label for="cardCVC">CV CODE</label>
                                            <input
                                                type="tel"
                                                class="form-control"
                                                name="cardCVC"
                                                placeholder="CVC"
                                                autocomplete="cc-csc"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="form-group">
                                            <label for="couponCode">COUPON CODE</label>
                                            <input type="text" class="form-control" name="couponCode" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12">
                                        <input value="Pagar" class="subscribe btn btn-success btn-lg btn-block" type="button"/>
                                    </div>
                                </div>
                                <div class="row" style="display:none;">
                                    <div class="col-xs-12">
                                        <p class="payment-errors"></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Fin del desplegable-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
    $('.minus-btn').on('click', function(e) {
    e.preventDefault()
    var $this = $(this)
    var $input = $this.closest('div').find('input')
    var value = parseInt($input.val())

    if (value > 1) {
            value = value - 1
        } else {
            value = 0
        }

    $input.val(value)

    })

    $('.plus-btn').on('click', function(e) {
        e.preventDefault()
        var $this = $(this)
        var $input = $this.closest('div').find('input')
        var value = parseInt($input.val())

        if (value < 100) {
        value = value + 1
        } else {
            value =100
        }

        $input.val(value)
    })

    $('.like-btn').on('click', function() {
    $(this).toggleClass('is-active')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fondo-juegos {
    background-color: #dfdce3;
  }

  .fondo-black{
    background-color: #434343;
  }

  li a {
    color: #EA5900;
  }

  .img-todojuegos {
    height: 192px;
    width: 308px;
  }

  .titulo-footer {
    font-size: 1.5em;
  }

  .footer-div {
    padding-top: 200px;
  }
  .logo {
    height: 96px;
    width: 154px;
    padding-bottom: 10px;
  }

  .btn-outline-success {
    color: white;
    background-color: #434343;
    background-image: none;
    border-color: white;
  }
  .btn-outline-success:hover {
    color: #434343;
    background-color: darkorange;
    border-color: darkorange;
  }

  a i{
    color: #323232;
  }

  li a {
    color: #EA5900;
  }

  .fondo {
    background-color: #fb6207;
  }

  .fondo-juegos {
    background-color: #dfdce3;
  }

  .nav-link:hover, .nav-link:focus {
    text-decoration: none;
    color: white;
  }

  /* CSS Carrito de la compra */

  .shopping-cart {
    width: 750px;
    margin: 80px auto;
    background: #FFFFFF;
    box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.10);
    border-radius: 6px;

    display: flex;
    flex-direction: column;
  }
  .cart-tittle{
    height: 60px;
    border-bottom: 1px solid #E1E8EE;
    padding: 20px 30px;
    color: #5E6977;
    font-size: 30px;
    font-weight: 400;
  }

  .product-img{
    height: 100;
  }

  .item {
    padding: 20px 30px;
    height: 120px;
    display: flex;
  }

  .item:nth-child(3) {
    border-top:  1px solid #E1E8EE;
    border-bottom:  1px solid #E1E8EE;
  }

  .bttns {
    position: relative;
    padding-top: 30px;
    margin-right: 60px;
  }

  .delete-btn {
    width: 83px;
    padding-top: 27px;
    text-align: center;
    font-size: 16px;
    color: #43484D;
    font-weight: 300;
  }

  .delete-btn:hover{
    width: 83px;
    padding-top: 27px;
    text-align: center;
    font-size: 16px;
    /*background: rgb(255, 0, 0);*/
    font-weight: 300;
    -ms-transform: scale(1.5); /* IE 9 */
    -webkit-transform: scale(1.5); /* Safari 3-8 */
    transform: scale(1.5);
  }

  .like-btn {
    position: absolute;
    top: 9px;
    left: 15px;
    display: inline-block;
    background: url('../assets/twitter-heart.png');
    width: 60px;
    height: 60px;
    background-size: 2900%;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .is-active {
    animation-name: animate;
    animation-duration: .8s;
    animation-iteration-count: 1;
    animation-timing-function: steps(28);
    animation-fill-mode: forwards;
  }

  @keyframes animate {
    0%   { background-position: left;  }
    50%  { background-position: right; }
    100% { background-position: right; }
  }

  .image {
    margin-right: 50px;
  }

  .description {
    padding-top: 10px;
    margin-right: 60px;
    width: 115px;
  }

  .description span {
    display: block;
    font-size: 14px;
    color: #43484D;
    font-weight: 400;
  }

  .description span:first-child {
    margin-bottom: 5px;
  }
  .description span:last-child {
    font-weight: 300;
    margin-top: 8px;
    color: #86939E;
  }

  /* Product Quantity */
  .quantity {
    padding-top: 20px;
    margin-right: 60px;
  }
  .quantity input {
    -webkit-appearance: none;
    border: none;
    text-align: center;
    width: 32px;
    font-size: 16px;
    color: #43484D;
    font-weight: 300;
  }

  button[class*=bttns] {
    width: 30px;
    height: 30px;
    background-color: #E1E8EE;
    border-radius: 6px;
    border: none;
    cursor: pointer;
  }
  .minus-btn img {
    margin-bottom: 3px;
  }
  .plus-btn img {
    margin-top: 2px;
  }
  button:focus,
  input:focus {
    outline:0;
  }

  /* Total Price */
  .total-price {
    width: 83px;
    padding-top: 27px;
    text-align: center;
    font-size: 16px;
    color: #43484D;
    font-weight: 300;
  }

  /* Responsive */
  @media (max-width: 800px) {
    .shopping-cart {
      width: 100%;
      height: auto;
      overflow: hidden;
    }
    .item {
      height: auto;
      flex-wrap: wrap;
      justify-content: center;
    }
    .image img {
      width: 50%;
    }
    .image,
    .quantity,
    .description {
      width: 100%;
      text-align: center;
      margin: 6px 0;
    }
    .bttns {
      margin-right: 20px;
    }
  }

  .buy-btn{
    float: right;
    background-color: transparent;
    box-shadow: none;
    border: 0px;
    color: #43484D;
  }

  .buy-btn:hover{
    float: right;
    background-color: transparent;
    box-shadow: none;
    border: 0px;
    color: #43484D;
  }

  .credit-card-box .panel-title {
    display: inline;
    font-weight: bold;
  }
  .credit-card-box .form-control.error {
    border-color: red;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(255,0,0,0.6);
  }
  .credit-card-box label.error {
  font-weight: bold;
  color: red;
  padding: 2px 8px;
  margin-top: 2px;
  }
  .credit-card-box .payment-errors {
  font-weight: bold;
  color: red;
  padding: 2px 8px;
  margin-top: 2px;
  }
  .credit-card-box label {
    display: block;
  }
  /* The old "center div vertically" hack */
  .credit-card-box .display-table {
    display: table;
  }
  .credit-card-box .display-tr {
    display: table-row;
  }
  .credit-card-box .display-td {
    display: table-cell;
    vertical-align: middle;
    width: 50%;
  }
  /* Just looks nicer */
  .credit-card-box .panel-heading img {
    min-width: 180px;
  }

  .filepond--drop-label {
    color: #4c4e53;
  }

  .filepond--label-action {
    text-decoration-color: #babdc0;
  }

  .filepond--panel-root {
    border-radius: 2em;
    background-color: #edf0f4;
    height: 1em;
  }

  .filepond--item-panel {
    background-color: #595e68;
  }

  .filepond--drip-blob {
    background-color: #7f8a9a;
  }
</style>
