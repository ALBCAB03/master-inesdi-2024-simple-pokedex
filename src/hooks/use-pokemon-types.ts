interface IconData {
    name: string;
    color: string;
}

export function usePokemonTypes (pokTypes: string[] | undefined){
    var iconData = [{name:"", color:""}];
    var newIconData :IconData ={name: "", color: ""};
           
    pokTypes?.map((items) =>{

        if (items==="bug"){
            newIconData = {
                name: "bug", 
                color: "#92BC2C",
            };
            iconData= ([...iconData,newIconData]);
        } else if (items === "dark"){
                newIconData = {
                    name: "dark", 
                    color: "#595761",
                };
                iconData = ([...iconData,newIconData]);
        } else if (items === "dragon"){
                newIconData = {
                    name: "dragon", 
                    color: "#0C69C8",
                };
                iconData = ([...iconData,newIconData]);
        } else if (items === "electric"){
                newIconData = {
                    name: "electric", 
                    color: "#F2D94E",
                };
                iconData = ([...iconData,newIconData]);
        } else if (items ==="fire"){
                newIconData = {
                    name: "fire", 
                    color: "#FBA54C",
                };
                iconData = ([...iconData,newIconData]);
        } else if (items === "fairy"){
                newIconData = {
                    name: "fairy", 
                    color: "#EE90E6",
                };
                iconData = ([...iconData,newIconData]);
        } else if (items ==="fighting"){
                newIconData = {
                    name: "fighting", 
                    color: "#D3425F",
                };
                iconData = ([...iconData,newIconData]);
        } else if (items === "flying"){
                newIconData = {
                    name: "flying", 
                    color: "#A1BBEC",
                };
                iconData = ([...iconData,newIconData]);
        } else if (items ==="ghost"){
                newIconData = {
                    name: "ghost", 
                    color: "#5F6DBC",
                };
                iconData = ([...iconData,newIconData]);
        } else if (items ==="grass"){
                newIconData = {
                    name: "grass", 
                    color: "#5FBD58",
                };
                iconData = ([...iconData,newIconData]);
        } else if (items ==="ground"){
                newIconData = {
                    name: "ground", 
                    color: "#DA7C4D",
                };
                iconData = ([...iconData,newIconData]);
        } else if (items ==="ice"){
                newIconData = {
                    name: "ice", 
                    color: "#75D0C1",
                };
                iconData = ([...iconData,newIconData]);
        } else if (items === "normal"){
                newIconData = {
                    name: "normal", 
                    color: "#A0A29F",
                };
                iconData = ([...iconData,newIconData]);
        } else if (items === "poison"){
                newIconData = {
                    name: "poison", 
                    color: "#B763CF",
                };
                iconData = ([...iconData,newIconData]);
        }else if (items === "psychic"){
                newIconData = {
                    name: "psychic", 
                    color: "#FA8581",
                };
                iconData = ([...iconData,newIconData]);
        }else if (items === "rock"){
            newIconData = {
                name: "rock", 
                color: "#C9BB8A",
            };
            iconData = ([...iconData,newIconData]);
        }else if (items === "steel"){
            newIconData = {
                name: "steel", 
                color: "#5695A3",
            };
            iconData = ([...iconData,newIconData]);
        }else if (items === "water"){
            newIconData = {
                name: "water", 
                color: "#539DDF",
            };
            iconData = ([...iconData,newIconData]);
        };
        
    });
    return{iconData};
};