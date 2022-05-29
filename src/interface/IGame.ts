import ICompany from "./ICompany";
import ICover from "./ICover";
import IGameMode from "./IGameMode";
import IGenre from "./IGenre";
import IPlatform from "./IPlatForm";
import IReleaseDate from "./IReleaseDate";
import ITheme from "./ITheme";


export default interface IGame{
    cover: ICover|null,
    follows:number|null,
    game_modes: IGameMode[]|null,

    genres:IGenre[]|null,
    id:number|null,
    involved_companies:ICompany[]|null,
    name:string|null,
    platforms:IPlatform[]|null,
    rating:number|null,
    rating_count:number|null,
    release_dates:IReleaseDate[]|null,
    summary:string|null,
    themes:ITheme[]|null

}