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
                    <img class="product-img" src="/img/fifa19.jpg" alt="" />
                </div>

                <div class="description">
                    <span>Fifa 19</span>
                    <span>Normal edition</span>
                    <span>39,99€</span>
                </div>

                <div class="quantity">
                    <button class="plus-btn" type="button" name="button">
                      +
                    </button>
                    <input type="text" name="name" value="1">
                    <button class="minus-btn" type="button" name="button">
                        -
                    </button>
                </div>

                <div class="total-price"></div>
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
