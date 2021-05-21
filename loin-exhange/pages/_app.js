import React from 'react';
import App from 'next/app';
import BaseLayout from '../components/layout/BaseLayout';

import '../styles/common.css';
import '../styles/reset.css';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    let nowPage = ctx.asPath

    return { pageProps, nowPage };
  }

  render() {
    const { Component, pageProps, nowPage } = this.props;
    return (
        <BaseLayout nowPage={nowPage}>
          <Component {...pageProps} />
        </BaseLayout>
    );
  }
}

export default MyApp;
