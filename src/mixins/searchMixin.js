export default {
  computed: {
    filteredBlogs() {
      return this.blogs.filter(blog => {
        return blog.name.match(this.search);
      });
    }
  }
};
