import axios from "axios";
import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { CirclesWithBar } from 'react-loader-spinner'

const Phones = () => {
   const [phones, setPhones] = useState([])
   const [loader, setLoader] = useState(true)

   useEffect(() => {
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
        console.log(data.data.data);
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map(phone => {
            const obj = {
                name: phone.phone_name,
                price: parseInt(phone.slug.split('-')[1])
            }
            return obj;
        })
        console.log(phonesWithFakeData);
        setPhones(phonesWithFakeData)
        setLoader(false)
    })

   }, [])
   
    return (
        <div>
            {loader && (<CirclesWithBar
                    height="100"
                    width="100"
                    color="#4fa94d"
                    outerCircleColor="#4fa94d"
                    innerCircleColor="#4fa94d"
                    barColor="#4fa94d"
                    ariaLabel="circles-with-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />)}
             <BarChart width={1000}
                height={400}
                margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
          }} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </BarChart>
            <h2 className="text5xl">phone :{phones.length}</h2>
        </div>
    );
};

export default Phones;