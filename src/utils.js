export const fetchRandomEmoji = () => {
    const emojis = ['🌲', '🐻','🐱', '🐵', '❤️', '🤔', '🔥', '⛷️', '🎻', '🍍', '🍺', '🛌', '🙃', '🤪', '😶', '🖖', '👨', '👩', '🙏',];

    return emojis[Math.floor(Math.random() * emojis.length)];
}