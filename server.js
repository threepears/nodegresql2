"use strict";

const express = require("express");

const models = require("./models/");

const PORT = process.env.PORT || 3000;

const app = express();

const Genre = require("./models/").Genre;
const MediaTypes = require("./models/")

app.get("/", (req, res) => {
  res.send({
    status: "Success"
  });
});

app.get("/genres", (req, res) => {
  models.Genre.findAll().then((genres) => {
    res.send(genres);
  });
});

app.get('/mediatypes', (req, res) => {
  models.MediaType.findAll().then((mediatypes) => {
    res.send(mediatypes);
  });
});

app.get("/artists", (req, res) => {
  models.Artist.findAll().then((artists) => {
    res.send(artists);
  });
});

app.get("/albums", (req, res) => {
  models.Album.findAll({
    attributes: [ "AlbumId", "Title" ],
    include: {
      model: models.Artist,
      attributes: [ "Name" ]
    }
  }).then((albums) => {
    res.send(albums);
  });
});

app.get("/playlists", (req, res) => {
  models.Playlist.findAll().then((playlists) => {
    res.send(playlists);
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
