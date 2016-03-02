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

app.get("/albums", (req, res) => {
  models.Album.findAll({
    attributes: [ "AlbumId", "Title" ],
    include: {
      model: models.Artist,
      attributes: [ "Name" ]
    }
  }).then((albums) => {
    var newAlbums = [];
    for (var i = 0; i < albums.length; i++) {
      newAlbums[i] = {"AlbumId": albums[i].AlbumId, "Title": albums[i].Title, "Artist": albums[i].Artist.Name};
    }
    res.send(newAlbums);
  });
});

app.get("/artists", (req, res) => {
  models.Artist.findAll().then((artists) => {
    res.send(artists);
  });
});

app.get("/customers", (req, res) => {
  models.Customer.findAll().then((customers) => {
    res.send(customers);
  });
});

app.get('/customers/:id', (req, res) => {
  models.Customer.findOne({
    where: {
      CustomerId: req.params.id
    }
  }).then(customer => res.send(customer));
});

app.get('/customers/:id/invoices', (req, res) => {
  models.Customer.findOne({
    where: {
      CustomerId: req.params.id
    },
  })
  .then(customer => customer.getInvoices())
  .then(invoices => res.send(invoices));
});

app.get("/employees", (req, res) => {
  models.Employee.findAll().then((employees) => {
    res.send(employees);
  });
});

app.get("/genres", (req, res) => {
  models.Genre.findAll().then((genres) => {
    res.send(genres);
  });
});

app.get("/invoices", (req, res) => {
  models.Invoice.findAll({
    attributes: { exclude: "CustomerId" },
    include: {
      model: models.Customer,
      attributes: { exclude: [
        "CustomerId",
        "SupportRepId"
      ]}
    }
  }).then((invoices) => {
    res.send(invoices);
  });
});

app.get('/invoices/:id', (req, res) => {
  models.Invoice.findOne({
      where: {
        InvoiceId: req.params.id
      }
    })
    .then(invoice => res.send(invoice));
});

app.get('/invoices/:id/customer', (req, res) => {
  models.Invoice.findOne({
      where: {
        InvoiceId: req.params.id
      }
    })
    .then(invoice => invoice.getCustomer())
    .then(customer => res.send(customer));
});

app.get("/invoicelines", (req, res) => {
  models.InvoiceLine.findAll().then((lines) => {
    res.send(lines);
  });
});

app.get('/mediatypes', (req, res) => {
  models.MediaType.findAll().then((mediatypes) => {
    res.send(mediatypes);
  });
});

app.get("/playlists", (req, res) => {
  models.Playlist.findAll().then((playlists) => {
    res.send(playlists);
  });
});

app.get("/playlisttracks", (req, res) => {
  models.PlaylistTrack.findAll().then((playlisttracks) => {
    res.send(playlisttracks);
  });
});

app.get("/tracks", (req, res) => {
  models.Track.findAll().then((tracks) => {
    res.send(tracks);
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
