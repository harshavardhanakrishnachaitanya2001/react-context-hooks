import React, {Component} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
    static contextType=ThemeContext//using the imported ThemeContext component
    render() { 
        console.log(this.context)
        const {isLightTheme,light,dark}=this.context;//using array destructuring to store each key of the state variable created into each of its own variables
        const theme=isLightTheme?light:dark//Checking weather isLightTheme is true or false.
        /*Note: The name of the single variable and the state variable name must be same*/
        return ( 
            <nav  style={{background:theme.ui,color:theme.syntax}}>{/*Appling the theme styles to the navbar*/}
                <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
         );
    }
}
 
export default Navbar;
