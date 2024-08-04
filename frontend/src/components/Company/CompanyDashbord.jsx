import React,{useState, useEffect} from 'react';
import { AiOutlineStock, AiOutlineUser } from 'react-icons/ai';
import { BsCartFill, BsTruck } from 'react-icons/bs'; // Assuming you're using BsTruck for Delivery icon
import HomeCard from './HomeCard';
import BarChart from './BarChart';
import Order from './Order';
import PieChart from './PieChart.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export const CompanyDashboard = () => {
  const [counts, setCounts] = useState({
    products: 0,
    customers: 0,
    orders: 0,
    delivery: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/backend/api/Company/counts.php');
        setCounts(response.data);
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div>
      <div className='container mt-5'>
        <div className='row gy-4'>
          <div className='col-12 col-md-6 col-lg-3'>
            <HomeCard title="Products" icon={AiOutlineStock} count={counts.products} />
          </div>
          <div className='col-12 col-md-6 col-lg-3'>
            <HomeCard title="Customers" icon={AiOutlineUser} count={counts.customers} />
          </div>
          <div className='col-12 col-md-6 col-lg-3'>
            <HomeCard title="Orders" icon={BsCartFill} count={counts.orders} />
          </div>
          <div className='col-12 col-md-6 col-lg-3'>
            <HomeCard title="Delivery" icon={BsTruck} count={counts.delivery} />
          </div>
        </div>
      </div>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <BarChart />
          </div>
          <div className='col-12 col-lg-6'>
            <PieChart />
          </div>
        </div>
      </div>
      <div className='container mt-4'>
        <div className='row justify-content-center'>
          <div className='w-full'>
            <Order />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
