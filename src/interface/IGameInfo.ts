import ICompany from "./ICompany";
import ICover from "./ICover";
import IGame from "./IGame";
import IGameMode from "./IGameMode";
import IGenre from "./IGenre";
import IPlatform from "./IPlatForm";
import IReleaseDate from "./IReleaseDate";
import IScreenShot from "./IScreenShot";
import ITheme from "./ITheme";
import IVideo from "./IVideo";
import IWebsite from "./IWebsite";

export default interface IGameInfo extends IGame {
  screenshots: IScreenShot[] | null;
  similar_games: IGame[] | null;
  videos: IVideo[] | null;
  storyline:string|null;
  websites:IWebsite[]|null
}
