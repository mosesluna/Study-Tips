var alanBtnInstance = alanBtn({
  key: "eaa118c885fa5378ea5872bc4ca777522e956eca572e1d8b807a3e2338fdd0dc/stage",
  onCommand: function (commandData) {
    //ALAN commands from main page to note-taking methods pages
    if (commandData.command === "outline") {
      window.location.replace("/Notetaking-Methods/outline.html");
    }
    if (commandData.command === "cornell") {
      window.location.replace("/Notetaking-Methods/cornell.html");
    }
    if (commandData.command === "boxing") {
      window.location.replace("/Notetaking-Methods/boxing.html");
    }
    if (commandData.command === "charting") {
      window.location.replace("/Notetaking-Methods/charting.html");
    }
    if (commandData.command === "mapping") {
      window.location.replace("/Notetaking-Methods/mapping.html");
    }
    if (commandData.command === "sentence") {
      window.location.replace("/Notetaking-Methods/sentence.html");
    }
    //ALAN commands from main pages to study techniques pages
    if (commandData.command === "spaced") {
      window.location.replace("/Study-Techniques/spaced.html");
    }
    if (commandData.command === "active") {
      window.location.replace("/Study-Techniques/active.html");
    }
    if (commandData.command === "pomodoro") {
      window.location.replace("/Study-Techniques/pomodoro.html");
    }
    if (commandData.command === "feynman") {
      window.location.replace("/Study-Techniques/feynman.html");
    }
    if (commandData.command === "sq3r") {
      window.location.replace("/Study-Techniques/sq3r.html");
    }
    if (commandData.command === "cue") {
      window.location.replace("/Study-Techniques/cue.html");
    }
    //ALAN commands from main page to about us page
    if (commandData.command === "about") {
      window.location.replace("/about.html");
    }
    //ALAN commands from any page to main page
    if (commandData.command === "index") {
      window.location.replace("/index.html");
    }
    //Ask ALAN "Who will be ballin'?"
  },
  rootEl: document.getElementById("alan-btn"),
});
