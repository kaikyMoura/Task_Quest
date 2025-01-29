import { useLoadingContext } from "@/contexts/LoadingContextProvider"
import Cookies from "js-cookie"
const Home = () => {
    const { setLoading } = useLoadingContext()
    return (<>
        <div className="flex absolute ml-44 gap-6">
            <button onClick={() => Cookies.remove('Token')}>Sair</button>
            <button onClick={() => setLoading(true)}>carregar</button>
        </div>
    </>)
}

export default Home