import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";

const PageStart = () => {
    const { userPlay, computerPlay, result, PLAY, restart, RESULTS } = useContext(DataContext);
    const [renderPartA, setRenderPartA] = useState(false);
    const [renderPartB, setRenderPartB] = useState(false);
    const [winner, setWinner] = useState(null);


    useEffect(() => {
        setTimeout(() => {
            setRenderPartA(true);
        }, 1000);
    }, []);


    useEffect(() => {
        if(renderPartA){
            setTimeout(() => {
                setRenderPartB(true);
                if(result === RESULTS.WIN) setWinner("p");
                else if (result === RESULTS.LOSE) setWinner("c");
                else setWinner("b");
            }, 500);
        }
    }, [renderPartA, result, RESULTS]);

    return(
        <div className="page-pick">
            {console.log(winner)}
            <div className="seg-one">
                <p>You picked</p>
                <div className={(winner === "p" || winner === "b" ? "win ": " ") + PLAY[userPlay.toUpperCase()].text}>
                    <button>
                        <img src={PLAY[userPlay.toUpperCase()].logo} alt={userPlay} />
                    </button>
                </div>
            </div>

            <div className="seg-three">
                <p>The house picked</p>
                {
                    renderPartA?
                        <div 
                        className={(winner === "c" || winner === "b" ? "win ": " ") + PLAY[computerPlay.toUpperCase()].text}>
                            <button>
                                <img src={PLAY[computerPlay.toUpperCase()].logo} alt={computerPlay} />
                            </button>
                        </div>:
                        <div className="sub-seg-three"></div>
                }
            </div>

            {
                renderPartB?
                <div className="seg-two">
                    <p>{result}</p>
                    <button onClick={() => restart()}>play again</button>
                </div>:
                <></>
            }
        </div>
    );
}

export default PageStart;