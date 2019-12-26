module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'vizinhos-seguros',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
