import React, {useState} from "react";
import {Button, Form, TextArea} from "semantic-ui-react";
import TextField from "@material-ui/core/TextField";


export const AddGroup = () =>{
    const [name, setName] = useState()
    const [description, setDescription] = useState()
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
                                value={name}
                                onChange={e=>setName(e.target.value)}/>
                        </Form.Field>
                    </td>
                    <td style={{"width": "500px"}}>
                        <Form.Field className="form-element">
                            <TextArea
                                required
                                rows={2}
                                style={{"width": "480px"}}
                                value={description}
                                maxLength="255"
                                onChange={e=>setDescription(e.target.value)}/>
                        </Form.Field>
                    </td>
                    <td style={{"width": "200px"}}><Button className={"add-user-button"} onClick={function (){
                        window.location.assign('http://localhost:8000/groups')
                    }}>Cancel</Button></td>

                </table>
                <hr className={"adding"}/>
                <Form.Field>
                    <div className={"add-user-button-div"}>
                        <Button className={"add-user-button"} onClick={ async () => {
                            const res = await fetch('http://localhost:8000/group/', {
                                method: 'POST',
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    "name": name,
                                    "description": description
                                })
                            });
                            if (res.status !== 201) {
                                alert("BAD DATA!!!");
                            }
                            else {
                                window.location.assign('http://localhost:8000/groups')
                            }
                        }
                        }>Add group</Button>
                    </div>
                </Form.Field>
            </Form>

        </div>

    )
}