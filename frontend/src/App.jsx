import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Customer/Header'
// import { Sidebar } from './components/Customer/Sidebar'
import CustomerProfile from './components/Customer/CustomerProfile';
import { CartDetails } from './components/Customer/CartDetails';
import ProuductList from './components/Customer/ProuductList';
import ProductDetail from './components/Customer/ProductDetail';
import { useState } from 'react';
import "./components/Company/CompanyApp.css";
import "./components/Company/CompanyProduct.css";
// import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'; // Ensure Router is imported
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/Company/CompanyApp.css";
import "./components/Company/CompanyProduct.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure Router is imported
import CompanyHeader from './components/Company/CompanyHeader';
import CompanySidebar from './components/Company/CompanySidebar';
import AddProduct from './components/Company/AddProduct';
import UpdateProduct from './components/Company/UpdateProduct';
import ViewProducts from './components/Company/ViewProducts';
// import { CompanyDashboard } from './components/Company/CompanyDashboard';
import Customer from './components/Company/Customer';
import Order from './components/Company/Order';
import { CompanyDashboard } from './components/Company/CompanyDashbord';
import Review from './components/Company/review/Review';
import ReviewLayout from './components/Company/review/ReviewLayout';
import Dash from './components/Admin/Dash';
import { Sidebar } from './components/Admin/Sidebar'
import AdminOrder from './components/Admin/Order';
import Customerdetails from './components/Admin/Customerdetails';
import Customerregister from './components/Admin/Customerregister';
import Contactus from './components/Admin/Contactus';
import Aboutus from './components/Admin/Aboutus';
import Companyregister from './components/Admin/Companyregister';
import { Home } from './components/Home/Home';

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false)


  return (

    <div className=''>

      <Router>
        <Header className='' />
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/products" element={<ProuductList sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle} />} />
          <Route path="/cart" element={<CartDetails />} />
          <Route path="/profile" element={<CustomerProfile />} />
          <Route path="/productDetail" element={<ProductDetail sidebarToggle={sidebarToggle} />} />
          <Route exact path="/add-product" element={<AddProduct />} />
          <Route exact path="/display-product" element={<ViewProducts />} />
          <Route exact path="/update/:product_id" element={<UpdateProduct />} />
          {/* <Route exact path="/dashboard" element={<CompanyDashboard/>}/> */}
          <Route exact path="/customer" element={<Customer />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/review" element={<Review />} />
          <Route exact path="/reviewlayout/:product_id" element={<ReviewLayout />} />

          <Route path='/dash' element={<Dash />} />
          <Route path='/Customerdetails' element={<Customerdetails />} />
          <Route path='/Order' element={<AdminOrder />} />
        </Routes>

      </Router>
      {/* <Sidebar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle} /> */}
      {/* <CompanyHeader />
        <CompanySidebar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} /> */}

      {/* <Route path="/" element={<ProuductList sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle} />} /> */}



      {/* <main className={`content ${sidebarToggle ? 'sidebar-open' : 'sidebar-closed'}`}> */}
      {/* <Routes> */}
      {/* <Route exact path="/" element={<CompanyDashboard />} />  */}
      {/* // <div className=''> */}
    //  {/* <Header/>
    //  <Sidebar 
    //  sidebarToggle={sidebarToggle}
    //  setSidebarToggle={setSidebarToggle}/>
    //  <Dashboard/> */}
      {/* // </div> */}


      {/* <CompanyHeader />
    <CompanySidebar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
    <main className={`content ${sidebarToggle ? 'sidebar-open' : 'sidebar-closed'}`}> */}
      {/* <Routes> */}
      {/* <Route exact path="/" element={<CompanyDashboard />} />  */}

      {/* </Routes> */}
      {/* </main> */}
    </div>

    /*<Companyregister/>*/
    //  <BrowserRouter>
    //       <Header/>
    //       <Sidebar 
    //       sidebarToggle={sidebarToggle}
    //       setSidebarToggle={setSidebarToggle}/>
    //       <Routes>
    //       {/*<Route path='/Contactus' element={<Contactus/>} />
    //       <Route path='/Aboutus' element={<Aboutus/>} />*/}
    //       <Route path='/' element={<Dash/>} />
    //       <Route path='/Customerdetails' element={<Customerdetails/>} />
    //       <Route path='/Order' element={<Order/>}  />

    //       </Routes>
    //     </BrowserRouter>


    // </Routes>
    // </main>
    // </div>


    // </Router>
  )
}

export default App
