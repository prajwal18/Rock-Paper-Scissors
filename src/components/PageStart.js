import PlayOption from "./PlayOption";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";


const PageStart = () => {
    const { gameMode, PLAY, PLAY_OPT } = useContext(DataContext);
    return (
        <div className={`page-start ${gameMode === PLAY_OPT.RPSLZ ? 'rpslz': '' }`}>
            {
                gameMode === "rps"?
                <>
                    <PlayOption logo={PLAY.ROCK.logo} option={PLAY.ROCK.text} />
                    <PlayOption logo={PLAY.PAPER.logo} option={PLAY.PAPER.text}/>
                    <PlayOption logo={PLAY.SCISSOR.logo} option={PLAY.SCISSOR.text}/>
                </>:
                <>
                    <PlayOption logo={PLAY.ROCK.logo} option={PLAY.ROCK.text} />
                    <PlayOption logo={PLAY.PAPER.logo} option={PLAY.PAPER.text}/>
                    <PlayOption logo={PLAY.SCISSOR.logo} option={PLAY.SCISSOR.text}/>
                    <PlayOption logo={PLAY.LIZARD.logo} option={PLAY.LIZARD.text}/>
                    <PlayOption logo={PLAY.SPOCK.logo} option={PLAY.SPOCK.text}/>
                </>
            }
        </div>
    )
}

export default PageStart;