// Import the node-emoji library that we installed
import emoji from 'node-emoji';

// Get the emoji name that the user specified on the comman line
const emojiName = process.argv[2];

if (!emojiName) {
  // If the user did not specify an emoji
  // display a random emoji
  const randomEmoji = emoji.random();
  console.log(randomEmoji.emoji);
} else if (emojiName) {
  //If the user did specify an emoji,
  //try to find that emoji
  const foundEmoji = emoji.find(emojiName);

  if (foundEmoji) {
    // if the emoji exists (is valid), print the emoji

    console.log(foundEmoji.emoji);
  } else {
    //if the emoji doesnt exist (is invalid) print an error message
    console.log('Invalid emoji name');
  }
}
