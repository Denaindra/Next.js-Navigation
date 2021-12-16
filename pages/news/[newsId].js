import { useRouter } from "next/router";

function Detail() {
    const router = useRouter();
    const newsId = router.query.newsId
    
    // newsId is the page name... get the page name and send to backend and collect data and send back to server
    return(<h1>Detail Page</h1>);
}
export default Detail;