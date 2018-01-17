module.exports = {
  search(query) {
    return item => {
      for (var i in query) {
        if (query[i] != item[i]) {
          return false;
        }
      }
      return true;
    }
  }
}
