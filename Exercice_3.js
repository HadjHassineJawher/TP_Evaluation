const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee"
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald"
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger"
    }
  ];
  

  const bookTitles = books.map(book => {
    return book.title + " by " + book.author;
  });
  
  console.log(bookTitles); 