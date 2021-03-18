import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import Link from 'next/link'


export default function Home({ home }) {
  return (
    <Layout home>
        <h2>Hello</h2>
        <ul>
        <li>Hello</li>
        </ul>
    </Layout>
  )
}