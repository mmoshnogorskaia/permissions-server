const { esclient } = require('../database');

const login = async (login) => {
  try {
    const query = {
      query: {
        bool: {
          filter: {
            match: {
              type: 'info',
            },
          },
        },
      },
    };
    const response = esclient.search({
      index: login,
      from: 0,
      size: 1,
      body: query,
    }).then(res=>console.log(res), err=>console.log(err));

    return response;
  } catch (e) {
    return new Error(e.message);
  }
};

module.exports = {
  login,
};
