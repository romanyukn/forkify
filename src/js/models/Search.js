import axios from 'axios';
import { key, proxi } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`${proxi}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`); //axios returns json, so no need to convert
            this.result = res.data.recipes;
        } catch (error) {
            alert(error);
        }
    }
}




