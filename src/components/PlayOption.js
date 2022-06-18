import { DataContext } from "../context/DataContext";
import { useContext } from "react";


const PlayOption = ({logo, option}) => {
    const { onUserPlaySelected } = useContext(DataContext);

    return (
        <div className={option}>
            <button onClick={() => onUserPlaySelected(option)}>
                <img src={logo} alt={option}/>
            </button>
        </div>
    )
}

export default PlayOption;