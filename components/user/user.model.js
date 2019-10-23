const { esclient } = require('../database');

const login = async (userData) => {
  const { login, password } = userData;
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
    const response = await esclient.get({
      id: 'info',
      index: login,
    }).then(res=>console.log(res), e=>console.log(e));

    console.log(response);

    return response;
  } catch (e) {
    return new Error(e.message);
  }
};

module.exports = {
  login,
};
