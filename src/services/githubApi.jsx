import axios from 'axios';
import { FACEBOOK_USER } from '../utils';
import FACEBOOK_USER_REPOS from '../utils/facebook_repos';

async function fetchUserRepos(username) {
    const url = `https://api.github.com/users/${username}/repos`;
    
    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            return response.data;

        } else if (response.status === 403) {
            return FACEBOOK_USER_REPOS;
        } else {
            throw new Error(`Request failed with status: ${response.status}`);
        } 
    } catch (error) {
        throw error;
    }
}

async function fetchUser(username) {
    const url = `https://api.github.com/users/${username}`;
        
    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            return response.data;
    
        } else if (response.status === 403) {
            return FACEBOOK_USER;
        } else {
            throw new Error(`Request failed with status: ${response.status}`);
        } 
    } catch (error) {
        throw error;
    }
}

export {fetchUserRepos, fetchUser};
