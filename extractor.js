var tag = document.getElementsByClassName("audio_row__performer_title")
list = new Array()
for (var i = 0; i < tag.length; i++){
list[i] = tag[i].innerText.replace(['\n'], ' ')}
window.open().document.write(list.join('<br/>'))
