export const IGDBQuery = {
  query_game_short: `fields cover.url,follows,game_modes.name,genres.name,involved_companies.company.name,name,platforms.name,rating,rating_count,release_dates.date,status,summary,themes.name;`,
  query_game_info: `fields storyline,screenshots.url,videos.*,websites.url,websites.category,cover.url,follows,franchises,game_modes.name,genres.name,involved_companies.company.name,name,platforms.name,rating,rating_count,release_dates.date,status,summary,themes.name,similar_games.name,similar_games.cover.url,similar_games.rating,similar_games.rating_count,similar_games.platforms.name,similar_games.genres.name,similar_games.themes.name;`,
};