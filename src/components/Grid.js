import React from 'react';
import AudioButton from './AudioButton.js';
import { audioButtons } from './data.js';

function Grid() {

    console.log(audioButtons[0])

    const rows = [];
    audioButtons.forEach((button) => {
        // rows.push(<AudioButton name={button.fileName} text={button.text} />);
        rows.push(
            <audio ref={(ip) => { this.button.text = ip }}>
                <source src={require(`${button.fileName}`)} />
            </audio>
        )
    })
    // for (let i = 0; i < audioButtons.length; i += 1) {
    //     rows.push(<AudioButton name={audioButtons[i].fileName} text={audioButtons[i].text} />);
    // }

    return (
        <div class="grid">
            {rows}
        </div >
    );
}

export default Grid;
