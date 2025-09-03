// Esercizio
// Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.✅

// Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”✅
// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)✅
// Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.✅
// Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.✅
// Testare su postman✅

const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server attivo sulla porta http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

const postsEl = [
  {
    titolo: "Il ciambellone",
    contenuto:
      "Sarà che una volta le cose erano più semplici, ma erano anche molto buone. Come la crostata di marmellata, i biscotti o il ciambellone che la nonna preparava anche all'ultimo sapendo che sareste passati per la merenda: uova, zucchero e farina. Niente di più basic ma che tra le sue mani, mescolando e infornando, diventava una delle prelibatezze per accompagnare il succo di frutta al pomeriggio o il latte e caffè al mattino. Ecco la nostra ricetta del ciambellone a quale atmosfera si ispira, quella di casa e genuinità: con una manciata di scorze di limone o di arancia e una spolverata di zucchero a velo renderete questa soffice delizia profumata e invitante. E per una volta sarà la nonna a farvi i complimenti per aver preparato un morbido ciambellone, così buono che non passa mai di moda!",
    immagine: "imgs/ciambellone.jpeg",
    tags: ["blog", "ciambellone", "uova", "zucchero", "farina"],
  },
  {
    titolo: "Cracker alla barbabietola",
    contenuto:
      "I cracker alla barbabietola sono uno snack stuzzicante e originale da preparare in casa utilizzando ingredienti semplici e genuini. Queste sfogliette dal colore brillante non passeranno inosservate nel vostro cestino del pane e arricchiranno la tavola con il loro gusto unico e accattivante. I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola!",
    immagine: "imgs/cracker_barbabietola.jpeg",
    tags: ["blog", "cracker", "barbabietola", "originale"],
  },
  {
    titolo: "Pane fritto dolce",
    contenuto:
      "Il pane fritto dolce è la versione più antica dell’odierno french toast! Una deliziosa ricetta antispreco che le nonne preparavano ai bambini per merenda, utilizzando gli ingredienti che si avevano sempre a disposizione in casa: pane raffermo, uova, latte e zucchero",
    immagine: "imgs/pane_fritto_dolce.jpeg",
    tags: ["blog", "pane", "dolce", "antispreco"],
  },
  {
    titolo: "Pasta alla barbabietola",
    contenuto:
      "Si tratta di un impasto a base di farina e barbabietole precotte, con aggiunta dell'uovo per dare più corpo ed elasticità: perfetta per ravioli burro e salvia, sfoglie per lasagne, maltagliati oppure gustose e primaverili tagliatelle alla barbabietola con asparagi. La barbabietola, con il suo vivace color amaranto, è una gustosa tintura al naturale, perfetta per ravvivare i vostri impasti!",
    immagine: "imgs/pasta_barbabietola.jpeg",
    tags: ["blog", "pasta", "barbabietola", "ravvivare"],
  },
  {
    titolo: "Torta paesana",
    contenuto:
      "La torta paesana è un dolce di origine lombarda e precisamente della Brianza, la zona compresa tra la provincia a nord di Milano e il lago di Lecco-Como. E’ un dolce di origine contadina, dalle infinite varianti, ma realizzata principalmente con pane raffermo bagnato nel latte. E’ infatti conosciuta anche come torta di pane o, in dialetto locale, “michelacc” ovvero mica e lac (pane e latte). A seconda dei gusti e delle disponibilità del momento, al pane ammollato ogni famiglia univa ingredienti diversi, chi l’uvetta o chi i pinoli ad esempio. Perfetta da gustare per una merenda dal sapore rustico, la torta paesana è un perfetto dolce di recupero quando si ha del pane avanzato… ed è ancora più buona il giorno dopo!",
    immagine: "imgs/torta_paesana.jpeg",
    tags: ["blog", "torta", "pane", "latte"],
  },
];

app.get("/bacheca", (req, res) => {
  res.json({ posts: postsEl });
});
