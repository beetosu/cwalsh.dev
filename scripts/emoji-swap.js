const emojis = [
    '🙇', '😎', '🐀', '🥸',
    '👍', '🧍', '🧦', '🐸', '🐱',
    '🐭', '🦆', '🦧', '🌱', '🪴',
    '🍎', '🎨', '🏛️', '💾', '‼️',
    '🦬', '🍊'
    ];
const idxEmoji = Math.floor(Math.random() * emojis.length);
const titleElement = document.getElementsByTagName("h1")[0];
titleElement.innerHTML = titleElement.innerHTML.replace('😄', emojis[idxEmoji]);