import {createBrowserRouter} from 'react-router-dom'
import MainWebsite from '../layout/MainWebsite';
import Home from '../pages/Home';
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainWebsite />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])
export default router;