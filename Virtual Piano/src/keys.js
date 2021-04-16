document.addEventListener("keydown", function (event) {
    if (event.code === "KeyA") {
        let audioA = document.createElement("AUDIO");
        audioA.src = "mp3/A.mp3";
        audioA.play();

    } else if (event.code === "KeyS") {
        let audioS = document.createElement("AUDIO");
        audioS.src = "mp3/S.mp3";
        audioS.play();

    } else if (event.code === "KeyD") {
        let audioD = document.createElement("AUDIO");
        audioD.src = "mp3/D.mp3";
        audioD.play();

    } else if (event.code === "KeyF") {
        let audioF = document.createElement("AUDIO");
        audioF.src = "mp3/F.mp3";
        audioF.play();

    } else if (event.code === "KeyG") {
        let audioG = document.createElement("AUDIO");
        audioG.src = "mp3/G.mp3";
        audioG.play();

    } else if (event.code === "KeyH") {
        let audioH = document.createElement("AUDIO");
        audioH.src = "mp3/H.mp3";
        audioH.play();

    } else if (event.code === "KeyJ") {
        let audioJ = document.createElement("AUDIO");
        audioJ.src = "mp3/J.mp3";
        audioJ.play();

    } else if (event.code === "KeyW") {
        let audioW = document.createElement("AUDIO");
        audioW.src = "mp3/W.mp3";
        audioW.play();

    } else if (event.code === "KeyE") {
        let audioE = document.createElement("AUDIO");
        audioE.src = "mp3/E.mp3";
        audioE.play();

    } else if (event.code === "KeyT") {
        let audioT = document.createElement("AUDIO");
        audioT.src = "mp3/T.mp3";
        audioT.play();

    } else if (event.code === "KeyY") {
        let audioY = document.createElement("AUDIO");
        audioY.src = "mp3/Y.mp3";
        audioY.play();

    } else if (event.code === "KeyU") {
        let audioU = document.createElement("AUDIO");
        audioU.src = "mp3/U.mp3";
        audioU.play();

    } else {
        console.log("wrong key pressed")
    }
});


