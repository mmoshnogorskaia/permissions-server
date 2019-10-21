const { createRouter } = require('express-object-router');

// const CHECK_ACCESS = ({
//   req,
//   res,
//   next,
//   pass,
//   props: { allowAccess },
// }) => {
//   if (allowAccess.includes(roles.EVERYONE)) {
//     pass();

//     return;
//   }

//   if (allowAccess.includes(roles.USER)) {
//     superlogin.requireAuth(req, res, next);

//     return;
//   }

//   throw FORBIDDEN();
// };


const router = createRouter({
  pathsRelateTo: __dirname,
  routesPaths: [
    '/**/*.router.js',
  ],
  middlewaresSequence: ({
    PARAMS_VALIDATION,
    QUERY_VALIDATION,
    BODY_VALIDATION,
    ROUTER_MIDDLEWARES,
  }) => [
    PARAMS_VALIDATION,
    QUERY_VALIDATION,
    BODY_VALIDATION,
    // CHECK_ACCESS,
    ROUTER_MIDDLEWARES,
  ],
});

module.exports = router;