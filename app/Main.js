function getData() {
    if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
        alert('The File APIs are not fully supported in this browser.');
        return;
    }
    var input = document.getElementById('fileInput'),
        file = input.files[0],
        reader = new FileReader();
    reader.onload = function () {
        showSource(reader.result)
    };
    reader.readAsText(file);
    <!-- В лучшем случае вызывает callBack-->
}

function inputText() {
    var text = prompt("Input text for zip");
    showSource(text);
}

function encodeText () {
    // get source
    var source = document.getElementById("source").innerHTML;

    // encode
    var target = encode(source);
    // show target
    showTarget(target);
}

function showSource (text) {
    var sourceDiv = document.getElementById("source");
    sourceDiv.innerHTML = text;
}

function showTarget (text) {
    var targetDiv = document.getElementById("target");
    targetDiv.innerHTML = text;
}