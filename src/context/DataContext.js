import { useState, createContext } from "react";
import { PLAY_OPT, PLAY, RESULTS } from "./Constants";

export const DataContext = createContext({});


const DataProvider = ({children}) => {
    const [gameMode, setGameMode] = useState(PLAY_OPT.RPS);
    const [userPlay, setUserPlay] = useState(null);
    const [computerPlay, setComputerPlay] = useState(null);
    const [result, setResult] = useState(null);
    const [score, setScore] = useState(0);


    const onChangeGameMode = (opt) => {
        setGameMode(opt);
        setScore(0);
        restart();
    }

    const onUserPlaySelected = (player) => {
        setUserPlay(player);
        const comp = gameMode === PLAY_OPT.RPS ? computerPlayMode(3): computerPlayMode(5);
        setComputerPlay(comp);
        evaluate(player, comp);
    }

    const computerPlayMode = (num) => {
        const numm = Math.ceil(Math.random() * num);
        switch(numm){
            case 1:
                return PLAY.ROCK.text;
            case 2:
                return PLAY.PAPER.text;
            case 3:
                return PLAY.SCISSOR.text;
            case 4:
                return PLAY.LIZARD.text;
            case 5:
                return PLAY.SPOCK.text;
            default: 
            return ""
        }
    }

    const evaluate = (player, comp) => {
        if (player === comp) {
            setResult(RESULTS.DRAW);
        } else if ( 
            (player === PLAY.PAPER.text && comp === PLAY.ROCK.text) ||
            (player === PLAY.PAPER.text && comp === PLAY.SPOCK.text) ||
            (player === PLAY.ROCK.text && comp === PLAY.SCISSOR.text) ||
            (player === PLAY.ROCK.text && comp === PLAY.LIZARD.text) ||
            (player === PLAY.SCISSOR.text && comp === PLAY.PAPER.text) ||
            (player === PLAY.SCISSOR.text && comp === PLAY.LIZARD.text) ||
            (player === PLAY.LIZARD.text && comp === PLAY.SPOCK.text) ||
            (player === PLAY.LIZARD.text && comp === PLAY.PAPER.text) ||
            (player === PLAY.SPOCK.text && comp === PLAY.SCISSOR.text) ||
            (player === PLAY.SPOCK.text && comp === PLAY.ROCK.text) 
            ){
                setScore(score + 1);
                setResult(RESULTS.WIN);
        } else {
            setScore(score - 1);
            setResult(RESULTS.LOSE);
        }
    };

    const restart = () => {
        setUserPlay(null);
        setComputerPlay(null);
        setResult(null);
    }


    return(
        <DataContext.Provider value={{
            gameMode, userPlay, computerPlay, result,
            score, PLAY, PLAY_OPT, RESULTS,
            onUserPlaySelected, restart, onChangeGameMode
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider