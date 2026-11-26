/* Applique le thème choisi (à charger dans le <head> de chaque page) */
(function () {
  var CLE = "themeSite", DEFAUT = "jour", LISTE = ["nuit", "jour", "classique"];

  function appliquer(nom) {
    if (LISTE.indexOf(nom) < 0) nom = DEFAUT;
    var h = document.documentElement;
    h.setAttribute("data-theme", nom);
    if (nom === "classique") h.removeAttribute("data-themed");
    else h.setAttribute("data-themed", "");
    return nom;
  }

  var choisi = DEFAUT;
  try { choisi = localStorage.getItem(CLE) || DEFAUT; } catch (e) {}
  appliquer(choisi);

  /* utilisée par la page theme.html */
  window.appliquerTheme = function (nom) {
    nom = appliquer(nom);
    try { localStorage.setItem(CLE, nom); } catch (e) {}
  };
})();
