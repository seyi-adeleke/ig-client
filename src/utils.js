export const fetchRandomEmoji = () => {
    const emojis = ['🌲', '🐻','🐱', '🐵', '❤️', '🤔', '🔥', '⛷️', '🎻', '🍍', '🍺', '🛌', '🙃', '🤪', '😶', '🖖', '👨', '👩', '🙏',];

    return emojis[Math.floor(Math.random() * emojis.length)];
}

export const validUrl = (url) => {
    return !url.startsWith('https://www.instagram.com/');
}