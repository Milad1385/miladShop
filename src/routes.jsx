import Protection from "./components/protection/Protection";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import Product from "./pages/Products/Product";
import SingleProduct from "./pages/singleProduct/SingleProduct";

let routes = [
    {path : '/' , element : <Home/>},
    {path :'/allProducts' , element :<Product/>},
    {path :'/about' , element :<About/>},
    {path :'/contactUs' , element :<ContactUs/>},
    {path : '/*' , element : <Protection/> , children : [
        {path :'Blog' , element :<Blog/>},
    ]},
    {path : '/product/:id', element : <SingleProduct/>}
]

export default routes;