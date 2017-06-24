import { PAGE_SCROLLING  } from './types';



export function pageScrolling(scrollPosition, pageHeight) {

  var jObj = { 'scrollPosition' : scrollPosition , 'pageHeight' : pageHeight }

  return { type: PAGE_SCROLLING, payload: jObj};
}

