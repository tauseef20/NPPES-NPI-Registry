export default {
  SEARCH_DATA(state , payload){
    state.searchData = payload;
    // console.log("This is Payload Results" , payload.results)
    debugger
  },
  DETAILS_DATA(state , payload){
    state.DetailData = payload;
    // console.log("This is Payload Results" , payload.results)
    debugger
  }
};
