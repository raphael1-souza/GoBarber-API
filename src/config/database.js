module.exports = {
  dialect: 'postgres',
  host: '172.22.0.1',
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
