export const fetchRandomEmoji = () => {
    const emojis = ['🌲', '🐻','🐱', '🐵', '❤️', '🤔', '🔥', '⛷️', '🎻', '🍍', '🍺', '🛌', '🙃', '🤪', '😶', '🖖', '👨', '👩', '🙏',];

    return emojis[Math.floor(Math.random() * emojis.length)];
}

export const validUrl = (url) => {
    return !url.startsWith('https://www.instagram.com/');
}

export const detectDevice = {
    Android: function() {
        return navigator.userAgent.match(/Android/i) || false;
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    Mac: function() {
        return  /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
    },
    any: function() {
        return (detectDevice.Android() ||detectDevice.Mac() || detectDevice.BlackBerry() || detectDevice.iOS() || detectDevice.Opera() || detectDevice.Windows());
    }
}