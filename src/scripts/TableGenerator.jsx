export const emojiBase = [
  "😭",
  "😂",
  "😉",
  "😇",
  "💘",
  "😊",
  "🥰",
  "😍",
  "✨",
  "🎉",
  "🎁",
  "🥳",
  "🔥",
  "😎",
  "✅",
  "🆗",
  "❤️",
  "⭐",
  "🍄",
  "🙏",
  "🤝",
  "🦄",
  "🐀",
  "🐁",
  "🧀",
];

function TableGenerator(numberOfTiles) {
  let objectTable = [];
  let usedEmojis = [];
  let id = 0;
  while (objectTable.length != numberOfTiles) {
    const randomIndex = Math.floor(Math.random() * emojiBase.length);
    const randomEmoji = emojiBase[randomIndex];
    if (usedEmojis.includes(randomEmoji)) {
      continue;
    }
    const oneObject = {
      id: id,
      pic: randomEmoji,
      clicked: false,
    };
    objectTable = [...objectTable, oneObject, { ...oneObject, id: id + 1 }];
    usedEmojis = [...usedEmojis, randomEmoji];
    id += 2;
  }
  const shuffledTable = shuffleArray(objectTable);
  return shuffledTable;
}

function shuffleArray(array) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[i],
    ];
  }

  return shuffledArray;
}

export default TableGenerator;
