<template>
  <div class="posts-list">
  <ul>
    <li><a v-link="{ path: '/posts/123'}">1</a></li>
    <li>{{ postsinfo[1].title }}</li>
    <li>3</li>
    <li>4</li>
  </ul>
  <div calss='pages'>
    1234
  </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      postsinfo: {}
    }
  },

  created () {
    this.update()
  },

  methods: {
    update () {
      console.log(this)
      this.$http.get('http://localhost:8080/static/postslist.json').then(reponse => {
        return reponse.json()
      }).then(data => {
        this.$set('postsinfo', data)
      })
      .catch((reponse) => {
        console.log(reponse)
      })
    }
  }
}
</script>