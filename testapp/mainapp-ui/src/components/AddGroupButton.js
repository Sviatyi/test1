import React from "react";
import {Button} from "semantic-ui-react";

export const AddGroupButton = () =>{
    return(
        <div className={"container"}>
            <div className={"add-user-button-div"}>
                <Button className={"add-user-button"}   onClick={function (){
                    window.location.assign('http://localhost:3000/groups-add')
                }}>Add group</Button>
            </div>
        </div>
    )
}