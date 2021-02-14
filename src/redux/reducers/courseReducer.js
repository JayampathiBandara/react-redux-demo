export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      console.log("CREATE_COURSE -> state", state);
      // DON'T DO THIS, IT Mutate state
      //return state.push(action.course);
      return [...state, { ...action.course }];

    default:
      return state; // NOT throw exception
  }
}
