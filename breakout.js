
function createBlocks() {
    var numblocks = 20;
    for (i = 0; i < numblocks; i++) {
        var elem = document.getElementById('row1');
        elem.className = "blocks";
        elem.id = "blocks" + 1;
    }
}
