/**
 * Created by tomi on 10/04/16.
 */

/*
<div class="container">
    <div class="colorValues">
        <label><span>Main color:</span>
            <input id="cp1" class='colorpicker' value="#DD1021" data-color-group=".color1" />
        </label>
        <label><span>Background color:</span>
            <input id="cp2" class='colorpicker' value="#FFF" data-color-group=".color2" />
        </label>
    </div>
</div>
*/


function colorChange(colorGroup, colorValue) {
    var group = document.querySelectorAll(colorGroup);
    for(var i = 0; i < group.length; i++){
        var styleType = group[i].getAttribute('data-color-style-type');
        group[i].style[styleType] = colorValue;
    }
}

var colorPickers = document.querySelectorAll(".colorpicker");

for(var i = 0; i < colorPickers.length; i++) {
    var colorPicker = colorPickers[i];
    var colorPickerID = colorPickers[i].id;
    var colorGroup = colorPicker.getAttribute('data-color-group');

    var colorSavedValue = localStorage.getItem(colorGroup);

    $('#' + colorPickerID).spectrum({
        move: function(color) {
            colorChange(this.getAttribute('data-color-group'), color.toHexString());
        },
        change: function(color) {
            localStorage.setItem(this.getAttribute('data-color-group'), color.toHexString());
        },
        showInput: true,
        preferredFormat: "hex",
        //color: colorSavedValue
    });
    colorChange(colorGroup, colorSavedValue);
}