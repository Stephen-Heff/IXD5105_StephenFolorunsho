window.onload = function() {
  var programs = document.getElementById("navSections");
  var dropdownMenu = document.getElementById("dropdownMenu");

  programs.onclick = () => {
      dropdownMenu.classList.toggle("hide");
      programs.classList.toggle("highlight");
  }
}