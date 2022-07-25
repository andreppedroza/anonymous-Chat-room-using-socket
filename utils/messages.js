const moment = require('moment');

function formatMessage(username,text) {
    return {
      username,
      text,
      time: moment().utcOffset("-03:00").format("hh:mm"),
    };
}

module.exports = formatMessage;
