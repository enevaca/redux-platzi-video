import api from '../api.json';
import { normalize, schema } from 'normalizr';

//const media = new schema.Entity(key, definición de mi esquema, opciones)
const media = new schema.Entity('media', {}, {
	idAttribute: 'id',
	proccessStrategy: (value, parent, key) => ({...value, category: parent.id})
})

const category = new schema.Entity('categories', {
	playlist: new schema.Array(media)
})

const categories = { categories: new schema.Array(category) }

const normalizedDate = normalize(api, categories)

export default normalizedDate;
