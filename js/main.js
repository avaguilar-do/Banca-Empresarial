/* =============================================================
Banca Mayorista · Tablero ejecutivo
Navegación por pestañas con enlace profundo (#tablero, #oferta,
#mesas, #actividades, #timeline), soporte de teclado y
accesibilidad ARIA.
============================================================= */
(function () {
"use strict";

var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
var panels = Array.prototype.slice.call(document.querySelectorAll(".panel"));
if (!tabs.length) return;

var VALID = tabs.map(function (t) { return t.dataset.target; });

/**
* Activa una pestaña y muestra su panel.
* @param {string} name identificador de la pestaña (data-target)
* @param {boolean} pushHash si debe reflejarse en la URL
*/
function activate(name, pushHash) {
if (VALID.indexOf(name) === -1) name = VALID[0];

tabs.forEach(function (tab) {
var on = tab.dataset.target === name;
tab.classList.toggle("is-active", on);
tab.setAttribute("aria-selected", on ? "true" : "false");
tab.tabIndex = on ? 0 : -1;
});

panels.forEach(function (panel) {
var on = panel.id === "panel-" + name;
panel.classList.toggle("is-active", on);
panel.hidden = !on;
});

if (pushHash && history.replaceState) {
history.replaceState(null, "", "#" + name);
}

// En pantallas pequeñas, deja visible la pestaña activa.
var active = document.querySelector(".tab.is-active");
if (active && active.scrollIntoView) {
active.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
}
}

// --- Clic -----------------------------------------------------
tabs.forEach(function (tab) {
tab.addEventListener("click", function () {
activate(tab.dataset.target, true);
window.scrollTo({ top: 0, behavior: "smooth" });
});
});

// --- Teclado: flechas, inicio y fin ---------------------------
document.querySelector(".tabs__inner").addEventListener("keydown", function (e) {
var i = tabs.indexOf(document.activeElement);
if (i === -1) return;
var next = null;

if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
else if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
else if (e.key === "Home") next = 0;
else if (e.key === "End") next = tabs.length - 1;
else return;

e.preventDefault();
tabs[next].focus();
activate(tabs[next].dataset.target, true);
});

// --- Enlace profundo ------------------------------------------
function fromHash() {
return (location.hash || "").replace(/^#/, "");
}

window.addEventListener("hashchange", function () {
activate(fromHash(), false);
});

activate(fromHash() || VALID[0], false);
})();
