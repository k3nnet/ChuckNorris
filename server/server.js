import express from 'express';
import server from './graphql/schema'
import cors from 'cors'

const app = express();

server.applyMiddleware({ app });

// Express: Port
const PORT = 4000 || process.env;

app.use(cors())
// Express: Listener
app.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});



// Exports
export default app;