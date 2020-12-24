import React from 'react'
import App from 'next/app'
import { Layout } from '../components/_App'

class MyApp extends App {
  static async getServerSideProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getServerSideProps) {
      pageProps = await Component.getServerSideProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp
