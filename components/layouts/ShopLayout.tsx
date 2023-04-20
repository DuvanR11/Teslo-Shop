import Head from "next/head"
import { FC } from 'react'
import { Navbar, SideMenu } from "../ui";

interface Props {
    title: string;
    pageDesciption: string;
    imageFullUrl: string
    children: any;

}

export const ShopLayout: FC<Props> = ({ children, title, pageDesciption, imageFullUrl }) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name='description' content={ pageDesciption }/>
            <meta name='og:title' content={ title }/>
            <meta name='og:description' content={ pageDesciption }/>
            {
                imageFullUrl && (
                    <meta name='og:image' content={ imageFullUrl }/>
                )
            }
        </Head>

        <nav>
            <Navbar/>
        </nav>

        <SideMenu/>

        <main style={{
            margin: '80px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
        }}>
            { children }
        </main>

        <footer>

        </footer>
    </>
  )
}
