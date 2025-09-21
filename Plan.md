# Wordle Game Clone

## 1. Game features

- 6 Guesses
- 6 letter words
- Keyboard under the game
- No Signing required
- Simple information in the TopBar about the game
-
-
-
-

## 2. React Features

- use Redux to control the state of the game and keep redux for scalability
- useEffect to fetch API which will be fetched locally from the server folder, so in the future we can put API form the cloud
- Main Game Component with all the features
- Each Letter represents smaller component
- use Tailwind Css do styling
- Keyboard component will be render from the object that will determine what keys will be used
- Temporarily, load the words from the API and randomise the answer
-

## 3. Redux Features

- board: 6 rows × 6 columns (guesses).
- currentRow + currentCol: Track where player is typing.3
- answer: The hidden solution word.
- dictionary: All valid 6-letter words.
- keyboard state: Tracks each letter’s best-known status (absent/present/correct).
- status: "idle" | "loading" | "playing" | "won" | "lost" | "error".
- message: For errors (e.g., “Not in word list”).
-
