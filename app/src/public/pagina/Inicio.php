<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <link rel="icon" href="img/Logotipo.png">
    <link rel="stylesheet" href="styles/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <title>TodoJuegos</title>
  </head>

  <header>
    <?php require 'Header.php' ?>
  </header>

  <body class="fondo">
    <div class="container-fluid">
      <div class="row">
        <div class="col-2">
        </div>
        <div class="col-8 fondo-juegos">
          <div class="container-center">
            <div class="row">
              <div class="col-12">
                <h2>Más vendidos <b>Ps4</b></h2>
                <div id="carouselps4" class="carousel slide" data-ride="carousel" data-interval="0">
                <!-- Indicador del carousel -->
                <ol class="carousel-indicators">
                  <li data-target="#carouselps4" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselps4" data-slide-to="1"></li>
                  <li data-target="#carouselps4" data-slide-to="2"></li>
                </ol>
                <!-- Objetos del carousel -->
                <div class="carousel-inner">
                  <div class="item carousel-item active">
                    <div class="row">
                      <!-- Objetos del carousel [Repetir]-->
                      <div class="col-sm-3">
                        <div class="thumb-wrapper">
                          <div class="img-box">
                            <img src="img/fifa19.jpg" class="img-responsive img-fluid" alt="">
                          </div>
                          <div class="thumb-content">
                            <h4>Fifa 19</h4>
                            <p class="item-price"><strike>59,99€</strike> <span>39.99€</span></p>
                            <div class="star-rating">
                              <ul class="list-inline">
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                              </ul>
                            </div>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                          </div>            
                        </div>
                      </div>
                      <!-- Fin de repetir -->

                      <!-- Objetos del carousel [Repetir]-->
                      <div class="col-sm-3">
                        <div class="thumb-wrapper">
                          <div class="img-box">
                            <img src="img/fifa19.jpg" class="img-responsive img-fluid" alt="">
                          </div>
                          <div class="thumb-content">
                            <h4>Fifa 19</h4>
                            <p class="item-price"><strike>59,99€</strike> <span>39.99€</span></p>
                            <div class="star-rating">
                              <ul class="list-inline">
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                              </ul>
                            </div>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                          </div>            
                        </div>
                      </div>
                      <!-- Fin de repetir -->

                      <!-- Objetos del carousel [Repetir]-->
                      <div class="col-sm-3">
                        <div class="thumb-wrapper">
                          <div class="img-box">
                            <img src="img/fifa19.jpg" class="img-responsive img-fluid" alt="">
                          </div>
                          <div class="thumb-content">
                            <h4>Fifa 19</h4>
                            <p class="item-price"><strike>59,99€</strike> <span>39.99€</span></p>
                            <div class="star-rating">
                              <ul class="list-inline">
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                              </ul>
                            </div>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                          </div>            
                        </div>
                      </div>
                      <!-- Fin de repetir -->

                      <!-- Objetos del carousel [Repetir]-->
                      <div class="col-sm-3">
                        <div class="thumb-wrapper">
                          <div class="img-box">
                            <img src="img/fifa19.jpg" class="img-responsive img-fluid" alt="">
                          </div>
                          <div class="thumb-content">
                            <h4>Fifa 19</h4>
                            <p class="item-price"><strike>59,99€</strike> <span>39.99€</span></p>
                            <div class="star-rating">
                              <ul class="list-inline">
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                              </ul>
                            </div>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                          </div>            
                        </div>
                      </div>
                      <!-- Fin de repetir -->
                    </div>
                  </div>
                </div>
                <!-- Control del carousel -->
                <a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                  <i class="fa fa-angle-left"></i>
                </a>
                <a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                  <i class="fa fa-angle-right"></i>
                </a>
            </div><!-- Final carousel -->
                <h2>Más vendidos <b>PC</b></h2>
                <div id="carouselpc" class="carousel slide" data-ride="carousel" data-interval="0">
                <!-- Indicador del carousel -->
                <ol class="carousel-indicators">
                  <li data-target="#carouselpc" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselpc" data-slide-to="1"></li>
                  <li data-target="#carouselpc" data-slide-to="2"></li>
                </ol>
                <!-- Objetos del carousel -->
                <div class="carousel-inner">
                  <div class="item carousel-item active">
                    <div class="row">
                      <!-- Objetos del carousel [Repetir]-->
                      <div class="col-sm-3">
                        <div class="thumb-wrapper">
                          <div class="img-box">
                            <img src="img/fifa19.jpg" class="img-responsive img-fluid" alt="">
                          </div>
                          <div class="thumb-content">
                            <h4>Fifa 19</h4>
                            <p class="item-price"><strike>59,99€</strike> <span>39.99€</span></p>
                            <div class="star-rating">
                              <ul class="list-inline">
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                              </ul>
                            </div>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                          </div>            
                        </div>
                      </div>
                      <!-- Fin de repetir -->

                      <!-- Objetos del carousel [Repetir]-->
                      <div class="col-sm-3">
                        <div class="thumb-wrapper">
                          <div class="img-box">
                            <img src="img/fifa19.jpg" class="img-responsive img-fluid" alt="">
                          </div>
                          <div class="thumb-content">
                            <h4>Fifa 19</h4>
                            <p class="item-price"><strike>59,99€</strike> <span>39.99€</span></p>
                            <div class="star-rating">
                              <ul class="list-inline">
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                              </ul>
                            </div>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                          </div>            
                        </div>
                      </div>
                      <!-- Fin de repetir -->

                      <!-- Objetos del carousel [Repetir]-->
                      <div class="col-sm-3">
                        <div class="thumb-wrapper">
                          <div class="img-box">
                            <img src="img/fifa19.jpg" class="img-responsive img-fluid" alt="">
                          </div>
                          <div class="thumb-content">
                            <h4>Fifa 19</h4>
                            <p class="item-price"><strike>59,99€</strike> <span>39.99€</span></p>
                            <div class="star-rating">
                              <ul class="list-inline">
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                              </ul>
                            </div>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                          </div>            
                        </div>
                      </div>
                      <!-- Fin de repetir -->

                      <!-- Objetos del carousel [Repetir]-->
                      <div class="col-sm-3">
                        <div class="thumb-wrapper">
                          <div class="img-box">
                            <img src="img/fifa19.jpg" class="img-responsive img-fluid" alt="">
                          </div>
                          <div class="thumb-content">
                            <h4>Fifa 19</h4>
                            <p class="item-price"><strike>59,99€</strike> <span>39.99€</span></p>
                            <div class="star-rating">
                              <ul class="list-inline">
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                              </ul>
                            </div>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                          </div>            
                        </div>
                      </div>
                      <!-- Fin de repetir -->
                    </div>
                  </div>
                </div>
                <!-- Control del carousel -->
                <a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                  <i class="fa fa-angle-left"></i>
                </a>
                <a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                  <i class="fa fa-angle-right"></i>
                </a>
            </div><!-- Final carousel -->
                <h2>Más vendidos <b>Xbox-One</b></h2>
                <div id="carouselxbox" class="carousel slide" data-ride="carousel" data-interval="0">
                <!-- Indicador del carousel -->
                <ol class="carousel-indicators">
                  <li data-target="#carouselxbox" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselxbox" data-slide-to="1"></li>
                  <li data-target="#carouselxbox" data-slide-to="2"></li>
                </ol>
                <!-- Objetos del carousel -->
                <div class="carousel-inner">
                  <div class="item carousel-item active">
                    <div class="row">
                      <!-- Objetos del carousel [Repetir]-->
                      <div class="col-sm-3">
                        <div class="thumb-wrapper">
                          <div class="img-box">
                            <img src="img/fifa19.jpg" class="img-responsive img-fluid" alt="">
                          </div>
                          <div class="thumb-content">
                            <h4>Fifa 19</h4>
                            <p class="item-price"><strike>59,99€</strike> <span>39.99€</span></p>
                            <div class="star-rating">
                              <ul class="list-inline">
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                              </ul>
                            </div>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                          </div>            
                        </div>
                      </div>
                      <!-- Fin de repetir -->

                      <!-- Objetos del carousel [Repetir]-->
                      <div class="col-sm-3">
                        <div class="thumb-wrapper">
                          <div class="img-box">
                            <img src="img/fifa19.jpg" class="img-responsive img-fluid" alt="">
                          </div>
                          <div class="thumb-content">
                            <h4>Fifa 19</h4>
                            <p class="item-price"><strike>59,99€</strike> <span>39.99€</span></p>
                            <div class="star-rating">
                              <ul class="list-inline">
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                              </ul>
                            </div>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                          </div>            
                        </div>
                      </div>
                      <!-- Fin de repetir -->

                      <!-- Objetos del carousel [Repetir]-->
                      <div class="col-sm-3">
                        <div class="thumb-wrapper">
                          <div class="img-box">
                            <img src="img/fifa19.jpg" class="img-responsive img-fluid" alt="">
                          </div>
                          <div class="thumb-content">
                            <h4>Fifa 19</h4>
                            <p class="item-price"><strike>59,99€</strike> <span>39.99€</span></p>
                            <div class="star-rating">
                              <ul class="list-inline">
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                              </ul>
                            </div>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                          </div>            
                        </div>
                      </div>
                      <!-- Fin de repetir -->

                      <!-- Objetos del carousel [Repetir]-->
                      <div class="col-sm-3">
                        <div class="thumb-wrapper">
                          <div class="img-box">
                            <img src="img/fifa19.jpg" class="img-responsive img-fluid" alt="">
                          </div>
                          <div class="thumb-content">
                            <h4>Fifa 19</h4>
                            <p class="item-price"><strike>59,99€</strike> <span>39.99€</span></p>
                            <div class="star-rating">
                              <ul class="list-inline">
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                              </ul>
                            </div>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                          </div>            
                        </div>
                      </div>

                <!-- Control del carousel -->
                <a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                  <i class="fa fa-angle-left"></i>
                </a>
                <a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                  <i class="fa fa-angle-right"></i>
                </a>
            </div><!-- Final carousel -->
          </div>
        </div>

        </div>          
              </div>

            <div class="col-2">
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>

  <footer class="page-footer font-small" style="margin-top:-15px;">
    <?php require 'Footer.php' ?>
  </footer>
</html>
