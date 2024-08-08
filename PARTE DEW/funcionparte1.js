document.addEventListener('cargatitulo', function() {
    var nombre= document.querySelectorAll('.nombre-product');
  
    nombre.forEach(function( titulo, index) {
      titulo.addEventListener('click', function() {
        var h3Text = this.querySelector('h3').textContent.trim();
        sessionStorage.setItem('pageTitle', h3Text);
        window.location.href = 'paginas/ventana1.html';
      });
    });
  });