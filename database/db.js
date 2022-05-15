const { Deta } = require('deta');

const deta = Deta(process.env.DETA_PROJECT_KEY);

class Repository {
	constructor(tableName) {
		this.db = deta.Base(tableName);
	}

	async store(data, update = false) {
		if (update && data.key) {
			return await this.db.put(data);
		}
		return await this.db.put(data);
	}

	async get(filter) {
		return this.db.fetch({ ...filter });
	}

	async delete(key) {
		return await this.db.delete(key);
	}
}

module.exports = Repository;
