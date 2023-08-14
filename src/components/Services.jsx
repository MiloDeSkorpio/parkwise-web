import React from 'react';
import { services } from '../../data';
const Services = () => {
    const { service, sections } = services
    return (
            <div className='pt-20 flex flex-col h-full w-full items-center bg-white p-5'>
                <div className='flex flex-col'>
                    {service.map((service, index) => {
                        const { title, svg } = service;
                        return (
                            <div key={index}>
                                <p>{title}</p>
                                <div  className='max-w-[50px] max-h-[70px] p-2'>
                                    <img src={svg} alt="svg" />
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className='mt-5'>
                    {sections.map((sections, index) => {
                        const { title, text } = sections;
                        return (
                            <div key={index} className='mt-1'>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        
    )
};

export default Services