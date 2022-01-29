import NavBar2 from '../components/NavBar2'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar2></NavBar2>
      <Component {...pageProps}></Component>
      <style jsx global>
        {`
          body {
            background: #b8b8fd;
          }
        `}
      </style>
    </div>
  )
}
