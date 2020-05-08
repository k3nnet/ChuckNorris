import express from 'express';
import server from './graphql/schema'


const app = express();

server.applyMiddleware({ app });

// Express: Port
const PORT = 4000 || process.env;


// Express: Listener
app.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});



// Exports
export default app;