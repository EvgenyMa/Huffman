function HuffmanEncoding(str) {
    this.str = str;

    var countChars = {};
    for (var i = 0; i < str.length; i++)
        if (str[i] in countChars)
            countChars[str[i]] ++;
        else
            countChars[str[i]] = 1;

    var heap = new BinaryHeap(function(x){return x[0];});
    for (var ch in countChars)
        heap.push([countChars[ch], ch]);

    while (heap.size() > 1) {
        var pair1 = heap.pop();
        var pair2 = heap.pop();
        heap.push([pair1[0]+pair2[0], [pair1[1], pair2[1]]]);
    }

    var tree = heap.pop();
    this.encoding = {};
    this.generateEncoding(tree[1], "");

    this.encodedString = ""
    for (var i = 0; i < this.str.length; i++) {
        this.encodedString += this.encoding[str[i]];
    }
}

HuffmanEncoding.prototype.generateEncoding = function(ary, prefix) {
    if (ary instanceof Array) {
        this.generateEncoding(ary[0], prefix + "0");
        this.generateEncoding(ary[1], prefix + "1");
    }
    else {
        this.encoding[ary] = prefix;
    }
}

function encode(text) {
    var huff = new HuffmanEncoding(text);
    return huff.encodedString;
}



