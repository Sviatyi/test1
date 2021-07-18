import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button} from "semantic-ui-react";

export const Groups = () =>{
    const [groups, setGroup] = useState([])
    useEffect(()=>{
        axios({
            method: "GET",
            url: "http://localhost:8000/group/"
        }).then(response =>{
            setGroup(response.data)
        })
    },[])

    return(
        <>
            <div className={"container"}>
                <table>
                    <tr>
                        <th style={{"width": "40px"}}>Id</th>
                        <th style={{"width": "200px"}}>Name</th>
                        <th style={{"width": "500px"}}>Description</th>
                        <th style={{"width": "200px"}}>Action</th>
                    </tr>
                </table>
                <hr/>
                {groups.map(u => (
                    <>
                        <table>
                            <td style={{"width": "40px"}} key={u.id}>{u.id}</td>
                            <td style={{"width": "200px"}} key={u.id}>{u.name}</td>
                            <td style={{"width": "500px"}} key={u.id}>{u.description}</td>
                            <td style={{"width": "200px"}} key={u.id}>
                                <Button style={{"margin-right": "15px"}} className={"add-user-button"} onClick={ function () {
                                    window.location.assign('http://localhost:8000/groups-edit?id='+u.id)
                                }}>Edit</Button>
                                <Button className={"add-user-button"} onClick={async () => {
                                    const res = await fetch('http://localhost:8000/group/'+u.id+'/', {
                                        method: 'DELETE',
                                    });
                                    if (res.status !== 204){
                                        alert("You can not delete group with users")
                                    }
                                    else {
                                        window.location.assign('http://localhost:8000/groups')
                                    }
                                }}>Delete</Button>
                            </td>
                        </table>
                        <hr/>
                    </>
                ))}

            </div>
        </>
    )
}