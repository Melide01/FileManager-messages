// Global Metadata
const trackDirInfo = {
    "main": {
        "name": "Main Tracklist",
        "src": "trackList",
        "theme": {
            "backgroundcolor": "#027"
        }
    },
    "impossible": {
        "name": "may be continued",
        "src": "ouinList",
        "theme": {
            "backgroundcolor": "#505"
        }
    },
    "trash": {
        "name": "trashBin",
        "src": "trashList",
        "theme": {
            "backgroundcolor": "#500"
        }
    },
    "..autres": {
        "name": "OtherProjects",
        "src": "misc",
        "theme": {
            "backgroundcolor": "#111"
        }
    }
}

// metalist
window.trackList = {
    "Melide - Mr Redman": "MrRedman",
    "Melide - A-t-elle": "Atelle",
    
    "Melide - Je Ferais Avec": "faireAvec",
    "Melide - Compliqué pour moi": "",
    "Melide - Du Temps": "",

    "Melide - Childhood Cliché": "",
    "Melide - To Make the Pain Go Away": "painGo",
    "Melide - Elle veut juste que je la laisse": "evq",

    "Melide - Je Rêve Encore": "",
    "Melide - Thanks to Her": "thanks",
    "Melide - Dans ton Panier": "panier",

    "Melide - J'ai plus d'espace": "",
    "Melide - Baby, qu'est ce que t'es": "",
    "Melide - Sorcellerie": "",
}
window.trashList = {
    "je ferais avec trash": "",
    "make the pain go away v.1": "",
    "dek-struction": "",
    "ptn de clope": "",
}
window.ouinList = {
    "Melide - Evadls": "Evadls",
    "Melide 2am22": "",
    "every-types-of-girls": "",
    "Melide aita vau i ite eaha te rave": "",
    "fvgl ft. Tomy": "",
    "Jeanne cover": "",
    "La vie est étrange": "",
}
window.misc = {
    "Luciole": ""
}




// The actual conv data

var oldEvadls = [
    { "dir": "right", "type": "h2", "text": "John" },
    {"dir": "left", "type": "p", "text": "“Elle veut vivre comme dans Disney”"},
    {"dir": "left", "type": "p", "text": "BEH OUI"},
    {"dir": "right", "type": "p", "text": "J’ai trop bien capté le personnage 🤭"}
]
var Evadls = `
[right][info][h2] John
[left][dialogue][p] "Elle veut vivre comme dans Disney"
[left][dialogue][p] BEH OUI
[right][dialogue][p] J'ai trop bien capté le personnage 🤭
[right][info][h2] 22:22
[right][dialogue][p] Purée ils veulent pas que je reposte la musique
[left][dialogue][p] Mais non
[right][dialogue][img] assets/image/image.png
[right][dialogue][p] ça me saoule
`

var Atelle = [
    { "dir": "right", "type": "h2", "text": "John" },
    { "dir": "right", "type": "p", "text": "je viens de faire une musique pour mon prochain album et javais envie de le clipper avec une meuf hyper belle" },
    { "dir": "right", "type": "p", "text": "j’ai direct pensé à toi" },
    { "dir": "left", "type": "p", "text": "Nimporte quoi toi" },
    { "dir": "left", "type": "p", "text": "John c'est adorable ce que tu me dit mais je peut pas faire sa si on ce voit pas 😔" },
    { "dir": "right", "type": "p", "text": "Bah oui cest ce que je me suis dis à la fin 😔" },
    {"dir": "right", "type": "p", "text": "En sah j’arrive" },
    { "dir": "left", "type": "p", "text": "Oui vien stp" },
    { "dir": "left", "type": "p", "text": "Je veux te voir" },
    // { "dir": "left", "type": "img", "src": "assets/image/image.png" },
    
]

var MrRedman = [
    {"dir": "right", "type": "p", "text": "Bonjour, Je m’appelle [...], j’étais un ancien élève au collège de [...]. J’ai arrêté ma scolarité en 3ème pendant la période 2017 - 2018. J’aimerais récupérer mon EXEAT, si vous l’avez, dans les prochaines semaines si possible. Je vous remercie d’avance et passez une très bonne journée!"},
    {"dir": "left", "type": "p", "text": "Bonjour, L'exéat se trouve dans votre dossier d'inscription pour le lycée. Veuillez donc vous rapprocher de votre lycée d'affectation. Bonne journée "},
    {"dir": "left", "type": "p", "text": "Bonjour, Désolé nous n'avons plus votre exéat. Cordialement,"},
    {"dir": "center", "type": "h2", "text": "En gros allez vous faire foutre quoi"},
    {"dir": "left", "type": "h2", "text": "Vous avez reçu 1 message de Maman"}
]

var painGo = [
    {"dir": "center", "type": "h2", "text": "11h26"},
    {"dir": "right", "type": "h2", "text": "John"},
    {"dir": "left", "type": "p", "text": "Heyyy.."},
    {"dir": "left", "type": "p", "text": "Jvais me sentir mal de dire ça mais ça te dérange si on se sépare et qu'on devienne amis 🥲"},
    {"dir": "left", "type": "p", "text": "Jsuis desoler"},
    {"dir": "left", "type": "p", "text": "Pardon"},
    {"dir": "right", "type": "p", "text": "Si c’est ce que tu veux je peux pas te forcer autrement"},
    {"dir": "right", "type": "p", "text": "Tu ne m’aimes plus?"},
    {"dir": "center", "type": "h2", "text": "4h28"},
    {"dir": "left", "type": "p", "text": "Cc, cest pour te prévenir que ta chérie est partie.."},
    {"dir": "right", "type": "p", "text": "Attends quoi?"},
    {"dir": "center", "type": "h2", "text": "You have been blocked"}
]

var evq = [
    {"dir": "right", "type": "h2", "text": "John"},
    {"dir": "right", "type": "p", "text": "Jreviens souvent voir nos conv pour soit rigoler soit me rappeler nos moments ensemble"},
    {"dir": "right", "type": "p", "text": "Jsais que toi c’est pas pareil mais tu es vraiment quelqu’un d’important dans ma vie ❤"},
    {"dir": "left", "type": "p", "text": "C’est juste que comme tu le sais c’est compliqué pour moi mais je tien a toi john énormément"},
    {"dir": "right", "type": "p", "text": "J’oublie pas ça et je t’en voudrais jamais que ce soit compliqué pour toi, je suis vraiment heureux de te connaître l’oublie jamais ❤"},
    {"dir": "right", "type": "p", "text": "Merci infiniment pour tout"},
]

var thanks = [
    {"dir": "right", "type": "h2", "text": "John"},
    {"dir": "left", "type": "p", "text": "J'ai un problème"},
    {"dir": "left", "type": "p", "text": "Comment ne plus être dans une situation de dépendance affective ???"},
    {"dir": "left", "type": "p", "text": "Enft je l'aime bcp bcp et je peux plus me passer de lui à un point où c'est peut être pas très healthy, je veux pas que ça l'étouffe"},
    {"dir": "right", "type": "p", "text": "En vrai"},
    {"dir": "right", "type": "p", "text": "C’est sûrement ta première relation ou l’une de tes premières relation donc profite juste"},
    {"dir": "right", "type": "p", "text": "Ai pas peur d’être collante ou canarde"},
    {"dir": "right", "type": "p", "text": "C’est beau qu’il te manque"},
    {"dir": "right", "type": "p", "text": "Jveux te voir heureuse"}
]

var panier = [
    {"dir": "center", "type": "h2", "text": "Cette conversation est fictive, mais reflète des faits réels"},
    {"dir": "right", "type": "p", "text": "Cc biche, tas ecouter le son?"},
    {"dir": "left", "type": "p", "text": "c bien"},
    {"dir": "right", "type": "p", "text": "cool"},
    {"dir": "right", "type": "p", "text": "en vrai je me suis un peu inspiré de toi pour la faire"},
    {"dir": "left", "type": "p", "text": "c bien"},
    {"dir": "right", "type": "p", "text": "on se voit taleur"},
    {"dir": "left", "type": "h2", "text": "Vous avez manquer 5 appels"},
]

var faireAvec = [
    {"dir": "right", "type": "h2", "text": "John"},
    {"dir": "left", "type": "p", "text": "T’es pas cringe !! Tu t’assumes de plus en plus et c’est vraiment beau à voir 🫶"},
    {"dir": "left", "type": "p", "text": "Coucou !! Joyeux anniversaire !! Mais fait gaffe parce que tu risques de te transformer en un petit croûton si tu continues comme ça 🤭"},
    {"dir": "right", "type": "p", "text": "Merci infiniment omggg, et tkt petit croûton ou pas jv viser le bonheur coûte que coûte 🫶✨"},
    {"dir": "right", "type": "p", "text": "J'arriverai pas à te le dire dans la vrai conv"},
    {"dir": "right", "type": "p", "text": "mais je suis vrm désolé pour tout ce que je tai fait ressentir"},
    {"dir": "right", "type": "p", "text": "tes honnetement la personne avec qui jaurai un lien tres fort malgré moi"},
    {"dir": "right", "type": "p", "text": "jveux pardonner mon passé avec mes anciens medocs"},
]