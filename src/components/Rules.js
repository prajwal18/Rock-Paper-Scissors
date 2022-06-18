import { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";

/*Images*/
import ruleImg from "../images/image-rules.svg";
import ruleImg2 from "../images/image-rules-bonus.svg";
import closeImg from "../images/icon-close.svg";


const Rules = () => {
    const [displayRules, setDisplayRules] = useState(false);
    const { gameMode } = useContext(DataContext);

    document.addEventListener('click', (event) => {
        if(event.target.matches(".close-rules") || !event.target.matches(".rules .rules-button")){
            setDisplayRules(false);
        }
    });

    return (
        <div className="rules">
            <button className="rules-button" onClick={() => setDisplayRules(!displayRules)}>Rules</button>
            <div className={`game-rule ${displayRules? 'dis-rules': 'hide-rules'}`} >
                <div className="title">
                    <p>Rules</p>
                    <img src={closeImg} className="close-rules" alt="close rules"/>
                </div>
                <div>
                    <img className="rule-img" src={gameMode === "rps" ? ruleImg: ruleImg2 } alt="game rules" />
                </div>
            </div>
        </div>
    )
}

export default Rules;