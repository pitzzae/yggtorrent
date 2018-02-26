Yggtorrent
====
### Yggtorrent Web crawler client

A crawler client for the [Yggtorrent website](https://yggtorrent.com) that works in node

Install
-------

```bash
$ npm install yggtorrent
```

Usage
-----

```javascript
const YGG = require('yggtorrent');

var client = new YGG();

client.set_credential('your-username', 'your-password');

// list categories
client.get_categories(function(result) {
	console.log(result);
});

// get nfo as text file
client.get_nfo(function(result) {
	console.log(result);
}, id);

// get description as htlm format
client.get_info(function(result) {
	console.log(result);
}, id);

// search torrents
client.search(function(result) {
	console.log(result);
}, 'interstellar');

// download and parse a .torrent
client.get_torrent(function(buf) {
	// `buf` is a Buffer
   var parsed = require('parse-torrent')(buf);
   console.log(parsed);
}, id);
```

Categories Output
-----
```javascript
client.get_categories(console.log);
```
```json
[
   {
      "value":"all",
      "data-categorie":"all"
   },
   {
      "value":"2145",
      "data-categorie":"FilmVidéo",
      "cats":[
         {
            "value":"all",
            "data-categorie":"-- Toutes les sous catégories --"
         },
         {
            "value":"2178",
            "data-categorie":"Animation"
         },
         {
            "value":"2179",
            "data-categorie":"Animation Série"
         },
         {
            "value":"2180",
            "data-categorie":"Concert"
         },
         {
            "value":"2181",
            "data-categorie":"Documentaire"
         },
         {
            "value":"2182",
            "data-categorie":"Emission TV"
         },
         {
            "value":"2183",
            "data-categorie":"Film"
         },
         {
            "value":"2184",
            "data-categorie":"Série TV"
         },
         {
            "value":"2185",
            "data-categorie":"Spectacle"
         },
         {
            "value":"2186",
            "data-categorie":"Sport"
         },
         {
            "value":"2187",
            "data-categorie":"Vidéo-clips"
         }
      ]
   },
   {
      "value":"2139",
      "data-categorie":"Audio",
      "cats":[
         {
            "value":"all",
            "data-categorie":"-- Toutes les sous catégories --"
         },
         {
            "value":"2147",
            "data-categorie":"Karaoké"
         },
         {
            "value":"2148",
            "data-categorie":"Musique"
         },
         {
            "value":"2150",
            "data-categorie":"Podcast Radio"
         },
         {
            "value":"2149",
            "data-categorie":"Samples"
         }
      ]
   },
   {
      "value":"2144",
      "data-categorie":"Application",
      "cats":[
         {
            "value":"all",
            "data-categorie":"-- Toutes les sous catégories --"
         },
         {
            "value":"2177",
            "data-categorie":"Autre"
         },
         {
            "value":"2176",
            "data-categorie":"Formation"
         },
         {
            "value":"2171",
            "data-categorie":"Linux"
         },
         {
            "value":"2172",
            "data-categorie":"MacOS"
         },
         {
            "value":"2174",
            "data-categorie":"Smartphone"
         },
         {
            "value":"2175",
            "data-categorie":"Tablette"
         },
         {
            "value":"2173",
            "data-categorie":"Windows"
         }
      ]
   },
   {
      "value":"2142",
      "data-categorie":"Jeu-vidéo",
      "cats":[
         {
            "value":"all",
            "data-categorie":"-- Toutes les sous catégories --"
         },
         {
            "value":"2167",
            "data-categorie":"Autre"
         },
         {
            "value":"2159",
            "data-categorie":"Linux"
         },
         {
            "value":"2160",
            "data-categorie":"MacOS"
         },
         {
            "value":"2162",
            "data-categorie":"Microsoft"
         },
         {
            "value":"2163",
            "data-categorie":"Nintendo"
         },
         {
            "value":"2165",
            "data-categorie":"Smartphone"
         },
         {
            "value":"2164",
            "data-categorie":"Sony"
         },
         {
            "value":"2166",
            "data-categorie":"Tablette"
         },
         {
            "value":"2161",
            "data-categorie":"Windows"
         }
      ]
   },
   {
      "value":"2140",
      "data-categorie":"eBook",
      "cats":[
         {
            "value":"all",
            "data-categorie":"-- Toutes les sous catégories --"
         },
         {
            "value":"2151",
            "data-categorie":"Audio"
         },
         {
            "value":"2152",
            "data-categorie":"Bds"
         },
         {
            "value":"2153",
            "data-categorie":"Comics"
         },
         {
            "value":"2154",
            "data-categorie":"Livres"
         },
         {
            "value":"2155",
            "data-categorie":"Mangas"
         },
         {
            "value":"2156",
            "data-categorie":"Presse"
         }
      ]
   },
   {
      "value":"2141",
      "data-categorie":"Emulation",
      "cats":[
         {
            "value":"all",
            "data-categorie":"-- Toutes les sous catégories --"
         },
         {
            "value":"2157",
            "data-categorie":"Emulateurs"
         },
         {
            "value":"2158",
            "data-categorie":"Roms"
         }
      ]
   },
   {
      "value":"2143",
      "data-categorie":"GPS",
      "cats":[
         {
            "value":"all",
            "data-categorie":"-- Toutes les sous catégories --"
         },
         {
            "value":"2168",
            "data-categorie":"Applications"
         },
         {
            "value":"2169",
            "data-categorie":"Cartes"
         },
         {
            "value":"2170",
            "data-categorie":"Divers"
         }
      ]
   }
]
```

Nfo Output
-----
```javascript
client.get_nfo(console.log, '185378');
```
```text
GÃ©nÃ©ral
Nom complet                              : I:\Download\Interstellar.2014.TRUEFRENCH.BRRip.XviD-Slay3R.avi
Format                                   : AVI
Format/Info                              : Audio Video Interleave
Profil du format                         : OpenDML
Taille du fichier                        : 1,39 Gio
DurÃ©e                                    : 2 h 48 min
DÃ©bit global moyen                       : 1 182 kb/s
Nom du film                              : Interstellar.2014.TRUEFRENCH.BRRip.x264.AC3-SVR
Application utilisÃ©e                     : Lavf54.63.104

VidÃ©o
ID                                       : 0
Format                                   : xvid
Identifiant du codec                     : xvid
DurÃ©e                                    : 2 h 48 min
DÃ©bit                                    : 1 039 kb/s
Largeur                                  : 720 pixels
Hauteur                                  : 302 pixels
Format Ã  l'Ã©cran                         : 2,40:1
Images par seconde                       : 23,976 (24000/1001) Im/s
Type de balayage                         : Progressif
Bits/(Pixel*Image)                       : 0.199
Taille du flux                           : 1,23 Gio (88%)

Audio
ID                                       : 1
Format                                   : MPEG Audio
Version du format                        : Version 1
Profil du format                         : Layer 3
ParamÃ¨tres du format                     : Joint stereo / MS Stereo
Identifiant du codec                     : 55
Identifiant du codec/Suggestion          : MP3
DurÃ©e                                    : 2 h 48 min
Type de dÃ©bit                            : Constant
DÃ©bit                                    : 128 kb/s
Canaux                                   : 2 canaux
Echantillonnage                          : 48,0 kHz
Mode de compression                      : Avec perte
Taille du flux                           : 155 Mio (11%)
Alignement                               : AlignÃ©e sur les interleaves
Imbrication, durÃ©e                       : 24  ms (0,58 image vidÃ©o)
```

Info Output
-----
```javascript
client.get_info(console.log, '185378');
```
```html
<b>Interstellar<br><br></b><img src="http://images.allocine.fr/r_600_800/pictures/13/12/14/18/58/283415.jpg" alt="283415.jpg">
<br>
<br>
<a href="https://streetprez.com/"><img src="https://img.streetprez.com/fr_FR/blanc/information_film.png" alt="information_film.png">
    <br>
</a><b>Origine :</b><i> U.S.A.<br></i><b>R&#xE9;alisateur :</b><i> Christopher Nolan<br></i><b>Acteurs :</b><i> Matthew McConaughey, Anne Hathaway, Michael Caine, John Lithgow, Jessica Chastain<br></i><b>Genre :</b><i> Science fiction, Drame<br></i><b>Dur&#xE9;e :</b><i> 2h 49min<br></i><b>Date de sortie :</b><i> 05 Novembre 2014<br></i><b>Ann&#xE9;e de production :</b><i> 2014<br></i><b>Titre original :</b><i> Interstellar<br></i><b>Critiques Spectateurs :</b> <img src="https://img.streetprez.com/note/45.png" alt="45.png"><i> 4.5<br></i><b>Critiques Presses :</b> <img src="https://img.streetprez.com/note/40.png" alt="40.png"><i> 3.8<br></i><b></b>
<br><i><a href="http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19547238"></a></i>
<a href="https://streetprez.com/"><img src="https://img.streetprez.com/fr_FR/blanc/synopsis.png" alt="synopsis.png">
    <br>
    <br>
</a>Le film raconte les aventures d&#x2019;un groupe d&#x2019;explorateurs qui utilisent une faille r&#xE9;cemment d&#xE9;couverte dans l&#x2019;espace-temps afin de repousser les limites humaines et partir &#xE0; la conqu&#xEA;te des distances astronomiques dans un voyage interstellaire.&#xA0;
<br>
<br>
<a href="https://streetprez.com/"><img src="https://img.streetprez.com/fr_FR/blanc/information_upload.png" alt="information_upload.png">
    <br>
</a><b>Qualit&#xE9; :</b><i> BDRIP<br></i><b>Format :</b><i> Avi<br></i><b>Langue :</b><i> <img src="https://img.streetprez.com/flag/fr_FR.png" alt="fr_FR.png"> True French, <img src="https://img.streetprez.com/flag/fr_CA.png" alt="fr_CA.png"> Fran&#xE7;ais<br></i><b>Codec vid&#xE9;o :</b><i> XviD &#xE0; 1039kbps<br></i><b>Codec audio :</b><i> MP3 &#xE0; 128kbps<br><br></i>
<a href="https://streetprez.com/"><img src="https://img.streetprez.com/fr_FR/blanc/information_download.png" alt="information_download.png">
    <br>
</a><b>Tailles des fichiers :</b><i> 1 x 1390 Mo<br></i><b>Taille totale :</b><i> 1390 Mo<br><br></i>
<a href="https://streetprez.com/"><img src="https://img.streetprez.com/logo.png" alt="logo.png"></a>
<br>
```

Search Output
-----
```javascript
client.search(console.log, 'interstellar', '2139', '2148');
```
```json
[
   {
      "type":"Musique",
      "torrent":"PINK FLOYD-Interstellar Encore-1970-flac",
      "id":"187159",
      "age":"11 jours",
      "size":"658.02MB",
      "s":"0",
      "l":"21"
   },
   {
      "type":"Musique",
      "torrent":"[RE-UP] (Soundtrack) Hans Zimmer - Interstellar (Version Vinyl) [FLAC - 24 bits] 2015",
      "id":"118924",
      "age":"3 mois",
      "size":"1.35GB",
      "s":"31",
      "l":"1"
   },
   {
      "type":"Musique",
      "torrent":"(Soundtrack) Hans Zimmer - Interstellar (Version Vinyl) [FLAC - 24 bits] 2015",
      "id":"116948",
      "age":"3 mois",
      "size":"1.35GB",
      "s":"0",
      "l":"4"
   },
   {
      "type":"Musique",
      "torrent":"Hans.Zimmer-Interstellar.(Original.Motion.Picture.Soundtrack)-CD-FLAC-2014-RaM",
      "id":"106558",
      "age":"4 mois",
      "size":"290.64MB",
      "s":"14",
      "l":"0"
   },
   {
      "type":"Musique",
      "torrent":"John Coltrane - Interstellar Space - 1967 - MP3 193Kbps",
      "id":"104593",
      "age":"4 mois",
      "size":"74.40MB",
      "s":"8",
      "l":"0"
   },
   {
      "type":"Musique",
      "torrent":"Hans Zimmer - Interstellar OST (Deluxe) 2014",
      "id":"39458",
      "age":"7 mois",
      "size":"225.08MB",
      "s":"18",
      "l":"0"
   },
   {
      "type":"Musique",
      "torrent":"hans zimmer - interstellar - Illuminated Star Projection Edition FLAC",
      "id":"7344",
      "age":"7 mois",
      "size":"543.94MB",
      "s":"11",
      "l":"0"
   }
]
```

Download torrent Output
-----
```javascript
client.get_torrent(function(buf) {
   var parsed = require('parse-torrent')(buf);
   console.log(parsed);
}, '185378');
```
```json
{
  "info": {
    "file-duration": [
      7294
    ],
    "file-media": [
      0
    ],
    "length": 1497447860,
    "name": {
      "type": "Buffer",
      "data": [
        86,
        34,
        23,
        65,
        87,
        123
      ]
    },
    "piece length": 2097152,
    "pieces": {
      "type": "Buffer",
      "data": [
        45,
        178,
        27,
        47,
        117
      ]
    },
    "private": 1,
    "profiles": [
      {
        "acodec": {
          "type": "Buffer",
          "data": [
            87,
            254,
            34
          ]
        },
        "height": 302,
        "vcodec": {
          "type": "Buffer",
          "data": [
            67,
            167
            36,
            48
          ]
        },
        "width": 720
      }
    ]
  },
  "infoBuffer": {
    "type": "Buffer",
    "data": [
      56,
      67,
      87,
      14,
      231,
      56
    ]
  },
  "infoHash": "85c1459abd2647aa68095ecdf4a87081",
  "infoHashBuffer": {
    "type": "Buffer",
    "data": [
      56,
      76,
      121,
      23
    ]
  },
  "name": "Interstellar.2014.TRUEFRENCH.BRRip.XviD-Slay3R.avi",
  "private": true,
  "created": "2018-02-24T17:59:05.000Z",
  "createdBy": "Torrent RW PHP Class - http://github.com/adriengibrat/torrent-rw",
  "announce": [
    "http://jack.yggtorrent.com:8080/<empty-key>/announce"
  ],
  "urlList": [],
  "files": [
    {
      "path": "Interstellar.2014.TRUEFRENCH.BRRip.XviD-Slay3R.avi",
      "name": "Interstellar.2014.TRUEFRENCH.BRRip.XviD-Slay3R.avi",
      "length": 1497447860,
      "offset": 0
    }
  ],
  "length": 1497447860,
  "pieceLength": 2097152,
  "lastPieceLength": 81332,
  "pieces": [
    "b7aa36ecd8a6e4d54ff657703bd2d041f21d3918",
    "f8f7ff1f937a699c79542766f2619bc4fd1eca73",
    "177db4e3b8a052fd6705e15984c8fbbfd19891d9",
    "8d4ad06dee51b5a83f41472a316a4f6775f9225f",
    "0f03da9db582cb680441776e84890980944fa40f"
  ]
}
```
