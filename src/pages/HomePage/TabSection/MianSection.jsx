import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Helicopter from './Helicopter';
import Drone from './Drone';
import Plane from './Plane';
const TabSection = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://rc-flight-zone-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
    }, [])

    const helicopters = products.filter(pd => pd.subcategory_id === 'RC001')

    const drones = products.filter(pd => pd.subcategory_id === 'DR001')

    const planes = products.filter(pd => pd.subcategory_id === 'AP001')


    return (
        <div className='mb-12  mt-12'>

            <Tabs>
                <TabList className='text-center'>
                    <Tab  ><span className='font-bold text-stone-700'>Rc Helicopter</span></Tab>
                    <Tab ><span className='font-bold text-stone-700'>Rc Drone</span></Tab>
                    <Tab ><span className='font-bold text-stone-700'>Rc Aircraft</span></Tab>
                </TabList>

                <TabPanel>
                    <div className='grid md:grid-cols-3 px-4 gap-3 mt-20' data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="1000" >
                        {
                            helicopters.map(helicopter => <Helicopter helicopter={helicopter}></Helicopter>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 px-4 gap-3 mt-12 ' data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="1000">
                        {
                            drones.map(drone => <Drone drone={drone}></Drone>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 px-4 gap-3 mt-12' data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="1000">
                        {
                            planes.map(plane => <Plane plane={plane}></Plane>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabSection;