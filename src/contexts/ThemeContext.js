import React,{createContext,Component} from 'react';//Extending createContext library to create a context
export const ThemeContext=createContext();//Creating a context named ThemeContext

class ThemeContextProvider extends Component {
    state = {                                       //Creating state which will be exported to be imported in another component(This is a named export)
        isLightTheme:true,
        light:{syntax:"#555",ui:"#ddd",bg:"#eee"},
        dark:{syntax:"#ddd",ui:"#333",bg:"#555"}
    }
    toggleTheme=()=>{
        this.setState({isLightTheme:!this.state.isLightTheme})
    }
    render() { 
        return (
            <ThemeContext.Provider value={{...this.state,toggleTheme:this.toggleTheme}}>
                {this.props.children}{/*Whatever is enclosed in b/w the contextProvider component will use this state*/}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;//exporting the provider