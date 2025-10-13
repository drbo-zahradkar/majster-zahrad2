// Encyklopédia – ukážkové dáta (ľahko rozšíriteľné)
const PLANTS = [
{ id:1, name:"Levanduľa", latin:"Lavandula angustifolia", sun:"slnečné", water:"nízka", difficulty:"ľahká", tags:["aróma","včely","sucho"], note:"Strih po odkvitnutí podporí kompaktný rast." },
{ id:2, name:"Rajčiak jedlý", latin:"Solanum lycopersicum", sun:"slnečné", water:"stredná", difficulty:"stredná", tags:["plod","skleník","kolík"], note:"Odstraňuj zálistky, zlepšia sa plody aj cirkulácia vzduchu." },
{ id:3, name:"Hortenzia kríčkovitá", latin:"Hydrangea arborescens", sun:"polotieň", water:"vysoká", difficulty:"stredná", tags:["kvet","vlaha"], note:"Pôdu mulčuj – šetrí vodu a udrží stabilnú teplotu koreňov." },
{ id:4, name:"Paprika", latin:"Capsicum annuum", sun:"slnečné", water:"stredná", difficulty:"stredná", tags:["plod","teplo"], note:"Teplomilná – von až po 'zamrznutých'." },
{ id:5, name:"Hosta (Funkia)", latin:"Hosta spp.", sun:"tieň", water:"stredná", difficulty:"ľahká", tags:["list","tieň"], note:"Chráň pred slizniakmi – pivo alebo mechanické pasce." },
{ id:6, name:"Mrkva siata", latin:"Daucus carota", sun:"slnečné", water:"stredná", difficulty:"ľahká", tags:["koreň","výsev"], note:"Pre rýchle klíčenie udržuj povrch stále vlhký." },
{ id:7, name:"Ruže záhonové", latin:"Rosa spp.", sun:"slnečné", water:"stredná", difficulty:"náročná", tags:["rez","kvet"], note:"Rež na vonkajší púčik, podporíš otvorenú korunu." },
{ id:8, name:"Šalvia lekárska", latin:"Salvia officinalis", sun:"slnečné", water:"nízka", difficulty:"ľahká", tags:["kuchyňa","sucho"], note:"Prezimuje lepšie na priepustnej pôde bez premokrenia." },
{ id:9, name:"Jahoda záhradná", latin:"Fragaria × ananassa", sun:"slnečné", water:"vysoká", difficulty:"stredná", tags:["plod","mulč"], note:"Mulč zo slamy udrží plody čisté a proti plesniam." }
];


// Tipy podľa sezón
const SEASONS = [
{ key:"jar", title:"Jar", actions:[
"Výsev chladnomilných plodín (špenát, redkovka, hrach).",
"Rez ovocných stromov pred pučaním (pri bezmraze).",
"Príprava záhonov – kompost, prekopanie, vyrovnanie povrchu.",
]},
{ key:"leto", title:"Leto", actions:[
"Pravidelná zálievka ráno alebo večer, hlboká – menej často, viac vody.",
"Mulčovanie proti odparu, obnova vrstvy.",
"Zber plodín v plnej zrelosti; paradajky odlistiť pri báze pre vzduch." ,
]},
{ key:"jeseň", title:"Jeseň", actions:[
"Výsev ozimného cesnaku a špenátu.",
"Zber semien a príprava kompostu (vrstviť zelené/hnedé).",
"Presádzanie drevín pri poklese teplôt a vlhkosti pôdy.",
]},
{ key:"zima", title:"Zima", actions:[
"Plánovanie záhonov a objednávky semien.",
"Kontrola prezimovania (ochrana koreňov, zazimovanie náradia).",
"Rez ríbezlí a egrešov v období vegetačného pokoja.",
]},
];


// Kvíz – otázky
const QUIZ = [
{
q:"Kedy je najvhodnejší čas na zálievku počas leta?",
options:["Napoludnie, keď je najteplejšie","Ráno alebo večer","Iba keď listy zvädnú"],
answer:1,
explain:"Ranná/večerná zálievka znižuje odpar a riziko šoku z teploty."
},
{
q:"Čo je mulč a prečo sa používa?",
options:["Hnojivo s vysokým dusíkom","Ochranná vrstva na pôde","Insekticíd proti voškám"],
answer:1,
explain:"Mulč znižuje odpar, obmedzuje burinu a stabilizuje teplotu pôdy."
},
{
q:"Ako zistíš, že je pôda pripravená na obrábanie po daždi?",
options:["Keď sa nelepí do gule v ruke","Keď je úplne suchá","Keď sa na povrchu tvoria praskliny"],
answer:0,
explain:"Ak sa pôda lepí, je príliš mokrá – obrábaním by si ju utužil."
},
{
q:"Kam rezať ruže pre podporu otvorenej koruny?",
options:["Na vnútorný púčik","Na vonkajší púčik","Bez rozdielu"],
answer:1,
explain:"Rez na vonkajší púčik nasmeruje nový výhon von – lepšia cirkulácia."
}
];


// Krátke tipy na domovskú stránku (náhodný)
const DAILY_TIPS = [
"Koreňovky seješ plytko – príliš hlboký výsev spomalí klíčenie.",
"Pred výsadbou rajčiakov prehĺb jamky – vytvoria viac koreňov.",
"Živiny dopĺňaj kompostom – univerzálne a šetrné k pôde.",
"Zachytávaj dažďovú vodu – mäkká voda je ideálna na polievanie.",

];
