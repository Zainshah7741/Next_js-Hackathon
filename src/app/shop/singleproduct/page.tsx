import React from 'react'
import Single from '@/components/Shop/SingleProduct';
import Bread from '@/components/Shop/Bread';
import Description from '@/components/Shop/Description';
import Project from '@/components/Shop/OurProduct';

const page = () => {
    return (
        <div>
            <Bread></Bread>
            <Single></Single>
            <Description></Description>
            <Project></Project>

        </div>
    )
}

export default page