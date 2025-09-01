import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useMenu = () => {

    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic();

    const { refetch, data: menu = [], isPending: loading } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu');
            return res.data
        }
    });

    return [menu, loading, refetch]

    // useEffect(() => {
    //     fetch('https://bistro-boss-server-nu-azure.vercel.app/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data)
    //             setLoading(false)
    //         })
    // }, [])


};

export default useMenu;