export default function taskReducer(state, action) {
  switch (action.type) {
    case "create":
      return {
        ...state.tasks.push({
          id: 3,
          taskName: "taskNameRef.current.value",
          dueDate: "dueDateRef.current.value",
          category: "categoryRef.current.value",
          isAPriority: false,
          isActive: true,
          details: "",
        }),
      };
    case "update":
      return { ...state, isActive: false };
    case "delete":
      return { ...state };
    default:
      throw new Error();
  }
}
