import { IGDBQuery } from "../constants/query";

export function generateQueryRandomGames() {
  const { query_game_short } = IGDBQuery;
  var random = randomInRange(0, 25500);
  var query =
    query_game_short + "limit 12;" + `offset ${random};where rating >= 50;`;
  return query;
}

export function generateQueryGamesInfo(id: number) {
  const { query_game_info } = IGDBQuery;
  var query = query_game_info + `where id=` + `${id.toString()};`;
  return query;
}

export function generateQuerySearchGames(
  keyword: string | null,
  offset: number,
  filterGenres: number[],
  filterPlatforms: number[],
  filterGameModes: number[],
  filterRating: number,
  filterDate: string,
  filterThemes: number[]
) {
  const { query_game_short } = IGDBQuery;
  var query = query_game_short + "limit 12;" + `offset ${offset * 12};`;
  //search for keyword
  query += `where id!=0 &category =0`;
  if (keyword) {
    query += `& name~ *"${keyword}"*`;
  }
  if (filterGenres.length > 0) {
    query += ` & genres= (`;
    filterGenres.forEach((g) => {
      query += g;
      query += ",";
    });
    query = query.slice(0, query.length - 1);
    query += ")";
  }

  if (filterPlatforms.length > 0) {
    query += ` & platforms= (`;
    filterPlatforms.forEach((g) => {
      query += g;
      query += ",";
    });
    query = query.slice(0, query.length - 1);
    query += ")";
  }
  if (filterGameModes.length > 0) {
    query += ` & game_modes= (`;
    filterGameModes.forEach((g) => {
      query += g;
      query += ",";
    });
    query = query.slice(0, query.length - 1);
    query += ")";
  }
  if (filterThemes.length > 0) {
    query += ` & themes= (`;
    filterThemes.forEach((g) => {
      query += g;
      query += ",";
    });
    query = query.slice(0, query.length - 1);
    query += ")";
  }
  if (filterRating != 0) {
    query += `& rating>=${filterRating}`;
  }
  if (filterDate != NaN.toString() && filterDate.length > 0) {
    query += `& first_release_date>${filterDate}`;
  }
  query += ";";

  return query;
}
export function randomInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
