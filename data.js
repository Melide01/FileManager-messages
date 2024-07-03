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
window.trashList = {
    "je ferais avec trash": "",
    "make the pain go away v.1": "",
    "dek-struction": "",
    "ptn de clope": "",
    "on décolle": "",
    "Vacay": "",
    "please stay momma": "",
    "i know you hate me too": ""
}
window.ouinList = {
    "true deeper inner thoughts": "",
    "Melide - Evadls": "Evadls",
    "mentheuse": "",
    "Melide 2am22": "",
    "every-types-of-girls": "",
    "t à tahiti": "",
    "On attends les vacanves": "",
    "elle va me tuer": "",
    "Melide aita vau i ite eaha te rave": "",
    "fvgl ft. Tomy": "",
    "Jeanne cover": "",
    "La vie est étrange": "",
}
window.misc = {
    "Luciole": "",
    "Projet D9": "",
    "Plight": ""
}




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

<center><info><h2> Et aujourd'hui, 2024, on sort Photo Souvenir
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