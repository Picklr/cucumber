//action type
const CHANGE_BOOL = 'CHANGE_BOOL'

//action creator

export const boolChange = () => ({type: CHANGE_BOOL})

const initialState =  false;

export default function (state = initialState, action) {
  switch (action.type) {

    case CHANGE_BOOL:
      return !state


    default:
      return state
  }
}
