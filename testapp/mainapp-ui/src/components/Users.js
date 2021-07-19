import React, {useEffect, useState} from "react";
import {Button} from "semantic-ui-react";
import axios from "axios";
import moment from "moment";
export const Users = () =>{
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axios({
            method: "GET",
            url: "http://localhost:8000/user/"
        }).then(response =>{
            setUsers(response.data)
        })
    },[])

    return(
        <>
            <div className={"container"}>
                <table>
                    <tr>
                        <th style={{"width": "40px"}}>Id</th>
                        <th style={{"width": "200px"}}>Username</th>
                        <th style={{"width": "200px"}}>Created</th>
                        <th style={{"width": "100px"}}>Is admin</th>
                        <th style={{"width": "200px"}}>Group</th>
                        <th style={{"width": "200px"}}>Action</th>
                    </tr>
                </table>
                <hr/>
                {users.map(u => (
                    <>
                        <table>
                            <td style={{"width": "40px"}} key={u.id}>{u.id}</td>
                            <td style={{"width": "200px"}} key={u.id}>{u.username}</td>
                            <td style={{"width": "200px"}} key={u.id}>{u.created}</td>
                            <td style={{"width": "100px"}} key={u.id}>{
                                u.is_admin ? <input type="checkbox" disabled="disabled" checked="checked"/> :
                                <input type="checkbox" disabled="disabled"/>
                            }
                            </td>
                            <td style={{"width": "200px"}} key={u.id}>{u.group !== null ? u.group.name : ""}</td>
                            <td style={{"width": "200px"}} key={u.id}>
                                <Button style={{"margin-right": "15px"}} className={"add-user-button"} onClick={ function () {
                                    window.location.assign('http://localhost:3000/users-edit?id='+u.id)
                                }}>Edit</Button>
                                <Button className={"add-user-button"} onClick={async () => {
                                    const res = await fetch('http://localhost:8000/user/'+u.id+'/', {
                                        method: 'DELETE',
                                    });
                                    if (res.status !== 204){
                                        alert("SOMETHING WENT WRONG!!!")
                                    }
                                    else {
                                        window.location.assign('http://localhost:3000/users')
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