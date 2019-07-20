import axios from "axios";

export default {
  // Gets books from the Google API
  getBooks: function(q, key) {   
    return axios.get("https://www.googleapis.com/books/v1/volumes", { params: { q:q, key:"AIzaSyBFDz-bVdCuzt6BxmTgVJz8-jIJ9d-2ei4"}});
  },
  // https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
  //https://www.googleapis.com/books/v1/volumes?q=Jared&key=AIzaSyBFDz-bVdCuzt6BxmTgVJz8-jIJ9d-2ei4
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
