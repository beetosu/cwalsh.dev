function customizeList(entries, color) {
  for (div of entries) {
    let thumbnail = div.getElementsByClassName("thumbnail");
    if (thumbnail.length !== 0) {
      thumbnail[0].style.background = 'url("../img/' + div.id + '.png") 50% 50% no-repeat';
    }
    div.style.backgroundColor = color;
  }
}
