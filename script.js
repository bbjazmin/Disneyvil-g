/* =============================================================
   DISNEY VILÁG – JavaScript
   Iskolai projekt – 12. évfolyamos technikumi
   ============================================================= */

// ===== KARAKTEREK ADATBÁZISA =====
// Minden karakternek van egy egyedi "key" mezője, amit a teszt pontozása használ
const characters = [
    // --- HERCEGNŐK ---
    {
        key: "snow",
        name: "Hófehérke",
        movie: "Hófehérke és a hét törpe",
        category: "hercegno",
        emoji: "🍎",
        gradient: "linear-gradient(135deg, #ff6b9d 0%, #ffd1dc 100%)",
        description: "Az első Disney-hercegnő, aki kedvességével és ártatlanságával varázsolja el a világot. A törpék barátja, az erdő állatai védelmezője.",
        traits: ["kedves", "ártatlan", "segítőkész", "türelmes"]
    },
    {
        key: "cinderella",
        name: "Hamupipőke",
        movie: "Hamupipőke",
        category: "hercegno",
        emoji: "👠",
        gradient: "linear-gradient(135deg, #a8c0ff 0%, #d4e0ff 100%)",
        description: "Türelemmel és reménnyel viseli a nehézségeket, és hisz benne, hogy az álmok valóra válhatnak. A palotabál csillaga.",
        traits: ["türelmes", "reménykedő", "szorgalmas", "kedves"]
    },
    {
        key: "aurora",
        name: "Aurora",
        movie: "Alvajáró",
        category: "hercegno",
        emoji: "🌹",
        gradient: "linear-gradient(135deg, #ff8fab 0%, #ffb8d1 100%)",
        description: "Csipkerózsa hercegnője, az álmodozó lélek, aki a szeretet erejével ébredt fel százéves álmából.",
        traits: ["álmodozó", "elegáns", "romantikus", "szelíd"]
    },
    {
        key: "ariel",
        name: "Ariel",
        movie: "A kis hableány",
        category: "hercegno",
        emoji: "🧜‍♀️",
        gradient: "linear-gradient(135deg, #4fc3f7 0%, #26c6da 100%)",
        description: "Kíváncsi és kalandvágyó tengeri hercegnő, aki mindent elkövet, hogy felfedezze a felszíni világot és szerelmét.",
        traits: ["kíváncsi", "kalandvágyó", "romantikus", "bátor"]
    },
    {
        key: "belle",
        name: "Belle",
        movie: "A szépség és a szörnyeteg",
        category: "hercegno",
        emoji: "📚",
        gradient: "linear-gradient(135deg, #f9d423 0%, #ff8e53 100%)",
        description: "Intelligens, szeret olvasni, és a belső értékeket látja meg a Szörnyetegben. A város különcének tartják, de ő büszke rá.",
        traits: ["intelligens", "bátor", "kedves", "különc"]
    },
    {
        key: "jazmin",
        name: "Jázmin",
        movie: "Aladdin",
        category: "hercegno",
        emoji: "🌙",
        gradient: "linear-gradient(135deg, #00b09b 0%, #96c93d 100%)",
        description: "Független és szabadszármás hercegnő, aki maga akarja megválasztani a szerelmét. Agrabah bátor uralkodójává válik.",
        traits: ["független", "bátor", "szabadszármás", "kalandvágyó"]
    },
    {
        key: "poca",
        name: "Pocahontas",
        movie: "Pocahontas",
        category: "hercegno",
        emoji: "🍃",
        gradient: "linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)",
        description: "A természet lánya, aki a folyami szellők útmutatását követi. Híd a két világ – az őslakók és a telepesek – között.",
        traits: ["bátor", "természetkedvelő", "bölcs", "kíváncsi"]
    },
    {
        key: "mulan",
        name: "Mulan",
        movie: "Mulan",
        category: "hercegno",
        emoji: "⚔️",
        gradient: "linear-gradient(135deg, #fc5c7d 0%, #6a82fb 100%)",
        description: "Bár a lánygyermek szerepbe kényszerítik, apja helyett katonának áll. Hősiességgel és hűséggel menti meg Kínát.",
        traits: ["bátor", "hűséges", "eltökélt", "önzetlen"]
    },
    {
        key: "tiana",
        name: "Tiana",
        movie: "A hercegnő és a béka",
        category: "hercegno",
        emoji: "🐸",
        gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
        description: "Szorgalmas és ambiciózus hercegnő, aki kemény munkával éri el álmait. New Orleans éjszakai varázslatának hőse.",
        traits: ["szorgalmas", "ambiciózus", "gyakorlatias", "eltökélt"]
    },
    {
        key: "rapun",
        name: "Rapunzel",
        movie: "Aranyhaj",
        category: "hercegno",
        emoji: "✂️",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        description: "Kreatív és kíváncsi lelkek, aki hosszú aranyhajával is kalandokra vállalkozik. A lámpások éjszakájának felfedezője.",
        traits: ["kreatív", "kíváncsi", "bátor", "hűséges"]
    },
    {
        key: "merida",
        name: "Merida",
        movie: "Merida",
        category: "hercegno",
        emoji: "🏹",
        gradient: "linear-gradient(135deg, #ff512f 0%, #dd2476 100%)",
        description: "Skót hercegnő, aki nem hajlandó fejet hajtani a hagyományok előtt. Bátor, makacs, és az íjában a legjobb.",
        traits: ["bátor", "makacs", "független", "lobbanékony"]
    },
    {
        key: "elsa",
        name: "Elsa",
        movie: "Jégvarázs",
        category: "hercegno",
        emoji: "❄️",
        gradient: "linear-gradient(135deg, #74ebd5 0%, #acb6e5 100%)",
        description: "A jégkirálynő, aki megtanulja elfogadni varázserejét. Hatalmas, tartózkodó, de szíve mélyén szerető.",
        traits: ["hatalmas", "tartózkodó", "felelősségteljes", "védő"]
    },
    {
        key: "anna",
        name: "Anna",
        movie: "Jégvarázs",
        category: "hercegno",
        emoji: "❤️",
        gradient: "linear-gradient(135deg, #ee9ca7 0%, #ffd1d1 100%)",
        description: "Elsa húga, optimista és szeretetteljes lelkülettel. A testvéri szeretet erejével menti meg a világot.",
        traits: ["optimista", "bátor", "szeretetteljes", "spontán"]
    },
    {
        key: "vaiana",
        name: "Vaiana",
        movie: "Vaiana",
        category: "hercegno",
        emoji: "🌊",
        gradient: "linear-gradient(135deg, #36d1dc 0%, #5b86e5 100%)",
        description: "Kalandvágyó polinéz lány, aki az óceán hívó szavára indul útnak. Határozott és bátor megmentő.",
        traits: ["kalandvágyó", "határozott", "bátor", "természetkedvelő"]
    },
    {
        key: "raya",
        name: "Raya",
        movie: "Raya és az utolsó sárkány",
        category: "hercegno",
        emoji: "🐉",
        gradient: "linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)",
        description: "Kumandra harcos lánya, aki a világ megmentésére indul. Magányos harcosból megtanul bízni másokban.",
        traits: ["bátor", "határozott", "önmegőrző", "kíváncsi"]
    },

    // --- ÁLLATOK ---
    {
        key: "simba",
        name: "Simba",
        movie: "Az oroszlánkirály",
        category: "allat",
        emoji: "🦁",
        gradient: "linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%)",
        description: "Az oroszlánkirály kisfiúból felnőtté válik. Bátor vezető, aki megérti a felelősség és a körforgás jelentését.",
        traits: ["bátor", "vezető", "felelősségteljes", "kalandvágyó"]
    },
    {
        key: "bambi",
        name: "Bambi",
        movie: "Bambi",
        category: "allat",
        emoji: "🦌",
        gradient: "linear-gradient(135deg, #83a4d4 0%, #b6fbff 100%)",
        description: "Az erdő hercege, aki félénk kisgidából bölcs szarvasbikává érik. A természet és az élet körforgásának szimbóluma.",
        traits: ["félénk", "kedves", "bölcs", "természetkedvelő"]
    },
    {
        key: "nemo",
        name: "Nemo",
        movie: "Nemo nagy nyomozó",
        category: "allat",
        emoji: "🐠",
        gradient: "linear-gradient(135deg, #ff9a44 0%, #fc6076 100%)",
        description: "Kíváncsi kisfiú-hal, aki egy vakmerő kaland során kerül akváriumba. Született felfedező, akinek csak egy kicsit eltúlzott haja van.",
        traits: ["kíváncsi", "bátor", "makacs", "kalandvágyó"]
    },
    {
        key: "dory",
        name: "Dory",
        movie: "Nemo nagy nyomozó",
        category: "allat",
        emoji: "💙",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        description: "Felejtékeny, de aranyos kék hal, akinek örök optimizmus és segítőkészség a fegyvere. Csak úszik tovább!",
        traits: ["optimista", "segítőkész", "spontán", "bátor"]
    },
    {
        key: "stitch",
        name: "Stitch",
        movie: "Lilo és Stitch",
        category: "allat",
        emoji: "👽",
        gradient: "linear-gradient(135deg, #5b86e5 0%, #36d1dc 100%)",
        description: "A kísérleti űrlény 626-os számú példánya. Rosszcsont, de a család és a hűség ereje révén Lilo mellett megmentővé válik.",
        traits: ["rosszcsont", "hűséges", "játékos", "erős"]
    },
    {
        key: "lilo",
        name: "Lilo",
        movie: "Lilo és Stitch",
        category: "allat",
        emoji: "🌺",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        description: "A hawaii kislány, aki hisz a családban és a barátságban. Bár különc, Stitch elfogadásával megmenti őt és önmagát is.",
        traits: ["különc", "hűséges", "kreatív", "érzelmes"]
    },
    {
        key: "seb",
        name: "Sebastian",
        movie: "A kis hableány",
        category: "allat",
        emoji: "🦀",
        gradient: "linear-gradient(135deg, #ff512f 0%, #f09819 100%)",
        description: "Atlantica komoly rákja, aki a királyi tanácsadó. Bár szigorú, a szíve mélyén segít Ariel kalandjaiban.",
        traits: ["segítőkész", "zene kedvelő", "aggodalmaskodó", "hűséges"]
    },

    // --- KLASSZIKUSOK ---
    {
        key: "mickey",
        name: "Mickey",
        movie: "Mickey egér",
        category: "klasszikus",
        emoji: "🐭",
        gradient: "linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)",
        description: "A Disney szimbóluma! Vidám, barátságos és mindig készen áll egy újabb kalandra. Ő az örök optimista.",
        traits: ["vidám", "barátságos", "kalandvágyó", "optimista"]
    },
    {
        key: "minnie",
        name: "Minnie",
        movie: "Mickey egér",
        category: "klasszikus",
        emoji: "🎀",
        gradient: "linear-gradient(135deg, #ee9ca7 0%, #ffd1ff 100%)",
        description: "Mickey barátnője, édes és divatos. Hűséges társ, aki pöttyös ruháival örök ikonja a Disney-világnak.",
        traits: ["édes", "divatos", "hűséges", "kedves"]
    },
    {
        key: "donald",
        name: "Donald",
        movie: "Donald kacsa",
        category: "klasszikus",
        emoji: "🦆",
        gradient: "linear-gradient(135deg, #4facfe 0%, #f77062 100%)",
        description: "A pezsgő, de jószívű kacsa, aki gyorsan begurul, de a barátaiért mindent megtesz. A klasszikus Disney csillag.",
        traits: ["pezsgő", "jószívű", "határozott", "hűséges"]
    },
    {
        key: "goofy",
        name: "Goofy",
        movie: "Goofy",
        category: "klasszikus",
        emoji: "🐕",
        gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
        description: "A kényelmetlen, de aranyos kutya. Kicsit ügyetlen, de végtelenül segítőkész és nevetős. Mickey legjobb barátja.",
        traits: ["ügyetlen", "aranyos", "vidám", "segítőkész"]
    },
    {
        key: "tunder",
        name: "Tündér",
        movie: "Peter Pan",
        category: "klasszikus",
        emoji: "🧚",
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        description: "Peter Pan hű tündér barátnője. Féltékeny, de hűséges, és a pixi-pora varázslatot hoz minden helyzetbe.",
        traits: ["hűséges", "féltékeny", "varázslatos", "határozott"]
    },
    {
        key: "peter",
        name: "Peter Pan",
        movie: "Peter Pan",
        category: "klasszikus",
        emoji: "🪶",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        description: "A fiú, aki sosem akar felnőni. Kalandvágyó, vidám és a Neverland hőse, aki a repülés és a képzelet mesterévé válik.",
        traits: ["kalandvágyó", "vidám", "ábrándos", "bátor"]
    },
    {
        key: "pino",
        name: "Pinokkió",
        movie: "Pinokkió",
        category: "klasszikus",
        emoji: "🪵",
        gradient: "linear-gradient(135deg, #d3cce3 0%, #e9e4f0 100%)",
        description: "A fabábú, aki igazi fiú akar lenni. Kíváncsi és néha rosszhatású, de a szíve jó, és a lelkiismerete vezeti.",
        traits: ["kíváncsi", "jószívű", "naiv", "tanulékony"]
    },
    {
        key: "alad",
        name: "Aladdin",
        movie: "Aladdin",
        category: "klasszikus",
        emoji: "🪔",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        description: "Az utcai szegény fiúból herceg lesz. Bátor, kalandvágyó, és a csodalámpa gazdájává válik. Jázmin mentője.",
        traits: ["bátor", "kalandvágyó", "segítőkész", "romantikus"]
    },
    {
        key: "robin",
        name: "Robin Hood",
        movie: "Robin Hood",
        category: "klasszikus",
        emoji: "🏹",
        gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
        description: "A tolvajok hercege, aki a szegényeknek adja el a gazdagoktól. Bátor, hűséges és a szükség embere.",
        traits: ["bátor", "hűséges", "önzetlen", "kalandvágyó"]
    },

    // --- PIXAR ---
    {
        key: "woody",
        name: "Woody",
        movie: "Toy Story",
        category: "pixar",
        emoji: "🤠",
        gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
        description: "A hűséges sheriff, a játékok vezetője. Mindig a barátai mellett áll, és a felelősséget komolyan veszi.",
        traits: ["hűséges", "felelősségteljes", "vezető", "segítőkész"]
    },
    {
        key: "buzz",
        name: "Buzz Lightyear",
        movie: "Toy Story",
        category: "pixar",
        emoji: "🚀",
        gradient: "linear-gradient(135deg, #5b86e5 0%, #36d1dc 100%)",
        description: "A magabiztos űrhajós, aki kezdetben azt hiszi, valódi hős. Végül megtanulja, hogy a barátság a legnagyobb erő.",
        traits: ["magabiztos", "bátor", "kalandvágyó", "hűséges"]
    },
    {
        key: "macko",
        name: "Micimackó",
        movie: "Micimackó",
        category: "pixar",
        emoji: "🍯",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        description: "A kedves, mézszerető medve. Semmit nem aggódik túlzottan, egyszerűen csak élvezi az életet és a barátait.",
        traits: ["kedves", "nyugodt", "barátságos", "egyszerű"]
    },
    {
        key: "mike",
        name: "Mike Wazowski",
        movie: "Szörny Rt.",
        category: "pixar",
        emoji: "👻",
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        description: "Az egy szemű zöld szörny, aki szorgalommal éri el céljait. Vicces, okos és sosem adja fel az álmait.",
        traits: ["vicces", "okos", "szorgalmas", "ambiciózus"]
    },
    {
        key: "carl",
        name: "Carl Fredricksen",
        movie: "Fel",
        category: "pixar",
        emoji: "🎈",
        gradient: "linear-gradient(135deg, #fc5c7d 0%, #6a82fb 100%)",
        description: "Az idősödő hölgyhöz hűséges öregúr, aki házát léggömbökkel repíti Dél-Amerikába. Egy elképzelt kaland valós hőse.",
        traits: ["hűséges", "eltökélt", "kedves", "kalandvágyó"]
    },
    {
        key: "mr",
        name: "Incredival",
        movie: "Az Incredibles",
        category: "pixar",
        emoji: "💪",
        gradient: "linear-gradient(135deg, #ff512f 0%, #dd2476 100%)",
        description: "A szuperhős apa, aki erejét és szívével együtt teszi a családjáért. Vezető és felelősségteljes hős.",
        traits: ["erős", "vezető", "felelősségteljes", "hűséges"]
    },

    // --- MODERN HŐSÖK ---
    {
        key: "herk",
        name: "Herkules",
        movie: "Herkules",
        category: "huszar",
        emoji: "⚡",
        gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
        description: "Zeusz fia, aki meg akarja bizonyítani, hogy igazi hős. Bátor, segítőkész, és megtanulja, hogy az erő a szívben rejlik.",
        traits: ["bátor", "segítőkész", "ambiciózus", "hűséges"]
    },
    {
        key: "meg",
        name: "Megara",
        movie: "Herkules",
        category: "huszar",
        emoji: "💜",
        gradient: "linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)",
        description: "Független, csipkelős lelkű nő, aki megkeményítette a szívét a csalódások miatt. Végül megtanul újra bízni.",
        traits: ["független", "csipkelős", "intelligens", "bátor"]
    },
    {
        key: "flynn",
        name: "Tarisznya (Flynn)",
        movie: "Aranyhaj",
        category: "huszar",
        emoji: "🗡️",
        gradient: "linear-gradient(135deg, #5b86e5 0%, #36d1dc 100%)",
        description: "A vagány tolvajból hős lesz. Kalandvágyó, humoros és Rapunzel mellett megtanulja, hogy van több az életnél a kincs.",
        traits: ["vagány", "kalandvágyó", "vicces", "bátor"]
    },
    {
        key: "jack",
        name: "Jack Skellington",
        movie: "Karácsonyi lidérc",
        category: "huszar",
        emoji: "💀",
        gradient: "linear-gradient(135deg, #2c3e50 0%, #4a6741 100%)",
        description: "A Halloween-város szomszéd ura, aki ráun a mindennapi kísértetiesre, és megpróbálja átvenni a Karácsonyt.",
        traits: ["kreatív", "kíváncsi", "eltökélt", "ábrándos"]
    }
];

// ===== TESZT KÉRDÉSEK =====
// Minden válasz bizonyos karakter-key-hez ad pontot
const questions = [
    {
        category: "Szabadidő",
        text: "Mit szeretsz csinálni a szabadidődben?",
        answers: [
            { text: "Könyvet olvasok vagy tanulok", points: { belle: 3, mike: 2, meg: 1 } },
            { text: "Kalandokat élek át és felfedezek", points: { ariel: 3, alad: 2, peter: 3, nemo: 2, vaiana: 2, raya: 2 } },
            { text: "Barátokkal töltöm az időt", points: { mickey: 3, minnie: 2, woody: 2, stitch: 1, lilo: 2 } },
            { text: "Kreatív dolgokat alkotok", points: { rapun: 3, jack: 2, tunder: 1, merida: 1 } }
        ]
    },
    {
        category: "Problémamegoldás",
        text: "Hogyan kezelsz egy nehéz helyzetet?",
        answers: [
            { text: "Velem előre, gondolkodás nélkül!", points: { simba: 3, mulan: 2, merida: 3, buzz: 2, mr: 2 } },
            { text: "Megtervezem, mit lépjek", points: { belle: 3, tiana: 3, woody: 2, mike: 2, carl: 2 } },
            { text: "Másokat kérek meg segítségért", points: { snow: 2, anna: 3, dory: 2, goofy: 2 } },
            { text: "A szívemre hallgatok", points: { ariel: 2, jazmin: 2, poca: 3, mulan: 1 } }
        ]
    },
    {
        category: "Személyiség",
        text: "Melyik jellemvonás illik hozzád a legjobban?",
        answers: [
            { text: "Vidám és optimista", points: { mickey: 3, anna: 3, dory: 3, stitch: 1, peter: 2 } },
            { text: "Bátor és határozott", points: { mulan: 3, merida: 3, simba: 2, vaiana: 3, herk: 3, raya: 3 } },
            { text: "Intelligens és művelt", points: { belle: 3, mike: 2, meg: 2, poca: 1 } },
            { text: "Kedves és segítőkész", points: { snow: 3, cinderella: 3, woody: 2, macko: 3, minnie: 2 } }
        ]
    },
    {
        category: "Álmok",
        text: "Mi a legnagyobb vágyad?",
        answers: [
            { text: "Felfedezni a világot", points: { ariel: 3, vaiana: 3, nemo: 2, peter: 3, alad: 2 } },
            { text: "Családot alapítani, szerető otthon", points: { cinderella: 2, anna: 2, lilo: 3, stitch: 2, woody: 1 } },
            { text: "Sikeres lenni valamiben", points: { tiana: 3, mike: 3, herk: 2, buzz: 2, mr: 1 } },
            { text: "Békés, harmonikus élet", points: { poca: 3, macko: 3, bambi: 2, aurora: 2 } }
        ]
    },
    {
        category: "Kaland",
        text: "Milyen kalandra vágysz a leginkább?",
        answers: [
            { text: "Hajózás a tengeren", points: { vaiana: 3, ariel: 2, nemo: 3, dory: 2, seb: 1 } },
            { text: "Erdőben barangolás", points: { poca: 3, bambi: 3, robin: 2, snow: 2, raya: 1 } },
            { text: "Városi felfedezés", points: { alad: 2, tiana: 3, belle: 2, flynn: 2 } },
            { text: "Egy képzeletbeli világ", points: { peter: 3, rapun: 2, jack: 3, tunder: 3, aurora: 1 } }
        ]
    },
    {
        category: "Barátság",
        text: "Milyen barát vagy?",
        answers: [
            { text: "Hűséges és megbízható", points: { woody: 3, stitch: 2, goofy: 2, donald: 3, mickey: 3 } },
            { text: "Vicces és lazít", points: { mickey: 2, goofy: 3, mike: 3, dory: 2, stitch: 2 } },
            { text: "Megbízható tanácsadó", points: { belle: 2, poca: 3, seb: 2, carl: 2, macko: 2 } },
            { text: "Védő és gondoskodó", points: { elsa: 3, simba: 2, mr: 3, anna: 2, herk: 2 } }
        ]
    },
    {
        category: "Értékek",
        text: "Mi az, amit a leginkább értékeled?",
        answers: [
            { text: "A szabadság", points: { jazmin: 3, merida: 3, peter: 3, rapun: 2, alad: 2 } },
            { text: "A család", points: { anna: 3, elsa: 2, lilo: 3, stitch: 2, simba: 2, mulan: 3 } },
            { text: "A tudás", points: { belle: 3, mike: 2, meg: 2, poca: 1, pino: 2 } },
            { text: "A becsület", points: { mulan: 3, robin: 3, woody: 2, simba: 3, mr: 2 } }
        ]
    },
    {
        category: "Hobbi",
        text: "Melyik hobbi illik hozzád?",
        answers: [
            { text: "Rajzolás, festés", points: { rapun: 3, jack: 2, aurora: 1, tunder: 1 } },
            { text: "Sport, mozgás", points: { mulan: 3, merida: 3, herk: 3, mr: 2, buzz: 2 } },
            { text: "Zene hallgatás", points: { seb: 3, ariel: 2, mickey: 1, minnie: 2, macko: 1 } },
            { text: "Természetjárás", points: { poca: 3, bambi: 3, vaiana: 2, lilo: 2, robin: 2 } }
        ]
    },
    {
        category: "Konfliktus",
        text: "Vitában hogyan viselkedsz?",
        answers: [
            { text: "Határozottan kiállók magamért", points: { merida: 3, jazmin: 3, mulan: 2, meg: 3, donald: 3, raya: 2 } },
            { text: "Békét kötök", points: { poca: 3, belle: 2, snow: 2, macko: 3, woody: 2 } },
            { text: "Megpróbálom megérteni a másikat", points: { belle: 3, poca: 2, aurora: 2, carl: 2, anna: 2 } },
            { text: "Inkább elvonulok", points: { elsa: 3, bambi: 2, carl: 2, jack: 2, pino: 1 } }
        ]
    },
    {
        category: "Meseország",
        text: "Melyik Disney helyszín a kedvenced?",
        answers: [
            { text: "Agrabah (sivatag és palota)", points: { alad: 3, jazmin: 3 } },
            { text: "A tenger vagy óceán", points: { ariel: 3, vaiana: 3, nemo: 3, dory: 2, seb: 3 } },
            { text: "Az erdő vagy a dzsungel", points: { poca: 3, bambi: 3, robin: 3, simba: 2, lilo: 2 } },
            { text: "Egy varázslatos kastély", points: { snow: 2, cinderella: 3, belle: 3, aurora: 3, elsa: 3 } }
        ]
    }
];

// ===== ÁLLAPOT =====
let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);

// ===== KARAKTER KÁRTYÁK GENERÁLÁSA =====
function renderCharacters(filter = "all") {
    const grid = document.getElementById("characterGrid");
    grid.innerHTML = "";

    const filtered = filter === "all"
        ? characters
        : characters.filter(c => c.category === filter);

    filtered.forEach((char, index) => {
        const card = document.createElement("article");
        card.className = "character-card";
        card.style.animationDelay = `${index * 0.05}s`;

        const traitsHTML = char.traits
            .map(t => `<span class="trait-tag">${t}</span>`)
            .join("");

        card.innerHTML = `
            <div class="card-banner" style="background: ${char.gradient}">
                <div class="card-banner-emoji">${char.emoji}</div>
            </div>
            <div class="card-content">
                <span class="card-movie">${char.movie}</span>
                <h3 class="card-name">${char.name}</h3>
                <p class="card-description">${char.description}</p>
                <div class="card-traits">${traitsHTML}</div>
            </div>
        `;

        grid.appendChild(card);
    });
}

// ===== SZŰRŐ GOMBOK =====
function setupFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderCharacters(btn.dataset.filter);
        });
    });
}

// ===== MOBIL MENÜ =====
function setupMobileMenu() {
    const toggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            toggle.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });
}

// ===== TESZT LOGIKA =====
function showScreen(screenId) {
    document.querySelectorAll(".test-screen").forEach(s => s.classList.remove("active"));
    document.getElementById(screenId).classList.add("active");
}

function startTest() {
    currentQuestion = 0;
    userAnswers = new Array(questions.length).fill(null);
    showScreen("testQuestions");
    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentQuestion];
    const total = questions.length;
    const progress = ((currentQuestion + 1) / total) * 100;

    document.getElementById("questionNumber").textContent =
        `${currentQuestion + 1}. kérdés / ${total}`;
    document.getElementById("questionCategory").textContent = q.category;
    document.getElementById("progressFill").style.width = `${progress}%`;
    document.getElementById("questionText").textContent = q.text;

    const answersContainer = document.getElementById("answersContainer");
    answersContainer.innerHTML = "";

    q.answers.forEach((answer, idx) => {
        const btn = document.createElement("button");
        btn.className = "answer-btn";
        if (userAnswers[currentQuestion] === idx) {
            btn.classList.add("selected");
        }

        const letter = String.fromCharCode(65 + idx); // A, B, C, D
        btn.innerHTML = `
            <span class="answer-letter">${letter}</span>
            <span class="answer-text">${answer.text}</span>
        `;

        btn.addEventListener("click", () => selectAnswer(idx));
        answersContainer.appendChild(btn);
    });

    // Gombok állapota
    const prevBtn = document.getElementById("prevBtn");
    prevBtn.disabled = currentQuestion === 0;
    prevBtn.style.opacity = currentQuestion === 0 ? "0.4" : "1";

    const nextBtn = document.getElementById("nextBtn");
    if (currentQuestion === total - 1) {
        nextBtn.textContent = "Eredmény megtekintése ✨";
    } else {
        nextBtn.textContent = "Következő →";
    }
    nextBtn.disabled = userAnswers[currentQuestion] === null;
    nextBtn.style.opacity = userAnswers[currentQuestion] === null ? "0.4" : "1";
}

function selectAnswer(index) {
    userAnswers[currentQuestion] = index;
    renderQuestion();
}

function nextQuestion() {
    if (userAnswers[currentQuestion] === null) return;

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    } else {
        showResult();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}

// ===== EREDMÉNY KISZÁMÍTÁSA =====
function calculateResult() {
    const scores = {};

    userAnswers.forEach((answerIdx, qIdx) => {
        if (answerIdx === null) return;
        const answer = questions[qIdx].answers[answerIdx];
        for (const [charKey, points] of Object.entries(answer.points)) {
            scores[charKey] = (scores[charKey] || 0) + points;
        }
    });

    // Sorba rendezzük a pontokat csökkenő sorrendben
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);

    return {
        winner: sorted[0][0],
        topKeys: sorted.slice(0, 4).map(entry => entry[0])
    };
}

function showResult() {
    const result = calculateResult();
    const winnerChar = characters.find(c => c.key === result.winner);

    if (!winnerChar) {
        // Ha valamiért nincs találat, mutassuk az első karaktert
        showResultForCharacter(characters[0]);
        return;
    }

    showResultForCharacter(winnerChar, result.topKeys);
}

function showResultForCharacter(char, topKeys = []) {
    document.getElementById("resultIcon").textContent = char.emoji;
    document.getElementById("resultName").textContent = char.name;
    document.getElementById("resultMovie").textContent = `— ${char.movie}`;
    document.getElementById("resultDescription").textContent = char.description;

    // Tulajdonságok
    const traitsContainer = document.getElementById("resultTraits");
    traitsContainer.innerHTML = char.traits
        .map(t => `<span class="trait-tag">${t}</span>`)
        .join("");

    // Hasonló karakterek (a topKeys közül a 2-4.)
    const compatList = document.getElementById("compatibilityList");
    compatList.innerHTML = "";

    if (topKeys.length > 1) {
        for (let i = 1; i < topKeys.length; i++) {
            const key = topKeys[i];
            const charObj = characters.find(c => c.key === key);
            if (charObj && charObj.key !== char.key) {
                const item = document.createElement("span");
                item.className = "compat-item";
                item.innerHTML = `<span class="compat-item-emoji">${charObj.emoji}</span> ${charObj.name}`;
                compatList.appendChild(item);
            }
        }
    }

    showScreen("testResult");
}

// ===== ESEMÉNYEK BEÁLLÍTÁSA =====
function setupTest() {
    document.getElementById("startTestBtn").addEventListener("click", startTest);
    document.getElementById("nextBtn").addEventListener("click", nextQuestion);
    document.getElementById("prevBtn").addEventListener("click", prevQuestion);

    document.getElementById("restartTestBtn").addEventListener("click", () => {
        showScreen("testIntro");
    });

    document.getElementById("shareResultBtn").addEventListener("click", () => {
        const name = document.getElementById("resultName").textContent;
        const movie = document.getElementById("resultMovie").textContent;

        if (navigator.share) {
            navigator.share({
                title: "Disney Világ - Személyiségteszt",
                text: `A tesztem szerint a Disney-karakterem: ${name} (${movie})! És te melyik vagy?`,
                url: window.location.href
            }).catch(() => {
                copyToClipboard(name, movie);
            });
        } else {
            copyToClipboard(name, movie);
        }
    });
}

function copyToClipboard(name, movie) {
    const text = `A Disney Világ tesztem szerint a karakterem: ${name} (${movie})`;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            alert("Eredmény vágólapra másolva! ✨");
        }).catch(() => {
            alert(text);
        });
    } else {
        alert(text);
    }
}

// ===== NAVIGÁCIÓ ACTIVE ÁLLAPOT =====
function setupScrollSpy() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });
}

// ===== INDÍTÁS =====
document.addEventListener("DOMContentLoaded", () => {
    renderCharacters();
    setupFilters();
    setupMobileMenu();
    setupTest();
    setupScrollSpy();
});
