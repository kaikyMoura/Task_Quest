import { LoadingProvider } from "@/contexts/LoadingProvider";
import Cookies from "js-cookie";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Tooltip } from "react-tooltip";
import '../styles/globals.scss';
import { useEffect } from "react";

type CustomAppProps = AppProps & {
    Component: {
        auth?: boolean;
    };
};

const App = ({ Component, pageProps }: CustomAppProps) => {
    const router = useRouter()
    const token = Cookies.get('Token')

    useEffect(() => {
        if (Component.auth && !token) {
            if (router.pathname === '/registration' || router.pathname === '/login') {
                router.replace(router.pathname)
            }
            else {
                router.replace('/login')
            }
        }
        if (!Component.auth && token && router.pathname === '/login') {
            router.push('/dashboard');
        }
    }, [Component.auth, token, router])

    return (
        <>
            <LoadingProvider>
                <Component {...pageProps} />
                <Tooltip id="my-tooltip" place="right-start" />
            </LoadingProvider>
        </>
    )
}

export default App;