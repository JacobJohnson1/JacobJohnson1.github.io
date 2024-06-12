function removeExt(x) {
    x.replace('.mp3', '')
}

const unsortedButtons = [
    {
        fileName: '/driving isnt the only thing.mp3',
        text: "driving isn't the only thing"
    },
    {
        fileName: '/I THINK IM BOUT TO STEAL.mp3',
        text: "I THINK I'M BOUT TO STEAL"
    },
    {
        fileName: '/Krusty Krab Pizza.mp3',
        text: "Krusty Krab Pizza"
    },
    {
        fileName: '/It is what it is.mp3',
        text: "It is what it is"
    },
    {
        fileName: '/Wildcard Bitches.mp3',
        text: "Wildcard Bitches"
    },
    {
        fileName: 'chantixRosa.mp3',
        text: "chantix rosa"
    },
    {
        fileName: '/Who Is Randy.mp3',
        text: "Who Is Randy"
    },
    {
        fileName: '/you finna get me cut.mp3',
        text: "you finna get me cut"
    },
    {
        fileName: '/im talkin to my friend.mp3',
        text: "im talkin to my friend"
    },
]

let audioButtons = unsortedButtons.sort((a, b) =>
    a.text.localeCompare(b.text));

console.log(audioButtons)

export { audioButtons };