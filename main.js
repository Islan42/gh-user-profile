import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"

const GithubUserCard = {
  props: ['username'],
  data(){
    return {
      userObj: null,
    }
  },
  created(){
    const url = `https://api.github.com/users/${this.username}`
    console.log(url)
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
      this.userObj = json
      console.log('Antes:', this.userObj)
    })
  },
  mounted(){
    console.log('Depois:',this.userObj)
  },
  template: `
  <div class="ui card">
        <div class="image">
          <img :src="userObj.avatar_url">
        </div>
        <div class="content">
          <a class="header">{{userObj.login}}</a>
          <div class="meta">
            <span class="date">Joined in {{userObj.created_at}}</span>
          </div>
          <div class="description">
            {{userObj.bio}}
          </div>
        </div>
        <div class="extra content">
          <a>
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