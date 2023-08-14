import React from 'react';
import { services } from '../../data';
const Services = () => {
    const { service, sections } = services
    return (
            <div className='pt-20 flex h-full w-full items-center bg-white p-5'>
                <div className='flex'>
                    {service.map((service, index) => {
                        const { title, svg } = service;
                        return (
                            <div key={index}>
                                <p>{title}</p>
                                <img src={svg} alt="svg" />
                            </div>
                        );
                    })}
                </div>
                <div>
                    {sections.map((sections, index) => {
                        const { title, text } = sections;
                        return (
                            <div key={index}>
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