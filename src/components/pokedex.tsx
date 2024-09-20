import c from "classnames";/** PARA QUE SIRVE??? */
import { useTheme } from "contexts/use-theme";
import { usePokemon, usePokemonList, useTextTransition, usePokemonTypes, usePokemonWeak } from "hooks";
import { useState } from "react";
import { randomMode } from "utils/random";
import { Button } from "./button";
import { LedDisplay } from "./led-display";
import { Poketypes } from "./poketypes";

import "./pokedex.css";


export function Pokedex() {
  const { theme } = useTheme();
  const { ready, resetTransition } = useTextTransition();/** define tiempo entre pokemones y transiciones */
  const { pokemonList } = usePokemonList();/** hook que realiza el fetch del listado de pokemon */
  const [i, setI] = useState(0);
  const { pokemon: selectedPokemon } = usePokemon(pokemonList[i]); /**hook info pokemos pos i */
  const { pokemon: nextPokemon } = usePokemon(pokemonList[i + 1]); /**hook info pokemos pos i+1 */
  
  /**Se define el tipo y debilidades del pokemon */
  const pokTypes = selectedPokemon?.types.map(p => p.type.name);
  const pokWeak = usePokemonWeak(pokTypes).pokemonWeak

  /** caracteristicas de iconos para los tipos*/
  const   typeData  = usePokemonTypes(pokTypes).iconData;
  const   weakData  = usePokemonTypes(pokWeak).iconData;

  /** Estado asociado al equipo Pokemon */
  const[teamPok, setTeamPok] = useState([undefined, undefined, undefined, undefined, undefined, undefined]);

 
  const prev = () => {
    resetTransition();
    if (i === 0) {
      setI(pokemonList.length - 1);
    }
    setI((i) => i - 1);
  };

  const next = () => {
    resetTransition();
    if (i === pokemonList.length - 1) {
      setI(0);
    }
    setI((i) => i + 1);
  };

  const handleTeamPokemon = () => {
    const freePlace = teamPok.indexOf(undefined);
    if(freePlace !== -1){
      const teamPokAux : any = [...teamPok];
      const teamvalue= selectedPokemon?.sprites.front_default;
      teamPokAux[freePlace] = teamvalue;
      setTeamPok(teamPokAux);
    }else{
      alert("No hay espacio en tu equipo Pokemon da click sobre el pokemon que quieres retirar")
    };
  };

  const removeTeam = (ubication:number) => {
    const teamPokAux : any = [...teamPok];
    teamPokAux[ubication] = undefined;
    setTeamPok(teamPokAux);
  }

  return (
    <div className={c("pokedex", `pokedex-${theme}`)}>
      <div className="panel team-panel">
        <img src={teamPok[0]} className="team-img" onClick={()=>removeTeam(0)} />
        <img src={teamPok[1]} className="team-img" onClick={()=>removeTeam(1)}/>
        <img src={teamPok[2]} className="team-img" onClick={()=>removeTeam(2)}/>
        <img src={teamPok[3]} className="team-img" onClick={()=>removeTeam(3)}/>
        <img src={teamPok[4]} className="team-img" onClick={()=>removeTeam(4)}/>
        <img src={teamPok[5]} className="team-img" onClick={()=>removeTeam(5)}/> 

      </div>
      <div className="panel left-panel">
        <div className="screen main-screen">
          {selectedPokemon && (
            <img
              className={c(
                "sprite",
                "obfuscated",
                ready && "ready",
                ready && `ready--${randomMode()}`
              )}
              src={selectedPokemon.sprites.front_default}
              alt={selectedPokemon.name}
              onClick={handleTeamPokemon}
            />
          )}
        </div>
        <div className="screen name-display">
          <div
            className={c(
              "name",
              "obfuscated",
              ready && "ready",
              ready && `ready--${randomMode()}`
            )}
          >
            {selectedPokemon?.name}
          </div>
        </div>
        <div className="screen-pokemon-types">
          <div className="screen-name-t screen">type</div>
          <div className="screen-pokemon-icons">
            {Poketypes(typeData)}
          </div>
        </div>
        <div className="screen-pokemon-types">
          <div className="screen-name-t screen">weak</div>
          <div className="screen-pokemon-icons">
            {Poketypes(weakData)}
          </div>
        </div>
      </div>
      <div className="panel right-panel">
        <div className="controls leds">
          <LedDisplay color="blue" />
          <LedDisplay color="red" />
          <LedDisplay color="yellow" />
        </div>
        <div className="screen second-screen">
          {nextPokemon && (
            <img
              className={c(
                "sprite",
                "obfuscated",
                ready && "ready",
                ready && `ready--${randomMode()}`
              )}
              src={nextPokemon.sprites.front_default}
              alt={nextPokemon.name}
            />
          )}
        </div>
        <div className="controls">
          <Button label="prev" onClick={prev} />
          <Button label="next" onClick={next} />
        </div>
      </div>
      <div className="panel leftd-panel">

      </div>
    </div>
  );
}
