import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      {
        blogTile: "Blog Card #1 ",
        blogCoverPhoto: "stock-1",
        blogDate: "May 1 , 2021",
      },
      {
        blogTile: "Blog Card #2 ",
        blogCoverPhoto: "stock-2",
        blogDate: "june 20 , 2021",
      },
      {
        blogTile: "Blog Card #3 ",
        blogCoverPhoto: "stock-3",
        blogDate: "July 30 , 2021",
      },
      {
        blogTile: "Blog Card #4 ",
        blogCoverPhoto: "stock-4",
        blogDate: "Augest 15 , 2021",
      },
    ],
    editPost: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
      console.log(state.editPost);
    },
  },
  actions: {},
  modules: {},
});
