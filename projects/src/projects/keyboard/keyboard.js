import react from 'react';
import './keyboard.css'; // Import CSS for styling
export default class Keyboard extends react.Component{
    render() {
        return (
            // kayboard  ui design
            <div className="keyboard">
                <div className="keyboard-row">
                    <button className="key">1</button>
                    <button className="key">2</button>
                    <button className="key">3</button>
                    <button className="key">4</button>
                    <button className="key">5</button>
                    <button className="key">6</button>
                    <button className="key">7</button>
                    <button className="key">8</button>
                    <button className="key">9</button>
                    <button className="key">0</button>
                    <button className="key">-</button>
                    <button className="key">+</button>  
                    <button className="key">Backspace</button>  


                </div>
                
            </div>
        )


}}