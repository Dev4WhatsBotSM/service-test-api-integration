import pkg from 'pg';
const { Pool } = pkg;
const pools = new Map();
const dbConfig = global.gConfig.database_config_pg;
const namePool = 'api-service-order'

/**
 * @param {string} namePool
 * @param  [dbConfig]
 * @return {Promise.<mssql.ConnectionPool>}
 */
export const getClient = () => {
  if (!pools.has(namePool)) {
    if (!dbConfig) {
      throw new Error('Pool does not exist');
    }
    const pool = new Pool(dbConfig);
    // automatically remove the pool from the cache if `pool.release()` is called
    const release = pool.release.bind(pool);
    pool.release = (...args) => {
      pools.delete(namePool);
      return release(...args);
    }
    pools.set(namePool, pool.connect());
  }
  return pools.get(namePool);
}
/**
 * releases all the pools and removes them from the store
 *
 * @return {Promise<mssql.ConnectionPool[]>}
 */
export const releaseAll = () => Promise.all(Array.from(pools.values()).map((connect) => {
  return connect.then((pool) => pool.release());
}))
