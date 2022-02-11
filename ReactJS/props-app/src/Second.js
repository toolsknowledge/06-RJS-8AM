import React from "react";

function Second(props){
    return(
        <React.Fragment>
            <h2>{props.str}</h2>
            <h2>{props.num}</h2>
            <h2>{JSON.stringify(props.flag)}</h2>
            <table border="1"
                   align="center"
                   cellPadding={10}
                   cellSpacing={10}>
                <tr>
                    <th>P_ID</th>
                    <th>P_NAME</th>
                    <th>P_COST</th>
                </tr>
                {props.arr.map((element,index)=>(
                    <tr key={index}>
                        <td>{element.p_id}</td>
                        <td>{element.p_name}</td>
                        <td>{element.p_cost}</td>
                    </tr>
                ))}
            </table>
            <h2>{props.children}</h2>
        </React.Fragment>
    )
}

export default Second;