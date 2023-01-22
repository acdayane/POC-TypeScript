import pg from "pg";

export const connection = new pg.Pool ({
    connectionString: "postgres://uwppojtq:yf8FMM8LiWgWLAoRRQo8iMvlrKNVaJ9m@kashin.db.elephantsql.com/uwppojtq",
    ssl: true,
});