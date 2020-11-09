const storage = require('electron-json-storage');

storage.setDataPath("/Users/AsgerSturisTang/Documents/Programmering/Electron/RPECalculator/RPESettings.json")
document.addEventListener("DOMContentLoaded", function(event) {
    storage.get('Goals', function(error, data) {
        if (error) throw error;
        var textSquat = document.getElementById('Squat1RM').textContent;
        var textBench = document.getElementById('Bench1RM').textContent;
        var textDeadlift = document.getElementById('Deadlift1RM').textContent;
        var squatRM = parseInt(textSquat, 10);
        var BenchRM = parseInt(textBench, 10);
        var DeadRM = parseInt(textDeadlift, 10);
        var Squatprogress = squatRM/data.Squat
        var Benchprogress = BenchRM/data.Bench
        var Deadprogress = DeadRM/data.Deadlift
        document.getElementById('SquatProgress').style.width = Squatprogress * 100 + "%"
        document.getElementById('BenchProgress').style.width = Benchprogress * 100 + "%"
        document.getElementById('DeadliftProgress').style.width = Deadprogress * 100 + "%"
    })
});
