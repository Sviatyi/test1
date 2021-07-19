import React, {useEffect, useState} from "react";
import {Button, Form} from "semantic-ui-react";
import TextField from '@material-ui/core/TextField';

import axios from "axios";


export const EditUser = () =>{
    const currentUrl = window.location.href;
    const [username, setUsername] = useState()
    const [group, setGroup] = useState()
    const id = currentUrl.split("id=")[1]
    const [user, setUser] = useState([])
    useEffect(()=>{
        axios({
            method: "GET",
            url: "http://localhost:8000/user/"+id+'/'
        }).then(response =>{
            setUser(response.data)
        })
    },[])
    return(
        <div className={"container"} style={{"margin-top": "0"}}>
            <Form>
                <table className={"adding"}>
                    <td style={{"width": "40px"}}><label>{id}</label></td>
                    <td style={{"width": "200px"}}>
                        <Form.Field className="form-element">
                            <TextField
                                placeholder={user.username}
                                value={username}
                                onChange={e=>setUsername(e.target.value)}/>
                        </Form.Field>
                    </td>
                    <td style={{"width": "200px"}}> </td>
                    <td style={{"width": "100px"}}> </td>
                    <td style={{"width": "200px"}}>
                        <Form.Field className="form-element">
                            <TextField
                                placeholder={user.group ? user.group.name : ""}
                                value={group}
                                onChange={e=>setGroup(e.target.value)}/>
                        </Form.Field>
                    </td>
                    <td style={{"width": "200px"}}><Button className={"add-user-button"} onClick={function (){
                        window.location.assign('http://localhost:3000/users')
                    }}>Cancel</Button></td>

                </table>
                <hr className={"adding"}/>
                <Form.Field>
                    <div className={"add-user-button-div"}>
                        <Button className={"add-user-button"} onClick={ async () => {
                            const res = await fetch('http://localhost:8000/user/'+id+'/', {
                                method: 'PUT',
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    "username": username ? username : user.username,
                                    "group": group,
                                    "created": user.created.toString()
                                })
                            });
                            console.log(user.created)
                            if (res.status !== 200) {
                                alert("BAD DATA!!!");
                            }
                            else {
                                window.location.assign('http://localhost:3000/users')
                            }
                        }
                        }>Edit user</Button>
                    </div>
                </Form.Field>
            </Form>

        </div>

    )
}