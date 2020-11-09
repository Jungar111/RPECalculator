const storage = require('electron-json-storage');

storage.setDataPath("/Users/AsgerSturisTang/Documents/Programmering/Electron/RPECalculator/RPESettings.json")

document.querySelector('#saveMax').addEventListener('click', function () {
    storage.set("Goals", {
        "Squat" : document.getElementById("TargetWeightSquat").value,
        "Bench" : document.getElementById("TargetWeightBench").value,
        "Deadlift" : document.getElementById("TargetWeightDeadlift").value
        }, function (error) {
        if (error) throw error;
    });
    window.alert("SAVED!")
})