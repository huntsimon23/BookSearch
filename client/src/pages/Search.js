import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Form from "../components/Form";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import BookResult from "../components/BookResult"

class Search extends Component {
    state = {
        books: [],
        q: "",
        message: "Search for a book!"
      };

    handleInputChange = event => {
      event.preventDefault();  
      const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
    getBooks = () => {
        API.getBooks(this.state.q)
          .then(res => {
            const searchedBooks = res.data.items.filter(book => {
             return (book.id &&
             book.volumeInfo.title &&
             book.volumeInfo.subtitle &&
             book.volumeInfo.infoLink &&
             book.volumeInfo.authors &&
             book.volumeInfo.description &&
             book.volumeInfo.imageLinks.thumbnail)
            });
            this.setState({
              books: searchedBooks
            });
            console.log(this.state.books)}
            )
          .catch(() =>
            this.setState({
              books: [],
              message: "No New Books Found"
            })
          );
      };
    
    handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks();
      };

    handleBookSave = id => {
       const saveBook = this.state.books.find(book => (book.id === id))
        console.log(saveBook);

        API.saveBook({
          googleId: saveBook.id,
          title: saveBook.volumeInfo.title,
          subtitle: saveBook.volumeInfo.subtitle,
          link: saveBook.volumeInfo.infoLink,
          authors: saveBook.volumeInfo.authors,
          description: saveBook.volumeInfo.description,
          image: saveBook.volumeInfo.imageLinks.thumbnail
        }).then(() => this.getBooks());
      };
    
    render() {
    return (
        <Container>
        <Row>
            <Col size="md-12">
            <Jumbotron />
            </Col>
            <Col size="md-12">
            <div className="card" title="Book Search" icon="far fa-book">
                <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
                />
            </div>
            </Col>
        </Row>
        <Row>
            <Col size="md-12">
            <div className="card" title="Results">
                {this.state.books.length ? (
                <List>
                    {this.state.books.map(book => (
                    <BookResult
                        key={book.id}
                        title={book.volumeInfo.title}
                        subtitle={book.volumeInfo.subtitle}
                        link={book.volumeInfo.infoLink}
                        authors={book.volumeInfo.authors.join(", ")}
                        description={book.volumeInfo.description}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        Button={() => (
                        <button
                            onClick={() => this.handleBookSave(book.id)}
                            className="btn btn-primary ml-2"
                        >
                            Save
                        </button>
                        )}
                    />
                    ))}
                </List>
                ) : (
                <h2 className="text-center">{this.state.message}</h2>
                )}
            </div>
            </Col>
        </Row>
        </Container>
    );
    }
}

export default Search;