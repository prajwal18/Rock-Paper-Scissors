import { DataContext } from "../context/DataContext";
import { useContext, useEffect, useState } from "react";

/*Importing Image*/
import logo from "../images/logo.svg";
import logo2 from "../images/logo-bonus.svg";

const TitleScore = () => {
    const { score } = useContext(DataContext);
    const [renderScore, setRenderScore] = useState(false);
    const { gameMode, onChangeGameMode, PLAY_OPT } = useContext(DataContext);

    useEffect(() => {
        setRenderScore(false);
        setTimeout(() => {
            setRenderScore(true);
        }, 1000);
    }, [score]);
    
    return(
        <div className="title-score">
            <div className="title">
                <div className={`rps ${gameMode === PLAY_OPT.RPS? 'play': ''}`} onClick={() => onChangeGameMode(PLAY_OPT.RPS)}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={`rpslz ${gameMode === PLAY_OPT.RPS? '': 'play'}`} onClick={() => onChangeGameMode(PLAY_OPT.RPSLZ)}>
                    <img src={logo2} alt="logo2" />
                </div>
            </div>
            <div className="score">
                <p>Score</p>
                <p className="score-num">{renderScore ? score: 'Na'}</p>
            </div>
        </div>
    );
}

export default TitleScore;