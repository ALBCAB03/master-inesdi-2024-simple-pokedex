import "./poketypes.css"
import Fbug from "../icons/bug.svg"
import Fdark from "../icons/dark.svg"
import Fdragon from "../icons/dragon.svg"
import Felectric from "../icons/electric.svg"
import Ffairy from "../icons/fairy.svg"
import Ffighting from "../icons/fighting.svg"
import Ffire from "../icons/fire.svg"
import Fflying from "../icons/flying.svg"
import Fghost from "../icons/ghost.svg"
import Fgrass from "../icons/grass.svg"
import Fground from "../icons/ground.svg"
import Fice from "../icons/ice.svg"
import Fnormal from "../icons/normal.svg"
import Fpoison from "../icons/poison.svg"
import Fpsychic from "../icons/psychic.svg"
import Frock from "../icons/rock.svg"
import Fsteel from "../icons/steel.svg"
import Fwater from "../icons/water.svg"


export function Poketypes (iconData:{name:string, color:string}[]) {
    const allIcons =[
        {name: 'bug', staticColor:'none'},
        {name: 'dark', staticColor:'none'},
        {name: 'dragon', staticColor:'none'},
        {name: 'electric', staticColor:'none'},
        {name: 'fire', staticColor:'none'},
        {name: 'fairy', staticColor:'none'},
        {name: 'fighting', staticColor:'none'},
        {name: 'flying', staticColor:'none'},
        {name: 'ghost', staticColor:'none'},
        {name: 'grass', staticColor:'none'},
        {name: 'ground', staticColor:'none'},
        {name: 'ice', staticColor:'none'},
        {name: 'normal', staticColor:'none'},
        {name: 'poison', staticColor:'none'},
        {name: 'psychic', staticColor:'none'},
        {name: 'rock', staticColor:'none'},
        {name: 'steel', staticColor:'none'},
        {name: 'water', staticColor:'none'}
    
    ];
    
    const getIcon = (name:string) => {
        switch(name){
            case 'bug':
                return (
                    <div  
                    className="icon">
                   <img src={Fbug} alt="Bug" />
                   </div>
                );
            case 'dark':
                return (
                    <div  className="icon">
                       <img src={Fdark} alt="dark" />
                    </div>
                );
            case 'dragon':
                return (
                    <div  className="icon">
                        <img src={Fdragon} alt="dragon" />
                   </div>
                );
            case 'electric':
                return (
                    <div  className="icon">
                     <img src={Felectric} alt="electric" />
                    </div>
                );
            case 'fire':
                return (
                    <div  className="icon">
                        <img src={Ffire} alt="fire" />
                    </div>
                );
            case 'fairy':
                return (
                    <div  className="icon">
                         <img src={Ffairy} alt="fairy" />
                    </div>
                );
            case 'fighting':
                return (
                    <div  className="icon">
                        <img src={Ffighting} alt="fighting" />
                    </div>
                );
            case 'flying':
                return (
                    <div  className="icon">
                        <img src={Fflying} alt="flying" />
                    </div>
                );
            case 'ghost':
                return (
                    <div  className="icon">
                        <img src={Fghost} alt="ghost" />
                    </div>
                );
            case 'grass':
                return (
                <div  className="icon">
                    <img src={Fgrass} alt="grass" />
                </div>
            );
            case 'ground':
                return (
                    <div  className="icon">
                        <img src={Fground} alt="ground" />
                    </div>
                );
            case 'ice':
                return (
                    <div  className="icon">
                        <img src={Fice} alt="ice" />
                        </div>
                );
            case 'normal':
                return (
                    <div  className="icon">
                        <img src={Fnormal} alt="normal" />
                    </div>
                );
            case 'poison':
                return (
                    <div  className="icon">
                        <img src={Fpoison} alt="poison" />
                    </div>
                );
            case 'psychic':
                return (
                    <div  className="icon">
                        <img src={Fpsychic} alt="psychic" />
                    </div>
                );
            case 'rock':
                return (
                    <div  className="icon">
                        <img src={Frock} alt="rock" />
                    </div>
                );
            case 'steel':
                return (
                    <div  className="icon">
                        <img src={Fsteel} alt="steel" />
                    </div>
                );
            case 'water':
                return (
                    <div  className="icon">
                        <img src={Fwater} alt="water" />
                    </div>
                );
            default:
                return null;
        }
    };

   return(
        <div className="wrapper">
            {allIcons.map((icon,index) => {
                const changingColor = iconData.find(item => item.name === icon.name);
                const iconColor = changingColor ? changingColor.color : icon.staticColor;
                return(
                    <div key={index} className="icon" style={{background:iconColor}}>
                        {getIcon(icon.name)}
                    </div>
                );
            })}
        </div>
    );
}