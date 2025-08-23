import React, {useContext} from 'react';
import { UserContext } from './CompA';
import CompD from "./CompD";

function CompC() {

    const user = useContext(UserContext);    

    return (
        <div className="box">
            <h1>Component C</h1>
            <h2>{`Hello ${user}`}</h2>
            <CompD />
        </div>
    )
}

export default CompC;