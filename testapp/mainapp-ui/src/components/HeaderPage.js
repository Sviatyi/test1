import React, {useEffect} from "react";


function IsActive(){
    useEffect( () => {
        let pathname = window.location.pathname;
        if (pathname.slice(pathname.length - 4,) === "-add"){
            document.getElementById(pathname.slice(1,pathname.length - 4)).style["border"] = "3px solid  #666666";
            document.getElementById(pathname.slice(1,pathname.length - 4)).style["border-bottom"] = "0";
            document.getElementById(pathname.slice(1,pathname.length - 4)).style["border-radius"] = "5px 5px 0 0";
        }
        else if (pathname.slice(pathname.length - 5,) === "-edit"){
            document.getElementById(pathname.slice(1,pathname.length - 5)).style["border"] = "3px solid  #666666";
            document.getElementById(pathname.slice(1,pathname.length - 5)).style["border-bottom"] = "0";
            document.getElementById(pathname.slice(1,pathname.length - 5)).style["border-radius"] = "5px 5px 0 0";
        }
        else {
            document.getElementById(pathname.slice(1,)).style["border"] = "3px solid  #666666";
            document.getElementById(pathname.slice(1,)).style["border-bottom"] = "0";
            document.getElementById(pathname.slice(1,)).style["border-radius"] = "5px 5px 0 0";
        }
    }, [])
}

export const HeaderPage = () =>{
    IsActive()
    return (
        <>
            <header className={"head"}>
                <div className={"head-class"}>
                    <div className={"free-space-left"}/>
                    <li id={"users"} className={"header-list"} onClick={ function (){
                        window.location.assign('http://localhost:8000/users')
                        }
                    }>Users</li>
                    <li id={"groups"} className={"header-list"} onClick={ function (){
                        window.location.assign('http://localhost:8000/groups')
                        }
                    }>Groups</li>
                    <div className={"free-space-right"}/>
                </div>
            </header>
        </>
    )
}