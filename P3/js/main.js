
<script>
$('#nav.smoothscroll ul li a[href^="#"]').on('click', function(e) {

  e.preventDefault();

  var hash = this.hash;

  $('html, body').animate({
    scrollTop: $('a[name="' + this.hash.replace('#', '') + '"]').offset().top
  }, 300, function(){

    window.location.hash = hash;

  });
});
</script>