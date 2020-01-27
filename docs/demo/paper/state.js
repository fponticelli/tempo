export var examples = ['paint', 'path_simplification', 'symbol'];
export var createState = function () {
    var hash = location.hash.substring(1);
    var selected = (examples.indexOf(hash) >= 0) ? hash : examples[0];
    return { examples: examples, selected: selected, mainAreaSize: undefined };
};
