import { PAGE_SCROLLING } from 'actions/types';

const initialState = {
  scrollPosition : 0,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {

    case PAGE_SCROLLING:
      state = {...state, scrollPosition: action.payload.scrollPosition}
      break

   }
  return state
}




function HandlePageScrolling(scrollPosition, pageHeight){

}