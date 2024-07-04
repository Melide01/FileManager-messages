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
    "poubelle": {
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
    "Melide - Compliqué pour moi": "compPourMe",
    "Melide - Du Temps": "duTemps",

    "Melide - Childhood Cliché": "childClich",
    "Melide - To Make the Pain Go Away": "painGo",
    "Melide - Elle veut juste que je la laisse": "evq",

    "Melide - Je Rêve Encore": "reveurToujours",
    "Melide - Thanks to Her": "thanks",
    "Melide - Dans ton Panier": "panier",

    "Melide - J'ai plus d'espace": "plusEspace",
    "Melide - Baby, qu'est ce que t'es": "babyKsk",
    "Melide - Sorcellerie": "sorcellerie",
}
window.ouinList = {
    "true deeper inner thoughts": "deeperInner",
    "Melide - Evadls": "Evadls",
    "Melide 2am22": "deux22",
    "every-types-of-girls": "everyGirls",
    "t à tahiti": "teataiti",
    "On attends les vacanves": "vacance",
    "on décolle": "onDeco",
    "noradrénaline": "nora",
    "Melide aita vau i ite eaha te rave": "tahitien1",
    "fvgl ft. Tomy": "fvgl",
    "Jeanne cover": "jeanneCov",
    "after him": "afterHim"
    
}
window.trashList = {
    "je ferais avec trash": "jeFeraisAlt",
    "make the pain go away v.1": "oldPain",
    "La vie est étrange": "laVie",
    "dek-struction": "dekStrux",
    "ptn de clope": "ptnClope",
    "Vacay": "vacay",
    "please stay momma": "dadamoma",
    "ksk t con v0": "KskTcon",
    "elle veut que du": "elleVeut"
}
window.misc = {
    "Luciole": "",
    "Projet D9": "",
    "Plight": "",
    "Project T": ""
}

// link if i wanna redirect to audiomack
// [right][dialogue][a] https://audiomack.com/melide/song/... 

// The actual conv data
var Evadls = `
[right][info][h2] John
[left][dialogue][p] "Elle veut vivre comme dans Disney"
[left][dialogue][p] BEH OUI
[right][dialogue][p] J'ai trop bien capté le personnage 🤭
[right][info][h2] 22:22
[right][dialogue][p] Purée ils veulent pas que je reposte la musique
[left][dialogue][p] Mais non
[right][dialogue][img] assets/image/capture121.png
[right][dialogue][p] ça me saoule
[left][dialogue][p] dsl
[right][dialogue][p] tktp bref tiens
[right][dialogue][audio] assets/music/mp3/Evadls.mp3
`;

var Atelle = `
[right][info][h2] John
[left][dialogue][p] Je sais pas si tu te souviens mais notre premier sujet de conversation
[left][dialogue][p] C'était les écritures
[right][dialogue][p] Purée oui
[left][dialogue][p] Du coup tu jugeais mon écriture
[left][dialogue][p] et t'as jugé mon amplie aussi
[right][dialogue][p] PTDR OUI
[left][dialogue][p] Et tu me faisais des ptites chansons
[left][dialogue][p] ça c'etait adorable

[left][dialogue][img] assets/image/connor.jpg

[right][dialogue][p] En vrai date à jouer à Detroit Become Human c'est pas si mal quand j'y pense
[left][dialogue][p] C'est vraiment incroyable
[left][dialogue][p] C'est mon jeux a choix prèf
[right][dialogue][p] T'as de bon goût jusqu'à la fin toi
[left][dialogue][p] Ouii
[right][dialogue][p] je viens de faire une musique pour mon prochain album et j'avais envie de le clipper avec une meuf hyper belle
[right][dialogue][p] j'ai direct pensé à toi
[left][dialogue][p] Nimporte quoi toi
[left][dialogue][p] John c'est adorable ce que tu me dis mais je peut pas faire sa si on ce voit pas :(
[right][dialogue][p] Bah oui c'st ce que je me suis dis à la fin :(
[right][dialogue][p] en sah j'arrive
[left][dialogue][p] Oui vien stp
[left][dialogue][p] Je veux te voir
`;

var MrRedman = `
[left][info][h2] Maman
[left][dialogue][p] Envoie un mail au collège pour récuperer ton éxeats, ca pourrait servir
[right][dialogue][p] Daccord maman, je t'aime <3
[center][info][h2] 9:13
[right][dialogue][p] Bonjour, Je m’appelle [...], j’étais un ancien élève au collège de [...]. J’ai arrêté ma scolarité en 3ème pendant la période 2017 - 2018. J’aimerais récupérer mon EXEAT, si vous l’avez, dans les prochaines semaines si possible. Je vous remercie d’avance et passez une très bonne journée!
[left][dialogue][p] Bonjour, L'exéat se trouve dans votre dossier d'inscription pour le lycée. Veuillez donc vous rapprocher de votre lycée d'affectation. Bonne journée
[left][dialogue][p] Bonjour, Désolé nous n'avons plus votre exéat. Cordialement,
[center][info][h2] En gros allez vous faire foutre quoi
[left][info][h2] Vous avez reçu 1 message de Maman

`;

var painGo = `
[center][info][h2] 11h26
[right][info][h2] John
[left][dialogue][p] Heyyy..
[left][dialogue][p] Jvais me sentir mal de dire ça mais ça te dérange si on se sépare et qu'on devienne amis
[left][dialogue][p] Jsuis desoler
[left][dialogue][p] Pardon
[right][dialogue][p] Si c'est ce que tu veux je peux pas te forcer autrement
[right][dialogue][p] Tu ne m'aimes plus?
[center][info][h2] 4h28
[left][dialogue][p] Cc, c'est pour te prévenir que ta chérie est partie..
[right][dialogue][p] Attends quoi?
[cenfer][info][h2] You have been blocked
`;

var evq = `
[right][info][p] John
[right][dialogue][p] Jreviens souvent voir nos conv pour soit rigoler soit me rappeler nos moments ensemble
[right][dialogue][p] Jsais que toi c'est pas pareil mais tu es vraiment quelqu'un d'important dans ma vie <3
[left][dialogue][p] C'est juste que comme tu le sais c'est compliqué pour moi mais je tien a toi john énormément
[right][dialogue][p] J'oublie pas ça et je t'en voudrais jamais que ce soit compliqué pour toi, je suis vraiment heureux de te connaître l'oublie jamais
[left][dialogue][p] Merci infiniment pour tout
`;

var thanks = `
[right][info][h2] John

[right][dialogue][img] assets/image/chiaki.JPG

[left][dialogue][p] J'ai un problème
[left][dialogue][p] Comment ne plus être dans une situation de dépendance affective???
[left][dialogue][p] Enft je l'aime bcp bcp et je peux plus me passer de lui à un point où c'est peut être pas très healthy, je veux pas que ça l'étouffe
[right][dialogue][p] En vrai
[right][dialogue][p] C'est sûrement ta première relation ou l'une de tes premières relation donc profite juste
[right][dialogue][p] Ai pas peur d'être collante ou canarde
[right][dialogue][p] C'est beau qu'il te manque
[right][dialogue][p] Jveux te voir heureuse
[left][dialogue][p] MERCI T TROP GENTIL 💕💕🎀🎀🎀🎀🎀💮💮💮💮💗🌹🌹🌹

[left][dialogue][img] assets/image/coeurcoeur.JPG
`;

var panier = `
[center][info][h2] Cette conversation est fictive, mais reflète des faits réels
[right][info][h2] John
[right][dialogue][p] Cc biche, t'as ecouter le son?
[left][dialogue][p] c bien
[right][dialogue][p] cool
[right][dialogue][p] en vrai je me suis un peu inspiré de toi pour le faire
[left][dialogue][p] c bien
[right][dialogue][p] on se voit taleur
[left][info][h2] Vous avez manquer 5 appels de la personne
[right][dialogue][img] assets/image/huh_cat.jpg
`;

var faireAvec = `
[right][info][h2] John
[right][dialogue][img] assets/image/jonh1.png
[right][dialogue][p] cringe
[left][dialogue][p] T'es pas cringe !! Tu t'assumes de plus en plus et c'est vraiment beau à voir 﫶

[center][info][h2] 25 Fev 2023

[left][dialogue][p] Coucou !! Joyeux anniversaire !! Mais fait gaffe parce que tu risques de te transformer en petit croûton si tu continues comme ça <3
[right][dialogue][p] Merci infiniment omggg, et tkt petit croûton ou pas jv viser le bonheur coûte que coûte <3
[right][dialogue][p] J'arriverais pas à te le dire dans la vrai conv
[right][dialogue][p] mais je suis vrm désolé pour tout ce que je t'ai fait
[right][dialogue][p] T'es hônnetement la personne avec qui jaurai un lien très fort malgré moi
[right][dialogue][p] Tu es formidable
[right][dialogue][p] J'veux pardonner mon passé, celui avec mes anciens médocs
`;

var duTemps = `
[center][info][h2] Cette conversation s'est déroulé à l'oral
[right][info][h2] John
[right][dialogue][p] En vrai je sais vraiment pas quoi faire comme boulot
[left][dialogue][img] assets/image/catquestion.jpg
[left][dialogue][p] Arrête
[left][dialogue][p] Tu veux rien faire de ta vie 
[right][dialogue][p] Si je veux faire de la musique 
[right][dialogue][p] des déssins
[right][dialogue][p] écrire des histoires ou faire des programmes
[left][dialogue][p] Tu veux pas plutôt faire de la cuisine?
[left][dialogue][p] Faire de bon plat dans les restaurant
[right][dialogue][p] Ah ouais
[right][dialogue][p] concevoir des plats aussi? Ca me tente
[left][dialogue][p] Non, juste faire les plats
[right][dialogue][p] ah
[right][dialogue][img] assets/image/huh_cat.jpg
[right][info][h2] je suis bébête
`;

var compPourMe = `
[right][info][h2] John

[left][dialogue][img] assets/image/coeurverset.JPG
[right][dialogue][p] J'espère fortement ❤️❤️
[left][dialogue][p] Le mien et entrain de se détruire un peu 😅❤️❤️
[right][dialogue][p] Oui mais je parlais aussi de toi et moi 👉👈❤️
[left][dialogue][p] Ouii mais nous deux ça dure depuis longtemps toujours ❤️❤️
[right][dialogue][p] Toi et lui ça doit pas être facile ça fait un moment que c dure jai l'impression🥺❤️
[left][dialogue][p] Bah en mode ont c’est vu y’a pas longtemps pas ce week end là mais l’autre d’avant <br> Et quand il et repartie depuis le dimanche 18h j’ai pas de nouvelle.. <br>après la situation et hyper compliqué et tout et il et vraiment pas bien mais bon ❤️❤️🙂
[right][dialogue][p] D'accord 👉👈❤️
[center][info][h2] plus tard
[left][dialogue][p] il m'a tromper il m'a humilier il m'a manipuler
[left][dialogue][p] iil m'a traiter d'ordure
[left][dialogue][p] que au moin lui avais une dignité
[right][dialogue][p] c'est horrible
[left][dialogue][p] C'est pour ça que je suis mal
[right][dialogue][p] Tktp je suis là ça va aller
[left][dialogue][p] Merci mon chat
[left][dialogue][p] Je t’aime fort 🥹

[left][dialogue][video] assets/video/faite pareil.mp4
`;

var childClich = `
[left][info][h2] her<3
[left][dialogue][img] assets/image/fairycar.png
[right][dialogue][img] assets/image/hehecar.png

[left][dialogue][p] yay
[left][dialogue][p] lub u
[left][dialogue][p] chipi chipi
[right][dialogue][p] lub uuuuu too
[left][dialogue][p] chapa chapa
[left][dialogue][p] dubi dubi
[right][dialogue][p] DABA DANA
[right][dialogue][p] MAGICO MI
[right][dialogue][p] DUBI DUBI BOOM
[left][dialogue][p] i just wanna be your sigma
[right][dialogue][p] Youre so skibidiii
[right][dialogue][p] ur already my sigma
[right][dialogue][p] my skibidi
[left][dialogue][p] oh yeah?
[left][dialogue][p] mwah
[center][info][h2] later
[left][dialogue][p] OMG HIIIIII
[left][dialogue][p] MARRICA YAAAAAA
[right][dialogue][p] HELLOOOO
[right][dialogue][p] HALLO
[right][dialogue][p] HALLOo
[left][dialogue][p] HALLOOO
[right][dialogue][p] HALLo
[center][info][h2] after a while
[right][dialogue][p] ok ok
[right][dialogue][p] mwa mwa
[right][dialogue][p] take care sweetheart
[right][dialogue][p] hope you get your genshin impact waifus
[right][dialogue][p] have a nice daaaay <33
[right][dialogue][p] thankuuuuuuuuuuuuu
[left][dialogue][p] i love you
`;

var reveurToujours = `
[right][info][h2] Melide

[center][info][h2] 2023
[center][info][p] sortie du premier clip Tout doux, démons en plein stage loin de ma maison
[right][dialogue][img] assets/image/toutdoux.png

[center][info][h2] 2023
[left][dialogue][p] Mec j'étais sur le point de m'endormir et dans mes pensées je me suis dit ptn on c'est vue 4 fois une première fois une journée " t'avais fait ma prod pixel " la deuxième fois " ou on c'était vue un petite aprem ( t'avais coupé tes cheveux et moi aussi )et j'avais eu la rage c'était trop court une troisième fois où tes rester dormir 3 jours je crois et on est allé à la fête foraine et une quatrième fois où tes venue , on a beaucoup marché et à la fin tu devais rentrer mais ta raté ton bateaux donc ta dormi avec moi noah et vt ( tes parti le lendemain) et d'ailleurs je crois que t'avais péter ton tel et ta mère m'avait dm pour me demander ou t'étais et j'avais tenté de la rassurer vu que je savais que tu venais de prendre le bateaux et y avait une fête dans le parc paofai,  bref mec je te jure que je garde de tahiti des trés bon souvenir grâce à 3 chose quasiment : les soirées pyjama avec les autres, les campings, et toi ( sa sonne gay) bref il est 1h du mat mais fallait que je le dise
[right][dialogue][p] Mec vrm je repense souvent à ça ! Personnellement notre rencontre ça m’as fait grandir car vraiment je ne voyais personne et la première fois que je revois quelqu’un ça se passe ultra bien vraiment ça m’as redonné un espoir de pouvoir sociabilisé ! Vraiment je suis ptn de trop heureux que nos chemins se sont croisés et je veux trop qu’on aille loin ensemble 💪

[center][info][h2] 2022
[center][info][p] sortie de Est-elle un banger unanime
[right][dialogue][img] assets/image/estelle.png

[center][info][h2] 2021
[right][dialogue][video] assets/video/jereveplus-instru.mp4
[right][dialogue][p] Y a cette version aussi que personne n'a jamais vu
[right][dialogue][video] assets/video/jereveplus-alt.mp4

[center][info][h2] 2020
[left][dialogue][img] assets/image/newolympia.png
[left][dialogue][p] Congratulations on taking second place in the challenge! It was really close!
[right][dialogue][p] I'm glad to win second place! Thank you for everything! :)

[right][info][h2] En vrai j'avais le seum d'être deuxième

[center][info][h2] 2020
[right][dialogue][p] Salut! Je voudrai être candidat pour Twitch à un incroyable talent.
[right][dialogue][p] Je suis Melide, je suis auteur interprète producer, et j'aurais envie de partager ma passion du chant à la guitare.
[right][dialogue][p] Par contre, je ne suis pas trop d'accord avec le fait de me montrer en caméra, je ne suis pas du tout à l'aise en cam mais j'ai moins de mal sans caméra
[right][dialogue][p] Je ne sais pas si il y a d'autres informations à fournir, si jamais il y a besoin de quoi que se soit je suis toujours disponible ^^ Bonne journée/soirée ! 
[left][dialogue][p] Pas de soucis pour la caméra, on te fera passer qu’en vocal dans ce cas là!

[center][info][h2] devenu champion cringeos et c'est comme ça qu'est né la musique CatnipTv

[center][info][h2] 2020
[right][dialogue][p] Tout le début jusqu’à 0:59 c’est à toi<br><br>Ma partie est à partir de 1:28<br><br>Et si tu peux caler un truc stylé à 2:42 ce serait ultra chouette 😱
[left][dialogue][p] lourd faut j'écoute ça, avant faut je te parle de mes aventures avec le lovens
[center][info][h2] puis snaf et moi on a sortis Larme Noire
[right][dialogue][img] assets/image/larmenoir.png

[center][info][h2] ...
<br><br><br>
[center][dialogue][p] Et aujourd'hui, 2024, on sort Photo Souvenir
<br><br><br>
`;

var plusEspace = `
[right][info][h2] John
[center][info][h2] 2022

[right][dialogue][img] assets/image/stockage.JPG

[right][dialogue][p] Mon iPad continue de crashed
[right][dialogue][p] Mais je suis tellement un génie que j'arrive à contourner le crash :D
[right][dialogue][p] Ils programme vrm leur os avec de la pisse
[right][dialogue][p] Ils mettemt un plafond artificiel en dessous de ton espace actuel
[right][dialogue][p] Du coup le chiffre peut fluctuer de 10Go de difference
[right][dialogue][p] Et les mobile dépendent du stockage donc jsuis dans la merde
[left][dialogue][p] Après ils font expres de programmer leurs appareils pr qu'ils déconnent au bout de qlq années aussi
[left][dialogue][p] Mais g pas compris genre si t'as plus d'espace tu accèdes plus à l'ipad tu peux mm pas faire de l'espace en fait
[left][dialogue][p] Mdrr go prendre un 128 go pour être tranquille
[right][dialogue][p] ils ont bien reussi leur strategie marketing ses fdp
[right][dialogue][p] si jamais t'es bloquer comme ça j'ai une astuce
[right][dialogue][p] ouvre tes notifs au lieu de faire ton mot de passe
[right][dialogue][p] Tu cliques sur une notif si t'as le bonheur d'en avoir une
[right][dialogue][p] Il te propose de faire le mot de passe tu le fais et ça t'ouvres l'application au lieu de l'écran d'acceuil vu que c'est lui qui fait crash

[center][info][h2] 2024

[right][dialogue][p] Je veux trop te faire des vocs pour t'expliquer 
[right][dialogue][p] Mais j'ai plus d'espace avec la musique
[right][dialogue][p] Une musique ça prend 250mo minimum
[left][dialogue][p] Omg c'est galère l'espace en vrai
[right][dialogue][p] ( heuresement icloud existe )
[right][dialogue][p] Je vais essayer de faire trois dernier sons pour l'album puis je reinstalle insta

[left][dialogue][audio] assets/music/elovoc-1.mp3
[left][dialogue][audio] assets/music/elovoc-2.mp3

[right][dialogue][p] vsy faut que j'ai des idées pour les 3 derniers
[right][dialogue][p] OUI DEPUIS DES ANNÉES J'AI UN ESPACE SATURÉ BAHAHAHAHHAHAHAHAHAH
[left][dialogue][p] 🤣🤣🤣
[right][dialogue][p] jv faire un son dessus
`;

var babyKsk = `
[right][info][h2] John
[left][dialogue][img] assets/image/lui&moi.jpg
[right][dialogue][p] <3..
[left][dialogue][p] Tu sais très bien que t'es aussi important pour moi..
[left][dialogue][p] On en a déjà parler
[left][dialogue][p] Il est là mais toi aussi
[right][dialogue][p] J'ai toujours un peu de jalousie dsl <3
[right][dialogue][p] Je t'imagines encore avec lui <3
[left][dialogue][p] T'excuse pas c'est rien j'y suis aussi moi et là photo elle date avec C'st compliqué en ce moment
[right][dialogue][p] Tkt pas <3
[right][info][h2] Vu.
`;

var sorcellerie = `
[right][info][h2] John

[left][dialogue][img] assets/image/us-spiderman.jpg

[left][dialogue][p] Can it be real? don't want to just imagine it i wanna be with you
[right][dialogue][p] be my crazy girlfriend please
[right][dialogue][p] it has to be real we will be together
[left][dialogue][p] happy to hear that
[left][dialogue][p] i'll be yours
[left][dialogue][p] and i love you

[left][dialogue][p] HEHE
[right][dialogue][p] Im coming
[left][dialogue][p] You cumming? :)
[right][dialogue][p] Where do you want me to cum?
[left][dialogue][p] On me
[left][dialogue][p] Of course
[left][dialogue][p] Like
[left][dialogue][p] I'll be sad otherwise
[right][dialogue][p] *I kinda asked on about ig or discord but Im still into it*
[left][dialogue][p] Well

[left][dialogue][img] assets/image/side-eye.jpg

[right][dialogue][p] I kinda like breaking the rules with you
[left][dialogue][p] i like that too
[left][dialogue][p] Don't mind cause it's you
[right][dialogue][p] good girl
[left][dialogue][p] THAT'S CHEATING
`;


var jeanneCov = `
[right][info][h2] Coucou
[right][dialogue][p] j'ai toujours kiffer les vielles music
[right][dialogue][p] Hotel california, Pour some sugar on me et tralali en anglais
[right][dialogue][p] en francais jai grandit avec Lorie (ensorcelée)
[right][dialogue][p] Mais bizaremment jai retrouver cette musique de Laurent Voulzy qui m'a marquer
[right][dialogue][img] assets/image/laurentvoulzy.png
[right][dialogue][p] Je devais en faire une reprise
[right][dialogue][p] Jai pas pu la mettre dans l'album donc je le met la
[right][dialogue][audio] assets/music/mp3/impossible/jeanne-cover.mp3
[right][dialogue][a] https://youtu.be/0bnZhBrcyzo?si=WCsFPSv6tESa4cKDp
`;

var fvgl = `
[right][info][h2] John
[right][dialogue][p] Jtenvoie le lien <3
[right][dialogue][p] sur discord
[right][dialogue][p] ou jsp
[right][dialogue][p] dinguerie cque tu fais
[right][dialogue][p] jte suce
[left][dialogue][p] tes aller a lecole ou tes pas aller a lecole
[left][dialogue][p] vsy jv vrm essayer fvg
[left][dialogue][p] jespere juste que jaurai une version avec ta partie fini
[left][dialogue][p] si tas open envoie
[center][info][h2] One eternity later 
[left][dialogue][p] Melhin?
[left][dialogue][p] Renvoi le son stp :,D
[center][info][h2] One thousand years later
[right][dialogue][p] Tiens sorry du retard jai fait ca
[right][dialogue][audio] assets/music/mp3/impossible/fvgl-ft-tomy.mp3
[left][dialogue][p] Mais c'est pas vrai t'es vivant
[left][dialogue][p] auft lourd le mix
[left][dialogue][p] Dsl j’avais prévu de bosser pour fgv comme j’fais plus rien sauf que au final j’ai fais ça
[left][dialogue][a] https://soundcloud.com/denjivsslayy/last-birthday
[left][dialogue][a] https://soundcloud.com/denjivsslayy/oyasumi-platforms-version
[left][dialogue][a] https://soundcloud.com/denjivsslayy/0-passions-jsuis-lmechant-quon-deteste-dans-les-films
[left][dialogue][a] https://soundcloud.com/denjivsslayy/jcrois-jai-des-ecailles-et-jpense-avoir-des-cornes-aussi-jsuis-lmec-mort-quon-loot
[left][dialogue][p] Donc j’pense faudra attendre pour fgv 😂😂
[center][info][h2] The world has ended two times when John has sent this message
[right][dialogue][p] Salut je suis ton ex toxique préféré qui revient sans prevenir
[right][dialogue][p] on fait Fvg?
[left][dialogue][p] J’fais pas de musique en ce moment 😔
[left][dialogue][p] Redonne moi mes passions et donne-moi de l’inspi
[right][dialogue][p] prend du repos, mais des que t'as envie de tout niquer jai interet detre present!
[left][dialogue][p] C’est a toi de voir ça 😂
[center][info][h2] il avait raison
[center][info][h2] mais peut etre un jour fvg sera poster je le veux 
`;

var teataiti = `
[right][dialogue][p] Enfaite j'ai juste vu mon ancienne crush de primaire en prenant le bus
[right][dialogue][p] Cetait trop bizarre
[right][dialogue][p] mon coeur genre il a sauter un battement
[right][dialogue][p] de voir ton crush denfance toute grandit c'est incrr
[right][dialogue][audio] assets/music/mp3/impossible/teataiti.mp3
`;

var deeperInner = `
[right][info][h2] John
[right][dialogue][p] Si vous le saviez pas
[right][dialogue][p] ( même si cest dur de ne pas le savoir avec moi )
[right][dialogue][p] Jai un tres mauvais rapport avec moi, mon image et qui je suis en général
[right][dialogue][p] fallait forcement que je le mette en musique
[right][dialogue][audio] assets/music/mp3/impossible/deeper inner thoughts.mp3
[right][dialogue][p] Update : J'essaie d'y remédier et ça avance bien <3
`;

var deux22 = `
[right][info][h2] John
[right][dialogue][p] Ca devait être la suite de 1h11
[right][dialogue][p] mais en anglais
[right][dialogue][p] jai pas pu poser sur linstru bien que je laime bien
[right][dialogue][p] puis y a pas une grosse hype autour de 1h11
[right][dialogue][p] Bien que moi jai une grosse hype autour de ce son
[right][dialogue][p] Est ce que je fais des sons pour vous et pas pour moi ?
[right][dialogue][p] non
[right][dialogue][p] Par contre je les postes pour vous
[right][dialogue][p] Y a pleins de choses que je ne poste pas et que vous ne verrez jamais 😚
[right][dialogue][p] ( et à juste titre des fois :,) )
[right][dialogue][audio] assets/music/mp3/impossible/DeuxAm22-prod-demo.mp3
`;

var everyGirls = `
[right][info][h2] John
[right][dialogue][p] malgré les apparences 
[right][dialogue][p] je jure jsuis pas un charo
[right][dialogue][p] irl jsuis tout mignon gentil
[right][dialogue][p] dans la vie je pourrais m'appeler jean tellement jsuis gentil
[right][dialogue][p] jai un tête à m'appeler Bravo le champion
[right][dialogue][p] bref par contre j'ai tendance à trop aimer 
[right][dialogue][p] les ruptures c'est très difficile
[right][dialogue][p] mais hônnetement avec tout ce que je fais des fois c'est mériter 
[right][dialogue][p] ( en ligne je suis méchant agrou )
[right][dialogue][p] du coup tiens
[right][dialogue][p] ca suivait pas trop ma da en anglais
[right][dialogue][audio] assets/music/mp3/impossible/every-types-of-girls-demo.mp3 
`;

var nora = `
[right][info][h2] John
[right][dialogue][p] Elle est compliqué à faire celle là
[right][dialogue][p] la prod est incr, un peu dans le mood Je ferais avec mais version Radiohead
[right][dialogue][p] ou Hotel California
[right][dialogue][p] bref faut que je fasse des recherches sur la Noradrénaline
[right][dialogue][p] dites moi en dm si vous connaissez un truc dessus
[center][info][h2] pas de demo cette fois deso je travaille dessus
`;

var tahitien1 = `
[right][info][h2] John
[right][dialogue][p] Mes musiques en tahitien ont un mood particulier
[right][dialogue][p] En français je parle de sentiments
[right][dialogue][p] En anglais je m'amuse avec des vibes digitales
[right][dialogue][p] En tahitien c'est très solenelle bien que je fasse bcp de fautes encore
[right][dialogue][p] ma première chanson en tahitien a beaucoup été félicité pour non seulement avoir essayer
[right][dialogue][p] mais pour avoir réussi à faire quelques choses de bien malgré ma méconnaissance de la langues
[right][dialogue][p] sur ce morceau je devais justement exprimer ma méconnaissance de ma langue 
[right][dialogue][p] mais d'arriver avec des mots simple mon amour pour ma culture
[right][dialogue][p] je peux juste pas le poster parce que jai fait la prod sur fl studio gratuit 😂
[right][dialogue][a] https://www.youtube.com/watch?v=HMkt49rglaQ
[right][dialogue][p] ( askip je peut me faire flag si je la poste je vais perdre mon compte et tout )
[right][dialogue][p] bref tenez 
[right][dialogue][audio] assets/music/mp3/impossible/aita-vau-i-ite-eaha-te-rave.mp3
`;

var laVie = `
[right][info][h2] John
[right][dialogue][p] un peu nul cette intru là non?
[right][dialogue][p] dites moi ce que vous en pensez
[right][dialogue][audio] assets/music/mp3/trash/lavie-prod-demo.mp3
`;

var jeFeraisAlt = `
[right][info][h2] John
[right][dialogue][p] Hônnetement quand j'ai fais Je ferais avec
[right][dialogue][p] je me suis dis faut j'essaie dans un autre style voir si ca me plait
[right][dialogue][p] du coup jai fait ca mais je prefere la première
[right][dialogue][audio] assets/music/mp3/trash/je-ferais-avec-trash.mp3
[right][dialogue][p] Jv surement le poster en entier sur la nouvelle chaine musique !
[right][dialogue][a] https://www.youtube.com/channel/UCKTLiCALCZp5X0EXATkpk2A
`;

var dekStrux = `
[right][info][h2] John
[right][dialogue][p] Vous le savez jaime bcp m'amusez
[right][dialogue][p] Ca a donner Pisstrack dans le premier album
[right][info][p] ( n'allez pas écoutez )
[right][dialogue][p] Bah là pareil je voulais déconner
[right][dialogue][p] Dans un album Pop, mettre un son de chez moi
[right][dialogue][p] en plus je lai mal fait
[right][dialogue][p] deso ceux qui font du deck
[right][dialogue][p] bref
[right][dialogue][audio] assets/music/mp3/trash/dek-struction-prod-demo.mp3
`;

var ptnClope = `
[right][info][h2] John
[right][dialogue][p] presque tout mon entourage fument
[right][dialogue][p] y a pas un endroit où j'irais malheuresement où ça ne fume pas
[right][dialogue][p] et c'est le cas pour beaucoup de gens
[right][dialogue][p] ca me fait de la peine quand ils me disent
[left][dialogue][p] " Ouais fait pas ça, te met pas dans les cigarettes ca va te ruiner la vie "
[right][dialogue][p] puis même pas deux minutes après
[left][dialogue][p] " Tiens tu veux essayer? "
[right][dialogue][p] pour enfin me dévisager quand je refuse
[right][dialogue][p] jai fait une instru sur ca du coup mais bon cest pas très propre
[right][dialogue][audio] assets/music/mp3/trash/ptn-dclope-prod-demo.mp3
`;

var onDeco = `
[right][info][h2] John
[right][dialogue][p] je me suis éclater à la faire
[right][dialogue][p] jai envoyer a des amis ils étaient moyen chaud
[right][dialogue][p] ( je peut comprendre )
[right][dialogue][p] mais contexte : jme suis grave inspiré des musiques que j'écoutais sur xbox
[right][dialogue][p] jpourrais faire ce type de son tout les jours
[right][dialogue][p] jpouvais pas la poster prcq cetait dans ma phase de doute existentielle bahaha
[right][dialogue][a] https://soundcloud.com/melide/on-decolle-en
[right][dialogue][p] si vous voulez jpeut la refaire
`;

var vacance = `
[right][info][h2] John
[right][dialogue][p] je veux rien savoir 
[right][dialogue][p] ce son pour moi surpasse est elle
[right][dialogue][p] ca fait plusieurs pote que jvois ca fait
[left][dialogue][p] "gnegnegne cest bien mais pas à la hauteur de est elle"
[left][dialogue][p] "gnegnegne"
[left][dialogue][p] "je met les céréales après le lait parce mes parents ne m'aimes pas"
[left][dialogue][p] "gnegnegne"
[right][dialogue][p] cpa ma faute si tas de mauvais goût
[right][info][h2] ouah comment je suis énervé une dinguerie
[right][dialogue][p] jai envie de faire une animation anime rien que pour ce son
[right][dialogue][p] tellement je laime ce son
[right][dialogue][p] pour vous dire
[right][info][h2] ca va etre long
[right][dialogue][p] Javais complètement oublier cette musique
[right][dialogue][p] je lai retrouver paumer dans mon drive
[right][dialogue][p] jai fait
<br>
[center][dialogue][p] Dis donc
[center][dialogue][p] mais ce serait pas mon son favoris? 
[center][dialogue][p] Je chantais quoi dessus déjà
<br><br><br><br>
[right][dialogue][p] j'ai rééecouter jai rougis comme une gamine avec son premier copain quand ils se font leur premier bisou sur la bouche
[right][dialogue][p] et en même temps c pas agréable prcq les gens autour ils jugent
[right][dialogue][p] vsy cest tout pour moi aller ciao
[right][dialogue][audio] assets/music/mp3/impossible/Att-les-vacances.mp3
`;

var afterHim = `
[right][info][h2] John
[right][dialogue][p] En gros jai entendu un patterne d'une musique de Tomy que jai trop kiffer
[right][dialogue][p] Du coup jai copi.. hum je me suis inspiré
[right][dialogue][a] https://soundcloud.com/denjivsslayy/jsuis-dans-ma-barque
[right][dialogue][p] fun fact : jai mixer le bail
[right][dialogue][p] cest pour ca on entend mieux sa voix sur celle la que ses nouvelle musique
[right][dialogue][p] ( je tire a balle réell pah pah pah )
[right][dialogue][p] en vrai ma version est moin bien et en plus elle est en anglais
[right][dialogue][p] Tomy va pas aimer
[left][dialogue][p] gnegnegne
[right][dialogue][audio] assets/music/mp3/impossible/After-him.mp3
[right][info][h2] en vrai mes musiques on dirait grave la fin de quelques choses
`;

var oldPain = `
[right][info][h2] John
[right][dialogue][p] De base
[right][dialogue][p] Quand j'ai voulu faire cette musique
[right][dialogue][p] Je voulais un truc plutôt soft et presque idilique
[right][dialogue][p] je me suis rendu compte à la fin que la musique était triste et me faisait vraiment mal
[right][dialogue][p] Et cette ancienne version ne faisait pas ressentir ce que je ressentais vraiment
[right][dialogue][p] Je lai refaite
[right][dialogue][p] La nouvelle version révèle à 200% ce que je ressens sur cette histoire
[right][dialogue][p] je pleure encore comme un bébé sur la nouvelle pour vous dire
[right][dialogue][p] jvous balance l'ancienne version du coup pour la comparaison
[right][dialogue][audio] assets/music/mp3/trash/make-the-pain-go-away-trash.mp3
`;

var vacay = `
[right][info][h2] John
[right][dialogue][p] musique rigolote et beauuucoup trop douce
[right][dialogue][p] jvoulais la refaire
[right][dialogue][p] jsp comment
[right][dialogue][p] mais pg jvous le met là
[right][dialogue][audio] assets/music/mp3/impossible/Vacay.mp3
`;

var dadamoma = `
[right][info][h2] John
[right][dialogue][p] This song makes me cry a bit when i think of it
[right][dialogue][p] its about my dad and mom
[right][dialogue][p] i used to judge them when i was young
[right][dialogue][p] i judge them a bit too sometimes, but i understand where theyve been through
[right][dialogue][p] i love them, i make sure i tell them at night before sleep
[right][dialogue][p] i have to work on the song a bit more
[right][dialogue][p] it doesnt sound as great as i want it to be ;(
[center][info][h2] kinda working on it time to time
`;

var KskTcon = `
[right][info][h2] John
[right][dialogue][p] cest la première version de Baby ksk t'es con
[right][dialogue][p] c'est beaucoup plus fun comme mood
[right][dialogue][p] j'avais envie d'arrêter de déconner
[right][dialogue][p] Jai repris le refrain et je trouve lavoir améliorer
[right][dialogue][p] faites moi des comparaison si vous voulez ! je kiff
[right][dialogue][a] https://soundcloud.com/melide/quest-ce-que-tes-con
`;

var elleVeut = `
[right][dialogue][a] https://soundcloud.com/melide/elle-veut-que-du/s-61rJex2Pe0A?si=193f28ce5eae42fbb1a9b031981ea1f1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing
[right][dialogue][p] dsl d'avance
[right][dialogue][p] c mon premier son sur flstudio
`;