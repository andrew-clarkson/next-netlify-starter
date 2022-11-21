import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
    
        <div>
          <script
            src="https://atc-w-gabesfix.unii.rs/embed2.js"
            data-widget-type="universe-calendar"
            data-target-type="time-slots"
            data-target-id="637b9ee837beef002f31ad2f"
            data-filter="true"
            data-state="buttonColor=#3A66E5&buttonText=Get Tickets" >
          </script>
        </div>
      </main>

      <Footer />
    </div>
  )
}
