import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"

const GithubUserCard = {
  props: ['username'],
  data(){
    return {
      userObj: {},
    }
  },
  created(){
    const url = `https://api.github.com/users/${this.username}`
    console.log(url)
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
      this.userObj = json
    })
  },
  template: `
  <div class="ui card">
    <div class="image">
      <img :src="userObj.avatar_url">
    </div>
    <div class="content">
      <a class="header" :href = "userObj.html_url" target = "blank">{{userObj.name}}</a>
      <div class="meta">
        <span class="date">Joined in {{userObj.created_at}}</span>
      </div>
      <div class="description">
        {{userObj.bio}}
      </div>
    </div>
    <div class="extra content">
      <a :href = "userObj.followers_url" target = "blank">
        <i class="user icon"></i>
        {{userObj.followers}} Friends
      </a>
    </div>
  </div> 
  `,
}

const App = createApp({
  components: {
    GithubUserCard: GithubUserCard
  },
  data(){
    return {
      me: '',
    }
  },
}).mount('#app')