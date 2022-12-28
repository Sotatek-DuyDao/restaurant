export const createRoleValidation = {
  type: "object",
  required: ["name"],
  properties: {
    name: { type: "string", minLength: 4 },
  },
};
