import { useContext } from "react";
import { DataContext } from "../context/DataContext";

import PageStart from "./PageStart";
import PagePick from "./PagePick";


const GeneratePage = () => {
    const { userPlay } = useContext(DataContext);

    return userPlay? <PagePick /> : <PageStart />;
}

export default GeneratePage;