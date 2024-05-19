import axios from 'axios';

const getMessages = async (group) => {
    const response = await axios.get(`http://localhost:3500/chatmessages/${group}`);
    return response.data;
};

export default {
    getMessages
}; 