<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  {{!-- <meta name="viewport" content="width=<device-width>, initial-scale=1.0"> --}}
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  {{!-- <meta name=viewport content=”width=device-width, initial-scale=1”> --}}
  <title>Document</title>
  <!--link to boostrap-->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" text="text/css" href="./css/style.css">
  <link rel="stylesheet" text="text/css" href="./css/about-me.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>

</head>

<body>
  <!--Start Header-->
  <nav class="cloud-background navbar navbar-expand-sm navbar-light">
    <a class="navbar-brand p-2" href="#">James Lovejoy</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="row navbar-nav">
        <li class="nav-item active p-1 m-2">
          <a class="nav-link" href="/">About-me <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item p-1 m-2">
          <a class="nav-link" href="/portfolio">Portfolio</a>
        </li>
        <li class="nav-item p-1 m-2">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
        <li class="nav-item dropdown p-1 m-2">
          <div class="dropdown">
            <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown">
              More Goodies
            </button>
            <ul class="dropdown-menu">
              <li class="divider dropdown-item"><a
                  href="https://www.linkedin.com/in/james-lovejoy-b414307a/">Linkedin</a></li>
              <li class="divider dropdown-item"><a href="https://github.com/jlovejo2/">Github Profile</a></li>
              <li class="divider dropdown-item"><a href="assets/James_Lovejoy_Resume_overall.pdf">Resume</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  <!--Finish Header-->
  <!--Start Content:  In the content I used as much bootstrap class commands as found.  I had issues getting width classes in bootstrap to work so I specified
    most widths in a css.-->
  <div class='container-fluid min-vh-100 p-5'>
    <div class='row'>
      {{{body}}}
    </div>
  </div>
  <!--Finish Content-->
  <!--Start Footer-->
  <div class="fixed-bottom min-10 text-center footer">
    <p>Copright&copy;</p>
  </div>
  <!--Finish Footer-->
  <script src="./javascript/functions.js"></script>
  <script src="./javascript/contact.js"></script>
  <script src="./javascript/portfolio.js"></script>
  <script src="./javascript/index.js"></script>
  
</body>

</html>