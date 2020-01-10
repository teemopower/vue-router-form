export default {
  computed: {
    filteredBlogs() {
      return this.blogs.filter(blog => {
        console.log(this.search, blog.title);
        return blog.title.match(this.search);
      });
    }
  }
};
