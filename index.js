
function updateDOM() {
  document.getElementById( "text" )
    .innerHTML = "This is really cool!";
}document.addEventListener( "DOMContentLoaded", function () {
  updateDOM()
} );