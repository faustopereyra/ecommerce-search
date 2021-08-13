const translateCondition = (condition: string) => {
  if (condition === "new") return "Nuevo";
  if (condition === "used") return "Usado";
  return condition;
};

export default translateCondition;
