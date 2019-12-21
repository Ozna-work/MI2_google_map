//$("nav").append('<li><h2><a class="navbar-brand" href="Accueil.html">'+navbar.accueil+'</a></h2></li>');
$("nav").append('<div class="navbar-collapse" id="navbarSupportedContent"></div>');

$("#navbarSupportedContent").append('<ul class="navbar-nav mr-auto">');


$("#navbarSupportedContent ul").append('<li class="nav-item"><a class="nav-link" href="Accueil.html">'+navbar.accueil+'</a></li>' +
    '<li id="Menu" class="nav-item dropdown"><a class="nav-link dropdown-toggle" id="navbarDropdownMenu" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+navbar.menu.titre+'</a></li>' +
    // '<li id="Services" class="nav-item dropdown" href="Services.html"><a class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+navbar.services.titre+'</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="Services.html">'+navbar.services.titre+'</a></li>' +
    '<li class="nav-item"><a class="nav-link">'+navbar.evenements+'</a></li>' +
    '<li class="nav-item"><a class="nav-link">'+navbar.visiteaudio+'</a></li>' +
    '<li class="nav-item"><a class="nav-link">'+navbar.visitevideo+'</a></li>' +
    '<li class="nav-item"><a class="nav-link">'+navbar.contact+'</a></li>');

$("#Menu").append('<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenu"></ul>');
$("#Menu ul").append('<li><a class="dropdown-item" href="#">' + navbar.menu.connexion + '</a></li>');
$("#Menu ul").append('<li><a class="dropdown-item" href="#">' + navbar.menu.recherche + '</a></li>');
$("#Menu ul").append('<li><a class="dropdown-item" href="#">' + navbar.menu.parainage + '</a></li>');
$("#Menu ul").append('<li><a class="dropdown-item"" href="#">' + navbar.menu.donation + '</a></li>');

$("#Services").append('<ul class="dropdown-menu" aria-labelledby="navbarDropdownThemes"></ul>');
$("#Services ul").append('<li><a class="dropdown-item" href="#">' + navbar.services.information + '</a></li>');
$("#Services ul").append('<li><a class="dropdown-item" href="#">' + navbar.services.location + '</a></li>');
$("#Services ul").append('<li><a class="dropdown-item" href="#">' + navbar.services.assistance + '</a></li>');


