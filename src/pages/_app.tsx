import { AppProps } from "next/app";
import Login from "./login";
import '../styles/globals.scss'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Login />
        </>
    )
}

export default App;