<template>
  <div class="template-container">
    <div v-theme:color="'dark'">Form one</div>
    <div v-directiveTest="'purple'">Directives test</div>
    <div>{{ filterExample | slice }}</div>
    <div v-if="!submitted">
      <form class="form-one" @submit.prevent="handleSubmit">
        <label>Name</label>
        <input type="text" v-model="blog.name">
        <br>
        <label>Description</label>
        <textarea v-model="blog.description"></textarea>
        <br>
        <label>Ninja</label>
        <input type="checkbox" value="ninja" v-model="blog.categories">
        <br>
        <label>Samurai</label>
        <input type="checkbox" value="samurai" v-model="blog.categories">
        <br>
        <label>Warrior</label>
        <input type="checkbox" value="warrior" v-model="blog.categories">
        <br>
        <br>
        <label>Select</label>
        <br>
        <select v-model="blog.city">
          <option disabled>Select One</option>
          <option v-for="(city,index) in selectCities" :key="index">{{ city }}</option>
        </select>
        <br>
        <br>
        <button type="submit">Submit</button>
      </form>
    </div>
    <br>
    <div v-if="submitted">
      <h1>Submitted</h1>
    </div>
    <br>
    <h1>search</h1>
    <input type="text" v-model="search" placeholder="search">
    <div v-for="blog in filteredBlogs" :key="blog.id" style="border: thin solid">
      <router-link :to="'/blog/' + blog.id">
        <p>{{ blog.name | toUppercase }}</p>
        <p>{{ blog.description }}</p>
        <p>{{ blog.city }}</p>
        <ul v-for="cat in blog.categories" :key="cat.id">
          <li>{{ cat }}</li>
        </ul>
      </router-link>
      <p>{{ blog.body }}</p>
    </div>
    <div style="min-height: 300px"></div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";
export default {
  data() {
    return {
      selectCities: ["Seattle", "Los Angeles", "San Francisco"],
      blog: {
        name: "",
        description: "",
        categories: [],
        city: ""
      },
      submitted: false,
      info: null,
      filterExample: "filter example to uppercase",
      blogs: [],
      search: ""
    };
  },
  mixins: [searchMixin],
  props: {},
  methods: {
    handleSubmit() {
      const { name, description, categories, city } = this.blog;
      // this.$http
      //   .post("https://jsonplaceholder.typicode.com/posts", {
      //     title: this.blog.name,
      //     body: this.blog.description,
      //     userId: 1
      //   })
      //   .then(result => {
      //     console.log(result);
      //     this.submitted = true;
      //   });

      // this.axios
      //   .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      //   .then(response => (this.info = response))
      //   .catch(error => console.log(error));

      this.axios
        .post("https://vue-tutorial-8256a.firebaseio.com/posts.json", this.blog)
        .then(response => {
          console.log(response);
          // this.info = response;
          // this.blogs = [
          //   {
          //     id: "1",
          //     title: "new hope",
          //     body: "luke and obi wan"
          //   },
          //   {
          //     id: "2",
          //     title: "force awakens",
          //     body: "kylo and rey"
          //   },
          //   {
          //     id: "3",
          //     title: "return of the jedi",
          //     body: "ewoks"
          //   },
          //   {
          //     id: "4",
          //     title: "toy story",
          //     body: "buzz"
          //   }
          // ];
        })
        .catch(error => console.log(error));
    }
  },
  computed: {
    // filteredBlogs() {
    //   return this.blogs.filter(blog => {
    //     console.log(this.search, blog.title);
    //     return blog.title.match(this.search);
    //   });
    // }
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  directives: {
    directiveTest: {
      bind(el, binding, vnode) {
        if (binding.value === "purple") {
          el.style.color = "purple";
        }
        if (binding.value === "pink") {
          el.style.color = "pink";
        }
      }
    }
  },
  beforeCreate() {},
  created() {
    this.axios
      .get("https://vue-tutorial-8256a.firebaseio.com/posts.json")
      .then(result => {
        var blogsArray = [];
        for (let key in result.data) {
          result.data[key].id = key;
          blogsArray.push(result.data[key]);
        }

        this.blogs = blogsArray;
      })
      .catch(error => {
        console.log(error);
      });
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-one {
  height: 300px;
  width: 400px;
  border: thin solid black;
}
</style>
