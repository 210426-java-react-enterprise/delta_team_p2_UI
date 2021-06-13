import React from 'react';
import { useState } from "react";
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import useToggle from '../hooks/UseToggle';


interface IDarkModeProps {
    darkMode: boolean,
    setDarkMode: (darkMode: boolean) => void
}

function DarkModeComponent(props: IDarkModeProps) {

    let toggleDarkMode = (e: any) => {
        if(props.darkMode) {
            props.setDarkMode(false);
        } else {
            props.setDarkMode(true);
        }


        console.log('currentTarget', e.currentTarget.checked);
        console.log('darkMode: ', props.darkMode);
    }





    return (
        <div style={{ padding: '0px 5px 0px 5px' }}>
            <ButtonGroup toggle className="mr-sm-2">
                <ToggleButton
                    type="checkbox"
                    variant="secondary"
                    checked={props.darkMode}
                    value="1"
                    onChange={(e) => toggleDarkMode(e)}
                >
                    {props.darkMode ? 'Dark' : 'Light'}
                </ToggleButton>
            </ButtonGroup>
        </div>
    )

}
export default DarkModeComponent;