import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import TabSection from './TabSection/MianSection';
import SectionOne from './ExtraSections/SectionOne';
import SectionTwo from './ExtraSections/SectionTwo';
import useTitle from '../../hooks/useTitle';
import ExtraThree from './ExtraSections/Extrathree';
import ExtraFour from './ExtraSections/ExtraFour';
import ExtraSecFive from './ExtraSections/ExtraSecFive';



const MainHome = () => {

    useTitle('home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <TabSection></TabSection>
            <ExtraThree></ExtraThree>
            <ExtraSecFive></ExtraSecFive>

            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <ExtraFour></ExtraFour>

        </div>
    );
};

export default MainHome;