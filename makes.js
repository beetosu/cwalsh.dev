function customizeList(entries, color) {
  for (div of entries) {
    let thumbnail = div.getElementsByClassName("thumbnail");
    if (thumbnail.length !== 0) {
      thumbnail[0].style.background = 'url("../img/' + div.id + '.png") center no-repeat';
      thumbnail[0].style.backgroundSize = 'cover';
    } else {
      div.getElementsByClassName("entry-text")[0].style.maxWidth = "calc(33em + 5vmax)";
      div.getElementsByClassName("entry-text")[0].style.minHeight = "calc(9em + 5vmin)";
    }
    div.style.backgroundColor = color;
  }
}
