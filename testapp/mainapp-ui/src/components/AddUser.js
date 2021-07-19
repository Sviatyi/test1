import React, {useState} from "react";
import {Button, Form} from "semantic-ui-react";
import TextField from '@material-ui/core/TextField';

import moment from "moment";


export const AddUser = () =>{
    const [username, setUsername] = useState()
    const [group, setGroup] = useState()
    return(
        <div className={"container"} style={{"margin-top": "0"}}>
            <Form>
                <table className={"adding"}>

                        <td style={{"width": "40px"}}><label>id</label></td>
                        <td style={{"width": "200px"}}>
                            <Form.Field className="form-element">
                                <TextField
                                    placeholder="Required"
                                    required
                                    value={username}
                                    onChange={e=>setUsername(e.target.value)}/>
                            </Form.Field>
                        </td>
                        <td style={{"width": "200px"}}> </td>
                        <td style={{"width": "100px"}}> </td>
                        <td style={{"width": "200px"}}>
                            <Form.Field className="form-element">
                                <TextField
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
                            const res = await fetch('http://localhost:8000/user/', {
                                method: 'POST',
                                headers: {
                                "Content-Type": "application/json"
                            },
                                body: JSON.stringify({
                                "username": username,
                                "group": group,
                                "is_admin": false,
                                "created": moment().format("YYYY-MM-DD").toString()
                            })
                            });
                            console.log(moment().format("YYYY-MM-DD hh:mm:ss"))
                            if (res.status !== 201) {
                                alert("BAD DATA!!!");
                            }
                            else {
                                window.location.assign('http://localhost:3000/users')
                            }
                        }
                        }>Add user</Button>
                    </div>
                </Form.Field>
            </Form>

        </div>

    )
}