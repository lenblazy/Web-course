
class gquery {
    constructor(el) {
        if (el.indexOf('.') > -1) {
            el = el.replace(".", "");
            this.elements = document.getElementsByClassName(el);
        } else if (el.indexOf('#') > -1) {
            el = el.replace("#", "");
            this.elements = document.getElementsById(el);
        } else {
            this.elements = document;
        }

        
    }

    addClass(cl) {
        var count = 0;

        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].className += ' ' + cl;
        }
    }

}

function gQuery(el) {
    var element = new gquery(el);
    return element;
}