var $ = function (id) {
    return document.getElementById(id);
};

window.onload = function()
{
    var beer = "";
    for( var i = 99; i >= 2; i--)
    {
        beer = beer + "<br/>" + i + " bottles of beer on the wall," + "<br/>" + i + " bottles of beer." +
                    "<br/>" + " Take one down, pass it around, "  + "<br/>"  + (i-1) +
                     "  bottles of beer on the wall." + "<br/>";
        $("beer").innerHTML = beer;
    }
};