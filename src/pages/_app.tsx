import { AppProps } from "next/app";
import Login from "./login";
import '../styles/globals.scss'
import { LoadingProvider } from "@/contexts/LoadingProvider";
import { Tooltip } from "react-tooltip";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <LoadingProvider>
                <Login />
                <Tooltip id="my-tooltip" place="right-start" />
            </LoadingProvider>
        </>
    )
}

export default App;