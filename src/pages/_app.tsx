import DashBoard from "@/components/Dashboard";
import { LoadingProvider } from "@/contexts/LoadingProvider";
import { Tooltip } from "react-tooltip";
import '../styles/globals.scss';
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {

    return (
        <>
            <LoadingProvider>
                <DashBoard>
                    <Component {...pageProps} />
                </DashBoard>
                <Tooltip id="my-tooltip" place="right-start" />
            </LoadingProvider>
        </>
    )
}

export default App;