import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


var notes = axios.get('https://www.easy-mock.com/mock/5aa1e2e4edefdc232c585994/getInfo/data')
.then((data) => {
  // return data.data.data.noteDetails;
  return data.data.data.noteDetails;
})

export const store = new Vuex.Store({
  state:{noteDetails: notes},
  getters:{
  }
})
