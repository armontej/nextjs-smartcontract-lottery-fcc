// imports work with front end
// require does not
// nodes != javascript /
// backenedJs is a little different from frontJs
// sticking index.js into the component of the _app.js file

import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
//import ManualHeader from "../components/ManualHeader"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Our Smart Contract Lottery " />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/*ManualHeader /> */}
            <Header />
            <LotteryEntrance />
        </div>
    )
}
