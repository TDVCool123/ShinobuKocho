const mongoose = require('mongoose');

const setupSchema = new mongoose.Schema({
    guildID: String,
    reaccion_roles: Array,
    sistema_tickets: {type: Object, default: {canal: "", mensaje: ""}},
    sugerencias: {type: String, default: ""},
    niveles: {type: Object, default: {canal: "", mensaje: ""}},
    bienvenidas: {type: Object, default: {canal:"", fondo: "https://c4.wallpaperflare.com/wallpaper/681/80/1009/anime-demon-slayer-kimetsu-no-yaiba-shinobu-kochou-hd-wallpaper-preview.jpg", mensaje: "Bienvenido {usuario} a {servidor} Disfruta de tu estancia"}},
})

const model = mongoose.model("Configuraciones", setupSchema);

module.exports = model;