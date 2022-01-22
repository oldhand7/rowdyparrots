import Head from '../common/head'
import Fx from '../partials/fx'
import Navbar from '../partials/navbar'
import Faq from '../sections/faq'
import Footer from '../sections/footer'
import Intro from '../sections/intro'
import Parrots from '../sections/parrots'
import Rarity from '../sections/rarity'
import Roadmap from '../sections/roadmap'

export default function Home() {
  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          background: black;
        }
        body {
          margin: 0px;
          padding: 0px;
          overflow-x: hidden;
        }
        #blocker {
          background: #000;
          position: fixed;
          width: 100vw;
          height: 100vh;
          z-index: 9999999;
          display: none;
        }
        @media only screen and (max-device-height:480px) {
          #blocker {
            display: inline;
          }
        }
      `}</style>
      <Head />
      <body>
      <div id="blocker"></div>
      <Navbar />

      <Intro />
      <Parrots />
      <Rarity />
      <Roadmap />
      <Faq />
      <Footer />
      <Fx />
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script>
        AOS.init();
      </script>
      </body>
    </>
  )
}
