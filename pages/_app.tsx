import Container from '@/Components/Common/Container';
const App = ({ Component, pageProps }) => (
  <Container>
    <Component {...pageProps} />
  </Container>
);

export default App;
