import { createRelayDocument, RelayDocument } from 'relay-nextjs/document';
import NextDocument, {
  Html,
  Head,
  DocumentContext,
  Main,
  NextScript,
} from 'next/document';

interface DocumentProps {
  relayDocument: RelayDocument;
}

class MyDocument extends NextDocument<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const relayDocument = createRelayDocument();

    const renderPage = ctx.renderPage;
    ctx.renderPage = () =>
      renderPage({
        enhanceApp: (App) => relayDocument.enhance(App),
      });

    const initialProps = await NextDocument.getInitialProps(ctx);

    return {
      ...initialProps,
      relayDocument,
    };
  }

  render() {
    const { relayDocument } = this.props;

    // TODO: description, faviconの設定
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="description"
          />
          <relayDocument.Script />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
