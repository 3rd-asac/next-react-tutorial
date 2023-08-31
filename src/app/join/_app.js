
import ModalsProvider from './component/modal/modalProvider';
function MyApp({ Component, pageProps }) {
  return (
    <ModalsProvider>
      <Component {...pageProps} />
    </ModalsProvider>
  );
}

export default MyApp;
