import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import TabSection from './TabSection/MianSection';
import SectionOne from './ExtraSections/SectionOne';
import SectionTwo from './ExtraSections/SectionTwo';
import useTitle from '../../hooks/useTitle';



const MainHome = () => {

    useTitle('home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <TabSection></TabSection>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>

        </div>
    );
};

export default MainHome;