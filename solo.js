var synth = new Tone.PolySynth({
}).toMaster()

var frequencies = {"C0":   16.35,"C#0":   17.32,"Db0":   17.32,"D0":   18.35,"D#0":   19.45,"Eb0":   19.45,"E0":   20.60,"F0":   21.83,"F#0":   23.12,"Gb0":   23.12,"G0":   24.50,"G#0":   25.96,"Ab0":   25.96,"A0":   27.50,"A#0":   29.14,"Bb0":   29.14,"B0":   30.87,"C1":   32.70,"C#1":   34.65,"Db1":   34.65,"D1":   36.71,"D#1":   38.89,"Eb1":   38.89,"E1":   41.20,"F1":   43.65,"F#1":   46.25,"Gb1":   46.25,"G1":   49.00,"G#1":   51.91,"Ab1":   51.91,"A1":   55.00,"A#1":   58.27,"Bb1":   58.27,"B1":   61.74,"C2":   65.41,"C#2":   69.30,"Db2":   69.30,"D2":   73.42,"D#2":   77.78,"Eb2":   77.78,"E2":   82.41,"F2":   87.31,"F#2":   92.50,"Gb2":   92.50,"G2":   98.00,"G#2":  103.83,"Ab2":  103.83,"A2":  110.00,"A#2":  116.54,"Bb2":  116.54,"B2":  123.47,"C3":  130.81,"C#3":  138.59,"Db3":  138.59,"D3":  146.83,"D#3":  155.56,"Eb3":  155.56,"E3":  164.81,"F3":  174.61,"F#3":  185.00,"Gb3":  185.00,"G3":  196.00,"G#3":  207.65,"Ab3":  207.65,"A3":  220.00,"A#3":  233.08,"Bb3":  233.08,"B3":  246.94,"C4":  261.63,"C#4":  277.18,"Db4":  277.18,"D4":  293.66,"D#4":  311.13,"Eb4":  311.13,"E4":  329.63,"F4":  349.23,"F#4":  369.99,"Gb4":  369.99,"G4":  392.00,"G#4":  415.30,"Ab4":  415.30,"A4":  440.00,"A#4":  466.16,"Bb4":  466.16,"B4":  493.88,"C5":  523.25,"C#5":  554.37,"Db5":  554.37,"D5":  587.33,"D#5":  622.25,"Eb5":  622.25,"E5":  659.26,"F5":  698.46,"F#5":  739.99,"Gb5":  739.99,"G5":  783.99,"G#5":  830.61,"Ab5":  830.61,"A5":  880.00,"A#5":  932.33,"Bb5":  932.33,"B5":  987.77,"C6": 1046.50,"C#6": 1108.73,"Db6": 1108.73,"D6": 1174.66,"D#6": 1244.51,"Eb6": 1244.51,"E6": 1318.51,"F6": 1396.91,"F#6": 1479.98,"Gb6": 1479.98,"G6": 1567.98,"G#6": 1661.22,"Ab6": 1661.22,"A6": 1760.00,"A#6": 1864.66,"Bb6": 1864.66,"B6": 1975.53,"C7": 2093.00,"C#7": 2217.46,"Db7": 2217.46,"D7": 2349.32,"D#7": 2489.02,"Eb7": 2489.02,"E7": 2637.02,"F7": 2793.83,"F#7": 2959.96,"Gb7": 2959.96,"G7": 3135.96,"G#7": 3322.44,"Ab7": 3322.44,"A7": 3520.00,"A#7": 3729.31,"Bb7": 3729.31,"B7": 3951.07,"C8": 4186.01,"C#8": 4434.92,"Db8": 4434.92,"D8": 4698.64,"D#8": 4978.03,"Eb8": 4978.03}
var notes = ["a","a#","b","c","c#","d","d#","e","f","f#","g","g#","a","a#","b","c","c#","d","d#","e","f","f#","g","g#"]
const allNotes = Object.keys(frequencies)
for(i in allNotes) if(allNotes[i].includes("b")) allNotes.splice(i, 1)
var relativeMinors = {"C":"A","G":"E","D":"B","A":"F#","E":"C#","B":"G#","F#":"D#","C#":"A#","G#":"F","D#":"C","A#":"G","F":"D"}


var simpleSoloLengths = [eNote, sNote, eNote]

function fullScale(scale){
    let result = []
    for(let i = 2; i <= 6; i++){
        for(j in scale){
            if (["a","a#","b","c","c#","d","d#"].includes(scale[j]) === false && i === 2 || i !== 2 && i !== 6) result.push(scale[j]+i.toString());
            else if (i === 6 && !["d","d#","e","f","f#","g","g#"].includes(scale[j])) result.push(scale[j]+i.toString());
        }
    }
    return result
}

function minPent(key){
    key = key.toLowerCase()
    let keyNoteIndex = notes.findIndex((element) => element === key)
    var scale = {
        one: key,
        three: notes[keyNoteIndex + 3],
        four: notes[keyNoteIndex + 5],
        five: notes[keyNoteIndex + 7],
        seven: notes[keyNoteIndex + 10]
    }
    return fullScale(Object.values(scale))
}

function majPent(key){
    key = key.toUpperCase()
    return minPent(relativeMinors[key])
}

function countDecimals(num) {
    if(Math.floor(num) === num) return 0;
    return num.toString().split(".")[1].length || 0; 
}

function bend(one, two, duration, when, bassNotes){
    let note1 = frequencies[one.toUpperCase()]
    let note2 = frequencies[two.toUpperCase()]
    if (when == 0) when += 0.1

    let notesPlayed = []

    if (typeof bassNotes === "string") notesPlayed.push(bassNotes)
    else if (typeof bassNotes === "object") for (i of bassNotes) notesPlayed.push(i)

    let difference = note2 - note1

    if (note1 > note2) synth.triggerAttackRelease(note2, duration, when)

    else{
    // determine the increment
    let increment = 7

    let inc1 = duration/increment
    let inc2 = difference/increment
    for(let i = when+inc1, note = note1+inc2; i < duration; i+= inc1, note += inc2){
        if (Math.round(note) == Math.round(note2 - inc2 - inc2)) note = note2
        notesPlayed.push(note)

        play(notesPlayed, inc1, i)
        notesPlayed.splice(notesPlayed.length-1, 1)

    }
    console.log("bent " + one + " to " + two)
    }
}

//starting defauts:
var bar = []
var direction = "up"
var key = "a"
if(allNotes.includes($("#key").val().toUpperCase)) key = $("#key").val()
console.log(key)
var scale = minPent(key)
var note = scale[Math.floor(Math.random() * scale.length)].toUpperCase()
var tempo = 110.0
if(!$("#tempo").val().isNan()) tempo = parseFloat($("#tempo").val())

//note lengths:
var wNote = 240/tempo
var hNote = 120/tempo
var qNote = 60/tempo
var eNote = qNote/2
var triplet = qNote/3
var sNote = qNote/4
var sTriplet = eNote/3
var tNote = qNote/8

var simpleSoloLengths = [eNote, sNote, eNote]

function decideNoteLength(prevLength){
    bar.push(prevLength)
    if(bar.reduce((a, b) => a + b, 0) == wNote) bar = []

    if(bar.reduce((a, b) => a + b, 0) == wNote-sNote) return sNote

    else if(Math.floor(Math.random() * 8) === 1){
        //console.log(simpleSoloLengths[simpleSoloLengths.indexOf(prevLength) + 1])
        if (prevLength == eNote) return sNote
        if (prevLength == sNote) return eNote
    }
    else return prevLength
}

function decideNote(prevNote, prevDirection, currentScale){
    //decide direction:
    if(prevNote == currentScale[currentScale.length - 1]) direction = "down"
    else if(prevNote == currentScale[0]) direction = "up"
    else if((Math.floor(Math.random() * 4) === 1)) {
        if(prevDirection == "up") direction = "down"
        else if(prevDirection == "down") direction = "up"
    } 
    
    //return note:
    if(direction == "up") return currentScale[currentScale.indexOf(prevNote) + 1]
    else if(direction == "down") return currentScale[currentScale.indexOf(prevNote) - 1]
}

//play([ "a2", 284.5085714285711234567123451234561234565555555553612784777178754873], eNote, 0.123467961879618765087134605873498726087777726087560348759)

//bend("c4", "d4", qNote, 0, ["a2"])

console.log(minPent("a"))
play("c4", eNote, 0s)

var noteLength = eNote

console.log(sNote)
console.log(decideNoteLength(eNote))

for(let i = eNote*2; i < eNote*100;){
    noteLength = decideNoteLength(noteLength)
    i += noteLength

    note = decideNote(note, direction, scale)

    function playNormal(){
        play([note, key + "2"], noteLength, i)
    }

    function playBend(){
        //console.log("Start Note " + allNotes[allNotes.indexOf(note.toUpperCase()) - 2])
        bend(allNotes[allNotes.lastIndexOf(note.toUpperCase()) - 2], note, eNote, i)
        //console.log(i)
    }

    let options = [playNormal, playNormal, playNormal, playNormal]
    options[Math.floor(Math.random() * options.length)]()
}

function play(notes, length, when){
    //if(countDecimals(when) > 17) when = Math.round(when * (10**17)) / 10**17
    synth.triggerAttackRelease(notes, length, when)
}
