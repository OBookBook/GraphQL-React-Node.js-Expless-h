import "./App.css";
import { gql, useQuery } from "@apollo/client";

const booksQuery = gql`
  query {
    test {
      title
      author
    }
  }
`;

function Books() {
  const { loading, error, data } = useQuery(booksQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {data.test.map((book: any) => (
          <li key={book.title}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>GraphQL Client</h1>
      <Books />
    </div>
  );
}

export default App;
