import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Form, TextArea} from "semantic-ui-react";
import TextField from "@material-ui/core/TextField";

export const EditGroup = () =>{
    const currentUrl = window.location.href;
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const id = currentUrl.split("id=")[1]
    const [group, setGroup] = useState([])
    useEffect(()=>{
        axios({
            method: "GET",
            url: "http://localhost:8000/group/"+id+'/'
        }).then(response =>{
            setGroup(response.data)
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
                                placeholder={group.name}
                                value={name}
                                onChange={e=>setName(e.target.value)}/>
                        </Form.Field>
                    </td>
                    <td style={{"width": "500px"}}>
                        <Form.Field className="form-element">
                            <TextArea
                                maxLength="255"
                                rows={2}
                                style={{"width": "480px"}}
                                placeholder={group.description ? group.description : ""}
                                value={description}
                                onChange={e=>setDescription(e.target.value)}/>
                        </Form.Field>
                    </td>
                    <td style={{"width": "200px"}}><Button className={"add-user-button"} onClick={function (){
                        window.location.assign('http://localhost:3000/groups')
                    }}>Cancel</Button></td>

                </table>
                <hr className={"adding"}/>
                <Form.Field>
                    <div className={"add-user-button-div"}>
                        <Button className={"add-user-button"} onClick={ async () => {
                            const res = await fetch('http://localhost:8000/group/'+id+'/', {
                                method: 'PUT',
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    "name": name ? name : group.name,
                                    "description": description ? description : group.description
                                })
                            });
                            if (res.status !== 200) {
                                alert("BAD DATA!!!");
                            }
                            else {
                                window.location.assign('http://localhost:3000/groups')
                            }
                        }
                        }>Edit group</Button>
                    </div>
                </Form.Field>
            </Form>

        </div>
    )
}