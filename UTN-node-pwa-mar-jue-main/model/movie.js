import { db } from "../dbConnection.js";
export class MovieModel {
  //get all movies in database
  static async getAll() {
    const [movies, _info] = await db.query(
      `select 
      m.title, 
      group_concat(g.name separator ', ') genre,
      m.year, 
      m.director, 
      m.poster, 
      BIN_TO_UUID(m.id) AS id
      from movies m
      join movie_genres mg on mg.movie_id = m.id
      join genres g on mg.genre_id = g.id
      
      group by m.id`
    );
    return movies.length ? movies : null;
  }

  //get all  movies of a particular genre
  static async searchByGenre(genre) {
    const [movies, _info] = await db.query(
      `select 
      m.title, 
      group_concat(g.name separator ', ') genre,
      m.year, 
      m.director, 
      m.poster, 
      BIN_TO_UUID(m.id) AS id
      from movies m
      join movie_genres mg on mg.movie_id = m.id
      join genres g on mg.genre_id = g.id
      where g.name = ?
      group by m.id`,
      [genre]
    );
    return movies.length ? movies : null;
  }
  //get a  movie by its id
  static async searchById(movieId) {
    const [movie, _info] = await db.query(
      `select title, year, director, bin_to_uuid(id) ID
from movies
where id = uuid_to_bin(?)
`,
      [movieId]
    );
    return movie.length ? movie : null;
  }

  //delete a movie by its id
  static async deleteById(movieId) {
    const [info] = await db.query(
      `DELETE FROM movies 
      WHERE id = uuid_to_bin(?) `,
      [movieId]
    );
    return info.affectedRows;
  }

  //create a new movie
  static async createOne(movie) {
    const { title, director, year, duration, poster, rate, genre } = movie;
    const [result, info] = await db.query(
      `
      INSERT INTO movies (title, director, year, duration, poster, rate) VALUES 
      (?,?,?,?,?,?)
      `,
      [title, director, year, duration, poster, rate]
    );
    for (const gen of genre) {
      await db.query(
        `INSERT INTO movie_genres (movie_id, genre_id)
        SELECT m.id, g.id
        FROM movies m
        JOIN genres g ON m.title = ? AND g.name IN ('${gen}')`,
        [title, info]
      );
    }
    return result ? result : null;
  }

  //partial update of an existing movie
  static async updateById(id, partialMovie) {
    let partialQuery = "";
    for (const key in partialMovie) {
      partialQuery += `${key} = '${partialMovie[key]}', `;
    }

    partialQuery = partialQuery.slice(0, -2);
    const [info] = await db.query(
      `UPDATE movies m SET ${partialQuery} WHERE m.id = UUID_TO_BIN(?)`,
      [id]
    );

    return info.affectedRows;
  }
}
