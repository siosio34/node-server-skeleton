// import { celebrate, Joi } from "celebrate";

// const findAllTodosValidator = celebrate({
//   query: {
//     limit: Joi.number()
//       .integer()
//       .min(1)
//       .max(100)
//       .default(10),
//     offset: Joi.number()
//       .integer()
//       .min(0)
//       .default(0)
//   }
// });

// const findTodoByIdValidator = celebrate({
//   params: {
//     id: Joi.number()
//       .integer()
//       .positive()
//       .required()
//   }
// });

// const createTodoValidator = celebrate({
//   body: {
//     title: Joi.string()
//       .max(50)
//       .required(),
//     description: Joi.string().required()
//   }
// });

// const updateTodoByIdValidator = celebrate({
//   params: {
//     id: Joi.number()
//       .integer()
//       .positive()
//       .required()
//   },
//   body: {
//     title: Joi.string()
//       .max(50)
//       .required(),
//     description: Joi.string().required()
//   }
// });
// const removeTodoByIdValidator = celebrate({
//   params: {
//     id: Joi.number()
//       .integer()
//       .positive()
//       .required()
//   }
// });

// export default {
//   findAllTodosValidator,
//   findTodoByIdValidator,
//   createTodoValidator,
//   updateTodoByIdValidator,
//   removeTodoByIdValidator
// };
