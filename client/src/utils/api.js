import axios from 'axios';

export default {

    //Email me with contact form information calls apiroutes.js in routes folder
    nodeMailerSendInfo: function(emailContent) {
        return axios.post('/sendEmail/', emailContent);
    }

}
