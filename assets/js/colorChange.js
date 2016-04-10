/**
 * Created by tomi on 10/04/16.
 */

function colorChange(colorGroup, colorValue) {
    var group = document.querySelectorAll(colorGroup);
    for(var i = 0; i < group.length; i++){
        var styleType = group[i].getAttribute('data-color-style-type');
        group[i].style[styleType] = colorValue;
    }
}