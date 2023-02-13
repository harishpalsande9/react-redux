import { combineReducers } from "redux";

const ADD_BIRD = "ADD_BIRD";
const INCREMENT_BIRD = "INCREMENT_BIRD";

export function addBird(bird) {
  return {
    type: "ADD_BIRD",
    bird,
  };
}

export function incrementBird(bird) {
  return {
    type: INCREMENT_BIRD,
    bird,
  };
}

const defaultBirds = [];

function birds(state = defaultBirds, action) {
  switch (action.type) {
    case ADD_BIRD:
      return [
        ...state,
        {
          name: action.bird,
          views: 1,
        },
      ];
    case INCREMENT_BIRD:
      const bird = state.find((b) => action.bird === b.name);
      const birds = state.filter((b) => action.bird !== b.name);
      return [
        ...birds,
        {
          ...bird,
          views: bird.views + 1,
        },
      ];
    default:
      return state;
  }
}

const birdApp = combineReducers({
  birds,
});

export default birdApp;
