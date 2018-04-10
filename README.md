Yggtorrent
====
### Yggtorrent Web crawler client

A crawler client for the [Yggtorrent V3.0 website](https://yggtorrent.is) that works in node

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
client.get_torrent(function(buf, error) {
	// `buf` is a Buffer or null, `error` is string or null
	if (error)
		console.log(error);
	else
	{
		var parsed = require('parse-torrent')(buf);
		console.log(parsed);
	}
}, id);

// get top day torrents
client.get_top_day(function(result, error) {
	if (error)
		console.log(error);
	else
		console.log(result);
});

// get top week torrents
client.get_top_week(function(result, error) {
	if (error)
		console.log(error);
	else
		console.log(result);
});

// get top month torrents
client.get_top_month(function(result, error) {
	if (error)
		console.log(error);
	else
		console.log(result);
});

// get most seeded torrents
client.get_mostseeded(function(result, error) {
	if (error)
		console.log(error);
	else
		console.log(result);
});

// get most completed torrents
client.get_mostcompleted(function(result, error) {
	if (error)
		console.log(error);
	else
		console.log(result);
});
```

Categories Output
-----
```javascript
client.get_categories(console.log);
```
```json
[
  {
    "value": "all",
    "selected": ""
  },
  {
    "value": "2145",
    "data-categorie": "FilmVidéo",
    "cats": [
      {
        "value": "all",
        "data-categorie": "-- Toutes les sous-catégories --"
      },
      {
        "value": "2178",
        "data-categorie": "Animation"
      },
      {
        "value": "2179",
        "data-categorie": "Animation Série"
      },
      {
        "value": "2180",
        "data-categorie": "Concert"
      },
      {
        "value": "2181",
        "data-categorie": "Documentaire"
      },
      {
        "value": "2182",
        "data-categorie": "Emission TV"
      },
      {
        "value": "2183",
        "data-categorie": "Film"
      },
      {
        "value": "2184",
        "data-categorie": "Série TV"
      },
      {
        "value": "2185",
        "data-categorie": "Spectacle"
      },
      {
        "value": "2186",
        "data-categorie": "Sport"
      },
      {
        "value": "2187",
        "data-categorie": "Vidéo-clips"
      }
    ]
  },
  {
    "value": "2139",
    "data-categorie": "Audio",
    "cats": [
      {
        "value": "all",
        "data-categorie": "-- Toutes les sous-catégories --"
      },
      {
        "value": "2147",
        "data-categorie": "Karaoké"
      },
      {
        "value": "2148",
        "data-categorie": "Musique"
      },
      {
        "value": "2150",
        "data-categorie": "Podcast Radio"
      },
      {
        "value": "2149",
        "data-categorie": "Samples"
      }
    ]
  },
  {
    "value": "2144",
    "data-categorie": "Application",
    "cats": [
      {
        "value": "all",
        "data-categorie": "-- Toutes les sous-catégories --"
      },
      {
        "value": "2177",
        "data-categorie": "Autre"
      },
      {
        "value": "2176",
        "data-categorie": "Formation"
      },
      {
        "value": "2171",
        "data-categorie": "Linux"
      },
      {
        "value": "2172",
        "data-categorie": "MacOS"
      },
      {
        "value": "2174",
        "data-categorie": "Smartphone"
      },
      {
        "value": "2175",
        "data-categorie": "Tablette"
      },
      {
        "value": "2173",
        "data-categorie": "Windows"
      }
    ]
  },
  {
    "value": "2142",
    "data-categorie": "Jeu-vidéo",
    "cats": [
      {
        "value": "all",
        "data-categorie": "-- Toutes les sous-catégories --"
      },
      {
        "value": "2167",
        "data-categorie": "Autre"
      },
      {
        "value": "2159",
        "data-categorie": "Linux"
      },
      {
        "value": "2160",
        "data-categorie": "MacOS"
      },
      {
        "value": "2162",
        "data-categorie": "Microsoft"
      },
      {
        "value": "2163",
        "data-categorie": "Nintendo"
      },
      {
        "value": "2165",
        "data-categorie": "Smartphone"
      },
      {
        "value": "2164",
        "data-categorie": "Sony"
      },
      {
        "value": "2166",
        "data-categorie": "Tablette"
      },
      {
        "value": "2161",
        "data-categorie": "Windows"
      }
    ]
  },
  {
    "value": "2140",
    "data-categorie": "eBook",
    "cats": [
      {
        "value": "all",
        "data-categorie": "-- Toutes les sous-catégories --"
      },
      {
        "value": "2151",
        "data-categorie": "Audio"
      },
      {
        "value": "2152",
        "data-categorie": "Bds"
      },
      {
        "value": "2153",
        "data-categorie": "Comics"
      },
      {
        "value": "2154",
        "data-categorie": "Livres"
      },
      {
        "value": "2155",
        "data-categorie": "Mangas"
      },
      {
        "value": "2156",
        "data-categorie": "Presse"
      }
    ]
  },
  {
    "value": "2141",
    "data-categorie": "Emulation",
    "cats": [
      {
        "value": "all",
        "data-categorie": "-- Toutes les sous-catégories --"
      },
      {
        "value": "2157",
        "data-categorie": "Emulateurs"
      },
      {
        "value": "2158",
        "data-categorie": "Roms"
      }
    ]
  },
  {
    "value": "2143",
    "data-categorie": "GPS",
    "cats": [
      {
        "value": "all",
        "data-categorie": "-- Toutes les sous-catégories --"
      },
      {
        "value": "2168",
        "data-categorie": "Applications"
      },
      {
        "value": "2169",
        "data-categorie": "Cartes"
      },
      {
        "value": "2170",
        "data-categorie": "Divers"
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
Général
Nom complet                              : I:\Download\Interstellar.2014.TRUEFRENCH.BRRip.XviD-Slay3R.avi
Format                                   : AVI
Format/Info                              : Audio Video Interleave
Profil du format                         : OpenDML
Taille du fichier                        : 1,39 Gio
Durée                                    : 2 h 48 min
Débit global moyen                       : 1 182 kb/s
Nom du film                              : Interstellar.2014.TRUEFRENCH.BRRip.x264.AC3-SVR
Application utilisée                     : Lavf54.63.104

Vidéo
ID                                       : 0
Format                                   : xvid
Identifiant du codec                     : xvid
Durée                                    : 2 h 48 min
Débit                                    : 1 039 kb/s
Largeur                                  : 720 pixels
Hauteur                                  : 302 pixels
Format à l'écran                         : 2,40:1
Images par seconde                       : 23,976 (24000/1001) Im/s
Type de balayage                         : Progressif
Bits/(Pixel*Image)                       : 0.199
Taille du flux                           : 1,23 Gio (88%)

Audio
ID                                       : 1
Format                                   : MPEG Audio
Version du format                        : Version 1
Profil du format                         : Layer 3
Paramètres du format                     : Joint stereo / MS Stereo
Identifiant du codec                     : 55
Identifiant du codec/Suggestion          : MP3
Durée                                    : 2 h 48 min
Type de débit                            : Constant
Débit                                    : 128 kb/s
Canaux                                   : 2 canaux
Echantillonnage                          : 48,0 kHz
Mode de compression                      : Avec perte
Taille du flux                           : 155 Mio (11%)
Alignement                               : Alignée sur les interleaves
Imbrication, durée                       : 24  ms (0,58 image vidéo)
```

Info Output
-----
```javascript
client.get_info(console.log, '185378');
```
```html
<b>Interstellar<br><br></b>
<img src="http://images.allocine.fr/r_600_800/pictures/13/12/14/18/58/283415.jpg" alt="283415.jpg"><br><br><a href="https://streetprez.com/"><img src="https://img.streetprez.com/fr_FR/blanc/information_film.png" alt="information_film.png"><br></a>
<b>Origine :</b>
<i> U.S.A.<br></i>
<b>R&#xE9;alisateur :</b>
<i> Christopher Nolan<br></i>
<b>Acteurs :</b>
<i> Matthew McConaughey, Anne Hathaway, Michael Caine, John Lithgow, Jessica Chastain<br></i>
<b>Genre :</b>
<i> Science fiction, Drame<br></i>
<b>Dur&#xE9;e :</b>
<i> 2h 49min<br></i>
<b>Date de sortie :</b>
<i> 05 Novembre 2014<br></i>
<b>Ann&#xE9;e de production :</b>
<i> 2014<br></i>
<b>Titre original :</b>
<i> Interstellar<br></i>
<b>Critiques Spectateurs :</b>
 <img src="https://img.streetprez.com/note/45.png" alt="45.png"><i> 4.5<br></i>
<b>Critiques Presses :</b>
 <img src="https://img.streetprez.com/note/40.png" alt="40.png"><i> 3.8<br></i>
<b></b>
<br><i><a href="http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19547238"></a>
</i>
<a href="https://streetprez.com/"><img src="https://img.streetprez.com/fr_FR/blanc/synopsis.png" alt="synopsis.png"><br><br></a>
Le film raconte les aventures d&#x2019;un groupe d&#x2019;explorateurs qui utilisent une faille r&#xE9;cemment d&#xE9;couverte dans l&#x2019;espace-temps afin de repousser les limites humaines et partir &#xE0; la conqu&#xEA;te des distances astronomiques dans un voyage interstellaire.&#xA0;<br><br><a href="https://streetprez.com/"><img src="https://img.streetprez.com/fr_FR/blanc/information_upload.png" alt="information_upload.png"><br></a>
<b>Qualit&#xE9; :</b>
<i> BDRIP<br></i>
<b>Format :</b>
<i> Avi<br></i>
<b>Langue :</b>
<i> <img src="https://img.streetprez.com/flag/fr_FR.png" alt="fr_FR.png"> True French, <img src="https://img.streetprez.com/flag/fr_CA.png" alt="fr_CA.png"> Fran&#xE7;ais<br></i>
<b>Codec vid&#xE9;o :</b>
<i> XviD &#xE0; 1039kbps<br></i>
<b>Codec audio :</b>
<i> MP3 &#xE0; 128kbps<br><br></i>
<a href="https://streetprez.com/"><img src="https://img.streetprez.com/fr_FR/blanc/information_download.png" alt="information_download.png"><br></a>
<b>Tailles des fichiers :</b>
<i> 1 x 1390 Mo<br></i>
<b>Taille totale :</b>
<i> 1390 Mo<br><br></i>
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
    "type_id": "2183",
    "type": "Film",
    "torrent": "Dunkerque 2017 Multi TrueFrench BluRay 1080p HDlight X264 AC3-mHDgz",
    "id": "148799",
    "compl": "49328",
    "age": "3 mois",
    "size": "2.78GB",
    "s": "960",
    "l": "21"
  },
  {
    "type_id": "2183",
    "type": "Film",
    "torrent": "Valérian et la Cité des mille planètes MULTI (VFI) 1080p HD-Light x264 AC3-ACOOL",
    "id": "128845",
    "compl": "43139",
    "age": "4 mois",
    "size": "3.54GB",
    "s": "646",
    "l": "4"
  },
  {
    "type_id": "2183",
    "type": "Film",
    "torrent": "Wind River 2017 Multi 1080p HDlight X264 AC3-mHDgz",
    "id": "124601",
    "compl": "41467",
    "age": "4 mois",
    "size": "1.87GB",
    "s": "783",
    "l": "8"
  },
  {
    "type_id": "2183",
    "type": "Film",
    "torrent": "Pirates des Caraibes : La Vengeance de Salazar (2017) VFF-ENG AC3-DTS BluRay 1080p x264.GHT (Pirates of the Caribbean : Dead Men Tell No Tales)",
    "id": "96876",
    "compl": "39273",
    "age": "6 mois",
    "size": "3.80GB",
    "s": "514",
    "l": "5"
  },
  ...
]
```

Get top day torrent Output
-----
```javascript
client.get_top_day(function(result, error) {
	if (error)
		console.log(error);
	else
		console.log(result);
});
```
```json
[
  {
    "type_id": "2148",
    "type": "Musique",
    "torrent": "Queen of the stone age : Rated R, FLAC 16bit 44100hz 1030Kbps",
    "id": "224985",
    "compl": "0",
    "age": "19 minutes",
    "size": "768.08MB",
    "s": "1",
    "l": "0"
  },
  {
    "type_id": "2148",
    "type": "Musique",
    "torrent": "Curtis Knight and The Squires ft. J. Hendrix - You Cant Use My Name - The RSVP / PPX Sessions (2018) [FLAC - 16BITS - 44.1KHZ]",
    "id": "224984",
    "compl": "0",
    "age": "33 minutes",
    "size": "293.78MB",
    "s": "1",
    "l": "0"
  },
  {
    "type_id": "2148",
    "type": "Musique",
    "torrent": "[Mekanik Metal Disco] Sebkha-Chott_ - De l'Existence de la Mythologie Chottienne en 7 Cycles (2004) [MP3-320]",
    "id": "224980",
    "compl": "0",
    "age": "39 minutes",
    "size": "124.90MB",
    "s": "1",
    "l": "1"
  },
  {
    "type_id": "2148",
    "type": "Musique",
    "torrent": "[Mekanik Metal Disco] Sebkha-Chott_ - De l'Existence de la Mythologie Chottienne en 7 Cycles (2004) [FLAC-16]",
    "id": "224979",
    "compl": "0",
    "age": "39 minutes",
    "size": "386.06MB",
    "s": "1",
    "l": "0"
  },
  ...
]
```

Get top week torrent Output
-----
```javascript
client.get_top_week(function(result, error) {
	if (error)
		console.log(error);
	else
		console.log(result);
});
```
```json
[
  {
    "type_id": "2183",
    "type": "Film",
    "torrent": "Star.Wars.The.Last.Jedi.2017.MULTI.TRUEFRENCH.1080p.BluRay.Light.x264.AC3-ACOOL",
    "id": "221851",
    "compl": "4060",
    "age": "6 jours",
    "size": "3.71GB",
    "s": "1566",
    "l": "28"
  },
  {
    "type_id": "2184",
    "type": "Série TV",
    "torrent": "The.Walking.Dead.S08E15.VOSTFR.720p.AMZN.WEB-DL.DD5.1.H264-ARK01",
    "id": "224531",
    "compl": "2707",
    "age": "1 jour",
    "size": "1.73GB",
    "s": "1200",
    "l": "14"
  },
  {
    "type_id": "2184",
    "type": "Série TV",
    "torrent": "The.Walking.Dead.S08E14.VOSTFR.720p.AMZN.WEB-DL.DD5.1.H264-ARK01",
    "id": "220944",
    "compl": "3555",
    "age": "8 jours",
    "size": "1.60GB",
    "s": "1100",
    "l": "4"
  },
  {
    "type_id": "2183",
    "type": "Film",
    "torrent": "Dunkerque 2017 Multi TrueFrench BluRay 1080p HDlight X264 AC3-mHDgz",
    "id": "148799",
    "compl": "49330",
    "age": "3 mois",
    "size": "2.78GB",
    "s": "984",
    "l": "17"
  },
  ...
]
```

Get top month torrent Output
-----
```javascript
client.get_top_month(function(result, error) {
	if (error)
		console.log(error);
	else
		console.log(result);
});
```
```json
[
  {
    "type_id": "2183",
    "type": "Film",
    "torrent": "Star.Wars.The.Last.Jedi.2017.MULTI.TRUEFRENCH.1080p.BluRay.Light.x264.AC3-ACOOL",
    "id": "221851",
    "compl": "4060",
    "age": "6 jours",
    "size": "3.71GB",
    "s": "1566",
    "l": "28"
  },
  {
    "type_id": "2184",
    "type": "Série TV",
    "torrent": "The.Walking.Dead.S08E15.VOSTFR.720p.AMZN.WEB-DL.DD5.1.H264-ARK01",
    "id": "224531",
    "compl": "2707",
    "age": "1 jour",
    "size": "1.73GB",
    "s": "1200",
    "l": "14"
  },
  {
    "type_id": "2184",
    "type": "Série TV",
    "torrent": "The.Walking.Dead.S08E14.VOSTFR.720p.AMZN.WEB-DL.DD5.1.H264-ARK01",
    "id": "220944",
    "compl": "3555",
    "age": "8 jours",
    "size": "1.60GB",
    "s": "1100",
    "l": "4"
  },
  {
    "type_id": "2183",
    "type": "Film",
    "torrent": "Dunkerque 2017 Multi TrueFrench BluRay 1080p HDlight X264 AC3-mHDgz",
    "id": "148799",
    "compl": "49330",
    "age": "3 mois",
    "size": "2.78GB",
    "s": "984",
    "l": "17"
  },
  ...
]
```

Get most seeded torrent Output
-----
```javascript
client.get_mostseeded(function(result, error) {
	if (error)
		console.log(error);
	else
		console.log(result);
});
```
```json
[
  {
    "type_id": "2148",
    "type": "Musique",
    "torrent": "hans zimmer - interstellar - Illuminated Star Projection Edition FLAC",
    "id": "7344",
    "compl": "135",
    "age": "9 mois",
    "size": "543.94MB",
    "s": "2",
    "l": "0"
  },
  {
    "type_id": "2148",
    "type": "Musique",
    "torrent": "(Soundtrack) Hans Zimmer - Interstellar (Version Vinyl) [FLAC - 24 bits] 2015",
    "id": "116948",
    "compl": "0",
    "age": "5 mois",
    "size": "1.35GB",
    "s": "0",
    "l": "0"
  },
  {
    "type_id": "2148",
    "type": "Musique",
    "torrent": "[RE-UP] (Soundtrack) Hans Zimmer - Interstellar (Version Vinyl) [FLAC - 24 bits] 2015",
    "id": "118924",
    "compl": "305",
    "age": "5 mois",
    "size": "1.35GB",
    "s": "4",
    "l": "0"
  },
  {
    "type_id": "2148",
    "type": "Musique",
    "torrent": "Hans Zimmer - Interstellar OST (Deluxe) 2014",
    "id": "39458",
    "compl": "317",
    "age": "8 mois",
    "size": "225.08MB",
    "s": "2",
    "l": "0"
  },
  ...
]
```

Get most completed torrent Output
-----
```javascript
client.get_mostcompleted(function(result, error) {
	if (error)
		console.log(error);
	else
		console.log(result);
});
```
```json
[
  {
    "type_id": "2147",
    "type": "Karaoké",
    "torrent": "[KARAOKE]KARAOKE LETTRE M (128kbps)",
    "id": "222151",
    "compl": "67",
    "age": "5 jours",
    "size": "1.66GB",
    "s": "23",
    "l": "3"
  },
  {
    "type_id": "2147",
    "type": "Karaoké",
    "torrent": "[KARAOKE]KARAOKE LETTRE L (128kbps)",
    "id": "222145",
    "compl": "54",
    "age": "5 jours",
    "size": "5.85GB",
    "s": "22",
    "l": "2"
  },
  {
    "type_id": "2148",
    "type": "Musique",
    "torrent": "Jimi Hendrix - Ultra Rare Trax-   1994-MP3-320kbps",
    "id": "224570",
    "compl": "45",
    "age": "1 jour",
    "size": "175.06MB",
    "s": "30",
    "l": "0"
  },
  {
    "type_id": "2148",
    "type": "Musique",
    "torrent": "[Mp3 320Kbps] Gilbert Becaud  (Best of Coffret 3 CD) 2009 (remasterisé)",
    "id": "224562",
    "compl": "46",
    "age": "1 jour",
    "size": "403.76MB",
    "s": "27",
    "l": "1"
  },
  ...
]
```

Download torrent Output
-----
```javascript
client.get_torrent(function(buf, error) {
	// `buf` is a Buffer or null, `error` is string or null
	if (error)
		console.log(error);
	else
	{
		var parsed = require('parse-torrent')(buf);
		console.log(parsed);
	}
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
    "http://tracker.ygg.is:8080/<empty-key>/announce"
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
