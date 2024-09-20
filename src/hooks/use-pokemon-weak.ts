export function usePokemonWeak (pokTypes: string[] | undefined){
    var pokemonWeak : string[]  = []; 
    pokTypes?.map((items) =>{
        var pokemonWeaknes :string[] = []
        if (items==="bug"){
            pokemonWeaknes = ["fire","flying","rock"];
        } else if (items === "dark"){
            pokemonWeaknes = ["fighting","bug","fairy"];
        } else if (items === "dragon"){
            pokemonWeaknes = ["dragon","fairy"];
        } else if (items === "electric"){
            pokemonWeaknes = ["ground"];
        } else if (items ==="fire"){
            pokemonWeaknes = ["water","ground","rock"];
        } else if (items === "fairy"){
            pokemonWeaknes = ["poison", "steel"];
        } else if (items ==="fighting"){
            pokemonWeaknes = ["psychic","fairy", "fliying"];
        } else if (items === "flying"){
            pokemonWeaknes = ["electric","ice","rock"];
        } else if (items ==="ghost"){
            pokemonWeaknes = ["ghost","dark"];
        } else if (items ==="grass"){
            pokemonWeaknes = ["fire","flying", "bug", "poison", "ice"];
        } else if (items ==="ground"){
            pokemonWeaknes = ["water","grass","ice"];
        } else if (items ==="ice"){
            pokemonWeaknes = ["fire","fighting","rock","steel"];
        } else if (items === "normal"){
            pokemonWeaknes = ["fighting"];
        } else if (items === "poison"){
            pokemonWeaknes = ["ground","psychic"];
        }else if (items === "psychic"){
            pokemonWeaknes = ["bug","ghost","dark"];
        }else if (items === "rock"){
            pokemonWeaknes = ["water","grass","fighting","ground", "steel"];
        }else if (items === "steel"){
            pokemonWeaknes = ["fire","fighting","ground"];
        }else if (items === "water"){
            pokemonWeaknes = ["grass","electric"];
        };
        pokemonWeaknes.forEach((item) =>{
            if (!pokemonWeak.includes(item)){
                pokemonWeak.push(item);
            }
        });
    });
    return{pokemonWeak};

}