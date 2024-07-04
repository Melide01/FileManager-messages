const content = document.getElementById('content')
const leftbar = document.getElementById('leftBar');
const rightbar = document.getElementById('rightBar');
var convcontainer;

var hideBtnR;
var hideBtnL;

// IMPORTANT
var is_released = false;
// IMPORTANT

var trackLiElementList = [];

const uidir = document.getElementById('UIdir');

var loadingText = [
    "initiating files",
    "initiating files.",
    "initiating files..",
    "initiating files...",
    "initiating files...."
]
var loadingText2 = [
    "maybe tomorrow ;)",
    "maybe tomorrow ;).",
    "maybe tomorrow ;)..",
    "maybe tomorrow ;)...",
    "maybe tomorrow ;)...."
]
var currentLoadingText = "loadingText";
const loadingScreen = document.getElementById('loadingScreen');
const loadingtext = document.getElementById('loadingText');
var animationLoadingIndex = 0;

// Animate loading screen
function animateLoadingScreen() {
    if (animationLoadingIndex < (window[currentLoadingText].length - 1)) {
        animationLoadingIndex ++;
    } else {
        animationLoadingIndex = 0;
    }

    loadingtext.textContent = window[currentLoadingText][animationLoadingIndex];

    setTimeout(() => {
        animateLoadingScreen();
    }, 600);
}

var currentfolder = '';

// Code when Page load
document.addEventListener('DOMContentLoaded', function() {
    const dirListToObj = Object.keys(trackDirInfo);
    
    // Creates the Dir list
    const closeButton = document.createElement('a'); closeButton.textContent = "Fermer"; closeButton.classList.add('closeButton');
    const autoClose = document.createElement('div'); autoClose.classList.add('UIautoclose');

    autoClose.addEventListener('click', () => {
        uidir.style.display = "none";
    });

    uidir.appendChild(autoClose);
    uidir.appendChild(closeButton);
    
    closeButton.addEventListener('click', () => {
        uidir.style.display = "none";
    });

    dirListToObj.forEach((element) => {
        const a = document.createElement('a'); a.innerHTML = '<i style="margin-right: 10px;" class="fa-regular fa-folder"></i>' + element;
        uidir.appendChild(a);

        a.addEventListener('click', () => {
            if (trackDirInfo[element]["name"] === currentfolder) {
                uidir.style.display = "none";
                return
            }

            uidir.style.display = "none";
            hideLeftBar = false;
            hideRightBar = false;
            leftbar.style.width = "30%"; rightbar.style.width = "70%";
            
            loadLeftBar(trackDirInfo[element]);
        });
    });
    uidir.style.display = 'none'

    // misc
    animateLoadingScreen()
    

    setTimeout(() => {
        // some troll hehehe ;)
        currentLoadingText = "loadingText2";
    }, 500000)
})

function loadTheExperience() {
    document.getElementById('attentionImportantWarning').style.opacity = 0;
    setTimeout(() => {
        if (!is_released) {
            return
        }
        loadingScreen.style.opacity = 0;
        setTimeout(() => {
            loadingScreen.style.display = "none";
            document.getElementById('attentionImportantWarning').style.display = "none";
            loadLeftBar(trackDirInfo.main);
        }, 200);
    }, 500 + (Math.random() * 2000));
}


var hideLeftBar = false;
var hideRightBar = false;
// Code that loads LeftBar en sah
function loadLeftBar(dir) {
    currentfolder = dir["name"]
    rightbar.innerHTML = "";
    const listToObject = Object.keys(window[dir.src]);
    const currentDir = window[dir.src];

    // Themes
    leftbar.style.backgroundColor = dir.theme.backgroundcolor

    leftbar.innerHTML = '';

    // Hide button
    hideBtnR = document.createElement('a'); hideBtnR.classList.add('hideButton'); hideBtnR.textContent = ">>>";
    hideBtnR.style.textAlign = "left";
    rightbar.appendChild(hideBtnR);
    
    if (hideRightBar) {
        leftbar.insertBefore(hideBtnR, leftbar.firstChild); hideBtnR.style.textAlign = "right";

        hideBtnL.style.display = "none";
        hideBtnR.textContent = "<<<"
        leftbar.style.width = "100%"; rightbar.style.width = "0%";
    }

    hideBtnR.addEventListener('click', () => {
        if (hideRightBar) {
            rightbar.insertBefore(hideBtnR, rightbar.firstChild); hideBtnR.style.textAlign = "left";
            convcontainer.style.height = "auto";
            
            hideBtnL.style.display = "block";
            hideBtnR.textContent = ">>>"
            leftbar.style.width = "30%"; rightbar.style.width = "70%";
        } else {
            convcontainer.style.height = "0";
            leftbar.insertBefore(hideBtnR, leftbar.firstChild); hideBtnR.style.textAlign = "right";

            hideBtnL.style.display = "none";
            hideBtnR.textContent = "<<<"
            leftbar.style.width = "100%"; rightbar.style.width = "0%";
        }
        hideRightBar = !hideRightBar;
    });

    hideBtnL = document.createElement('a'); hideBtnL.classList.add('hideButton'); hideBtnL.textContent = "<<<";
    leftbar.appendChild(hideBtnL);
    
    hideBtnL.addEventListener('click', () => {
        if (hideLeftBar) {
            hideBtnR.style.display = "block";
            hideBtnL.textContent = "<<<"
            leftbar.style.width = "30%"; rightbar.style.width = "70%";
            document.getElementById('tracklistElement').style.display = "block";
        } else {
            hideBtnR.style.display = "none";
            hideBtnL.textContent = ">>>"
            leftbar.style.width = "10%"; rightbar.style.width = "90%";
            document.getElementById('tracklistElement').style.display = "none";
        }
        hideLeftBar = !hideLeftBar;
    });

    // Creates conv container
    convcontainer = document.createElement('div'); convcontainer.id = "convContainer"; rightbar.appendChild(convcontainer);

    // Creates the list
    const folderIcon = document.createElement('i'); folderIcon.classList.add('fa-regular', 'fa-folder-open');
    leftbar.appendChild(folderIcon);


    const dirTitle = document.createElement('h1'); dirTitle.textContent = dir.name; leftbar.appendChild(dirTitle);

    const ul = document.createElement('ul'); ul.id = "tracklistElement";
    leftbar.appendChild(ul)

    listToObject.forEach((element, index) => {
        
        setTimeout(() => {
            const li = document.createElement('li'); const a = document.createElement('a');
            a.textContent = element;
            li.appendChild(a);
            ul.appendChild(li);
            trackLiElementList.push(li);

            li.addEventListener('click', () => {
                trackLiElementList.forEach((element2, index) => {
                    if (element2 !== li) {
                        element2.classList.remove('activeLi');
                    }
                });
                li.classList.add('activeLi');
                loadConv(currentDir[element])
            });



        }, (index * 100));
    });

    setTimeout(() => {
        const UIbutton = document.createElement('button'); UIbutton.textContent = "Change Directory"; ul.appendChild(UIbutton);

        UIbutton.addEventListener('click', () => {
            uidir.style.display = 'block';
        })
    }, (listToObject.length + 1) * 100)
}


function loadConv(conv) {
    conv = window[conv]

    const rules = [
        { regex: /\[(.*)\]\[(.*)\]\[(p|h2)\] (.*)/gim, replacement: '<div class="$1"><$3 class="$2">$4</$3></div>'},
        { regex: /\[(.*)\]\[(.*)\]\[(a)\] (.*)/gim, replacement: '<div class="$1"><$3 class="$2" href="$4" target="_blank">$4</$3></div>'},
        { regex: /\[(.*)\]\[(.*)\]\[(img)\] (.*)/gim, replacement: '<div class="$1"><$3 class="$2" src="$4"></$3></div>'},
        { regex: /\[(.*)\]\[(.*)\]\[(video)\] (.*)/gim, replacement: '<div class="$1"><$3 controls class="$2"><source src="$4" type="$3/mp4"></$3></div>'},
        { regex: /\[(.*)\]\[(.*)\]\[(audio)\] (.*)/gim, replacement: '<div class="$1"><$3 controls class="$2"><source src="$4" type="$3/mpeg"></$3></div>'},
    ]

    let output = conv;
    // console.log(testImg.test(output))
    for (let rule of rules) {
        output = output.replace(rule.regex, rule.replacement);
    }

    convcontainer.innerHTML = output.trim();
}