const storage = require('electron-json-storage');

storage.setDataPath("/Users/AsgerSturisTang/Documents/Programmering/Electron/RPECalculator/RPESettings.json")

document.querySelector('#saveLift').addEventListener('click', function () {
    var date = new Date();
    var today = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    storage.set("History", {
        "Lift": {
            "Date": today,
            "Squat": {
                "Weight": document.getElementById("WeightSquat").value,
                "Reps": document.getElementById("RepsSquat").value,
                "RPE": document.getElementById("RPESquat").value
            },
            "Bench": {
                "Weight": document.getElementById("WeightBenchPress").value,
                "Reps": document.getElementById("RepsBench").value,
                "RPE": document.getElementById("RPEBench").value
            },
            "Deadlift": {
                "Weight": document.getElementById("WeightDeadlift").value,
                "Reps": document.getElementById("RepsDeadlift").value,
                "RPE": document.getElementById("RPEDeadlift").value
            }
        }
    }, function (error) {
        if (error) throw error;
    });

    window.alert("SAVED!")
})


