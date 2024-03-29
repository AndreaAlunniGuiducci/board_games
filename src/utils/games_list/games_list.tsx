import { Game } from "../../types/game.types";
import craniumImage from "../../image/cranium_image.jpg";

const games: Game[] = [
  {
    id: "001",
    image: craniumImage,
    name: "Cranium",
    categories: ["party_game"],
    minPlayer: 4,
    maxPlayer: 99,
    playerAge: 16,
    playTime: 60,
    description:
      "Cranium è un gioco estremamente divertente e dà ai giocatori la possibilità di mostrare il loro talento! I giocatori formano le squadre e girano attorno al tabellone completando attività suddivise in 4 categorie di colori diversi: Creative Cat, Data Head, Star Performer, and Word Worm. Una squadra pesca una carta della categoria corrispondente alla sua casella sul tabellone e deve successivamente completare l'attività prima che finisca il tempo. Sillabare una parola al contrario, disegnare a occhi chiusi e risolvere un puzzle sono solo alcune delle attività che potreste dover svolgere. La prima squadra che raggiunge la casella Cranium Central e completa un'ultima sfida vince! Comprende 600 carte, 4 pedine, Cranium Clay, timer, dado, 1 blocco notes e le istruzioni.",
  },
  {
    id: "002",
    image: "",
    name: "Callisto",
    categories: ["euro", "filler"],
    maxPlayer: 4,
    minPlayer: 2,
    playerAge: 7,
    playTime: 20,
    description:
      "Callisto è un avvincente gioco di strategia, dove analisi e previsione sono fondamentali per portare avanti il proprio gioco e neutralizzare quello degli avversari. Come primo impatto ricorda molto il gioco del Tetris, per la somiglianza dei pezzi ai famosi tetramini e la meccanica degli incastri. Tuttavia qui non ci sono righe da eliminare, lo scopo è quello di piazzare le proprie tessere, intralciando nel contempo gli avversari.",
  },
  {
    id: "003",
    image: "",
    name: "Kaleidos",
    categories: ["kids"],
    minPlayer: 2,
    maxPlayer: 99,
    playerAge: 5,
    playTime: 45,
    description:
      "In Kaleidos lo scopo del gioco, riuscire a identificare all’interno di immagini appositamente realizzate il maggior numero di soggetti il cui nome inizia con la lettera selezionata. Ogni immagine contiene un incredibile numero di soggetti diversi, ma con la fantasia è possibile identificare anche quelli non immediatamente visibili. Rapido, veloce e in un’elegante confezione metallica, è perfetto anche per gruppi numerosi, suddivisi in squadre.",
  },
  {
    id: "004",
    image: "",
    name: "Geniale",
    categories: ["euro"],
    minPlayer: 1,
    maxPlayer: 4,
    playerAge: 8,
    playTime: 45,
    description:
      "Un gioco astratto di strategia in cui i partecipanti cercheranno di utilizzare le tessere di domino a loro disposizione per totalizzare il maggior numero di punti vittoria. I punti vengono assegnati per i simboli dello stesso tipo accoppiati sul tabellone e la partita termina quando non sarà più possibile aggiungere ulteriori pezzi. Bisognerà cercare di far avanzare tutti i colori il più possibile, poiché ognuno di essi avrà un tracciato del punteggio indipendente. Alla fine della partita il punteggio di ogni partecipante verrà determinato dal colore con cui ha totalizzato il minor numero di punti. Semplicità delle regole, partite sempre differenti e buon livello di strategia rendono il titolo adatto a tutta la famiglia.",
  },
  {
    id: "005",
    image: "",
    name: "Olympus",
    categories: ["euro", "management"],
    minPlayer: 3,
    maxPlayer: 5,
    playerAge: 14,
    playTime: 90,
    description:
      "Nell’Antica Grecia, le poleis (città-stato) prosperarono incrementando la propria popolazione e cultura, facendosi occasionalmente guerra l’un l’altra, erigendo edifici e celebrando cerimonie per ottenere il favore delle divinità che abitavano sul Monte Olimpo. Tu guiderai una di queste città-stato (come Atene, Sparta, Corinto, Tebe, Argo e altre) espandendola e adorando le varie divinità per diventare la potenza egemone del Peloponneso.",
  },
  {
    id: "006",
    image: "",
    name: "Catan",
    categories: ["euro"],
    minPlayer: 2,
    maxPlayer: 4,
    playTime: 90,
    playerAge: 10,
    description:
      "Alcuni marinai sono sbarcati sulla costa di un'isola sconosciuta che hanno battezzato Catan. Grazie al legno che raccolgono uomini e donne costruiscono insieme le case delle prime colonie. L'isola è ricca e ci sono molte materie prime disponibili, si costruiscono le strade e le colonie diventano presto delle città. Nello sviluppo di questa civiltà il baratto gioca un ruolo primario, visto che alcune volte può esserci argilla in abbondanza, mentre altre c'è più minerale. Si scambia questo per quello a seconda dei bisogni del momento. Le colonie prosperano e l'influenza di queste aumenta, combatti per avere il predominio territoriale di Catan!",
  },
  {
    id: "007",
    image: "",
    name: "Lillero",
    categories: ["management", "euro"],
    minPlayer: 2,
    maxPlayer: 4,
    playerAge: 8,
    playTime: 90,
    description:
      "Gioco da tavolo personalizzato in dialetto perugino. Lo scopo del gioco è diventare il governante di Perugia, affittando, comprando e vendendo i “poderi” presenti sul tabellone, fino al possedimento di tutti i 5 Rioni.",
  },
  {
    id: "008",
    image: "",
    name: "Dixit",
    categories: ["party_game"],
    minPlayer: 2,
    maxPlayer: 6,
    playerAge: 8,
    playTime: 30,
    description:
      "Le immagini sono state rivelate. Tutte hanno una cosa in comune: una frase enigmatica! Ora state attenti... solo una delle immagini è la Chiave! Usate fiuto e intuizione per trovarla, evitando le trappole degli altri giocatori! Dixit, un gioco sorprendente e divertente da giocare in famiglia o con gli amici! Ogni giocatore avrà una mano di carte (molto grandi) con bizzarre ma stupende illustrazioni. Il Narratore sceglierà segretamente una delle sue carte fornendone una breve (troppo breve!) descrizione composta di una frase, o un indizio. Gli altri giocatori selezioneranno segretamente quale delle loro carte possa identificarsi nella descrizione... e una volta che le carte vengono selezionate, ogni giocatore selezionerà segretamente quale sia la carta giusta!",
  },
  {
    id: "009",
    image: "",
    name: "Ka-Woom",
    categories: ["kids"],
    minPlayer: 2,
    maxPlayer: 5,
    playerAge: 6,
    playTime: 30,
    description:
      "Mentre il mastro costruttore è intento a erigere le sue torri, l'obiettivo degli altri giocatori e delle loro catapulte è uno solo: fuoco a volontà! Ma non tutti i colpi vanno a segno e le munizioni sono limitate. Solo se ci saranno ancora torri in piedi alla fine del round il costruttore otterrà punti.",
  },
  {
    id: "010",
    image: "",
    name: "Sherlock Holmes",
    categories: ["investigatives", "party_game"],
    minPlayer: 1,
    maxPlayer: 99,
    playerAge: 10,
    playTime: 60,
    description:
      "I giocatori interpretano dei membri della banda ufficiosa degli Irregolari di Baker Street, una squadra formata da Sherlock Holmes per essere informato su ciò che si diceva per le strade e per ottenere supporto nelle indagini più misteriose. Questa scatola presenta dieci casi spinosi che spetterà ai giocatori risolvere.",
  },
  {
    id: "011",
    image: "",
    name: "Joker: a diabolical party game",
    categories: ["party_game", "cards"],
    minPlayer: 3,
    maxPlayer: 6,
    playerAge: 12,
    playTime: 40,
    description:
      "I più folli e pericolosi criminali di Gotham City sono giunti in città, determinati a impadronirsene una volta per tutte! Un gioco Diabolico: sei uno dei 9 Supercriminali che tentano di corrompere e controllare Gotham City! Se vuoi sopravvivere fino alla fine, non dovrai dare nell'occhio! Sarai l'ultimo Supercriminale rimasto o sarà il Joker ad avere la meglio",
  },
  {
    id: "012",
    image: "",
    name: "Level 9",
    categories: ["management"],
    minPlayer: 1,
    maxPlayer: 4,
    playerAge: 8,
    playTime: 20,
    description:
      " In Level 9 tutti i giocatori usano le tessere, numerate da 0 a 9, per fare una costruzione davanti a sé. Più in alto viene piazzata una tessera, più punti vale. All’inizio di ogni turno, si volta la prima carta del mazzo e si annuncia a voce alta il numero riportato; i giocatori prendono dalla scatola una tessera col numero appena annunciato e pensano a come piazzarla nel migliore dei modi davanti a sé, rispettando alcune semplici regole. La partita si svolge in 20 turni; dopo che è stata giocata l’ultima carta del mazzo i giocatori contano il loro punteggio moltiplicando il numero indicato sulle loro tessere per il livello in cui si trovano.",
  },
  {
    id: "013",
    image: "",
    name: "Pandemic - una nuova sfida",
    categories: ["war_game", "cooperative"],
    minPlayer: 2,
    maxPlayer: 4,
    playerAge: 8,
    playTime: 45,
    description:
      "Pandemic - Una Nuova Sfida è un gioco altamente cooperativo in cui ogni giocatore sarà chiamato a collaborare per salvare il pianeta da una terribile epidemia virale. Assumerete un ruolo unico e fondamentale all'interno della vostra squadra, visto che ogni personaggio è dotato di abilità speciali particolari che gli consentono di cavarsela meglio in determinate situazioni. Utilizzare al meglio i talenti di ciascuno è la chiave per ottenere la vittoria dell'intera squadra.",
  },
  {
    id: "014",
    image: "",
    name: "Tubi magici",
    categories: ["euro", "party_game", "filler"],
    minPlayer: 1,
    maxPlayer: 8,
    playerAge: 10,
    playTime: 20,
    description:
      "Tubi Magici è una divertente sfida di logica in cui dovrete realizzare una contorta rete di tubi sulla vostra plancia, cercando di concatenarne di più lunghi possibile dello stesso colore. Ad ogni partita avrete accesso ad un set di tessere diverse, in modo da rendere ogni sfida sempre nuova e divertente, inoltre vi sfiderete utilizzando le stesse tessere presentate nello stesso ordine, in modo da poter determinare con certezza chi sia il giocatore più logico al tavolo!",
  },
  {
    id: "015",
    image: "",
    name: "Top ten",
    categories: ["party_game", "cooperative"],
    minPlayer: 4,
    maxPlayer: 9,
    playerAge: 14,
    playTime: 30,
    description:
      "Top Ten è un party game collaborativo. Un giocatore a turno, Capitan Ten, deve mettere in ordine le risposte degli altri giocatori. Si sceglie un tema che indica una intensità particolare delle risposte (es. dalla più utile alla meno utile, dalla peggiore alla migliore,…). I giocatori dovranno dare risposte con intensità in base al numero della carta che hanno in mano (dalla numero 1 alla numero 10). Il Capitan Ten dovrà indovinare l’ordine delle risposte. Riuscirete a superare il quinto turno, senza aver accumulato tutti i gettoni… cacca?",
  },
  {
    id: "016",
    image: "",
    name: "Tokyo train",
    categories: ["party_game", "filler"],
    minPlayer: 4,
    maxPlayer: 8,
    playerAge: 8,
    playTime: 10,
    description:
      "Hisashiburi! Kyokugaiska! Tokosishemu?!?... Alla guida di un gruppo di turisti nella capitale dell' ordine e della precisione, dovrete fare i conti a gesti e urla in lingua giapponese con il solerte capotreno che vi indicherà dove far accomodare tutti nel posto loro assegnato. In un tourbillon allegro e frenetico di spinte e valigie, con l'occhio alla mimica dei gesti e l'orecchio agli ordini secchi, dovrete riportare la quiete e l'ordine sudando sette camicie...",
  },
];

export default games;
