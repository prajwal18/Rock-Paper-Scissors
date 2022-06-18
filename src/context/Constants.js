/* Importing Images */
import rockImg from "../images/icon-rock.svg";
import paperImg from "../images/icon-paper.svg";
import scissorsImg from "../images/icon-scissors.svg";
import lizardImg from "../images/icon-lizard.svg";
import spockImg from "../images/icon-spock.svg";



export const PLAY_OPT = {
    RPS: "rps",
    RPSLZ: "rpslz"
};

export const PLAY = {
    ROCK: {
        text:"rock",
        logo: rockImg
    },
    PAPER: {
        text:"paper",
        logo: paperImg
    },
    SCISSOR: {
        text:"scissor",
        logo: scissorsImg
    },
    LIZARD: {
        text: "lizard",
        logo: lizardImg,
    },
    SPOCK: {
        text: "spock",
        logo: spockImg
    }
};

export const RESULTS = {
    WIN: "you win",
    LOSE: "you lose",
    DRAW: "draw"
};

