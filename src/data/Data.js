import {BrazilFlag, GlobeFlag, IndiaFlag, UsaFlag} from "../templates/Dashboard/internals/components/CustomIcons";
import * as React from "react";

export const articleInfo = [
    {
        tag: 'Engineering',
        title: 'The future of AI in software engineering',
        description:
            'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
        authors: [
            { name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg' },
            { name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' },
        ],
    },
    {
        tag: 'Product',
        title: 'Driving growth with user-centric product design',
        description:
            'Our user-centric product design approach is driving significant growth. Learn about the strategies we employ to create products that resonate with users.',
        authors: [{ name: 'Erica Johns', avatar: '/static/images/avatar/6.jpg' }],
    },
    {
        tag: 'Design',
        title: 'Embracing minimalism in modern design',
        description:
            'Minimalism is a key trend in modern design. Discover how our design team incorporates minimalist principles to create clean and impactful user experiences.',
        authors: [{ name: 'Kate Morrison', avatar: '/static/images/avatar/7.jpg' }],
    },
    {
        tag: 'Company',
        title: 'Cultivating a culture of innovation',
        description:
            'Innovation is at the heart of our company culture. Learn about the initiatives we have in place to foster creativity and drive groundbreaking solutions.',
        authors: [{ name: 'Cindy Baker', avatar: '/static/images/avatar/3.jpg' }],
    },
    {
        tag: 'Engineering',
        title: 'Advancing cybersecurity with next-gen solutions',
        description:
            'Our next-generation cybersecurity solutions are setting new standards in the industry. Discover how we protect our clients from evolving cyber threats.',
        authors: [
            { name: 'Agnes Walker', avatar: '/static/images/avatar/4.jpg' },
            { name: 'Trevor Henderson', avatar: '/static/images/avatar/5.jpg' },
        ],
    },
    {
        tag: 'Product',
        title: 'Enhancing customer experience through innovation',
        description:
            'Our innovative approaches are enhancing customer experience. Learn about the new features and improvements that are delighting our users.',
        authors: [{ name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' }],
    },
    {
        tag: 'Engineering',
        title: 'Pioneering sustainable engineering solutions',
        description:
            "Learn about our commitment to sustainability and the innovative engineering solutions we're implementing to create a greener future. Discover the impact of our eco-friendly initiatives.",
        authors: [
            { name: 'Agnes Walker', avatar: '/static/images/avatar/4.jpg' },
            { name: 'Trevor Henderson', avatar: '/static/images/avatar/5.jpg' },
        ],
    },
    {
        tag: 'Product',
        title: 'Maximizing efficiency with our latest product updates',
        description:
            'Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.',
        authors: [{ name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' }],
    },
    {
        tag: 'Design',
        title: 'Designing for the future: trends and insights',
        description:
            'Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise on creating intuitive and visually stunning user experiences.',
        authors: [{ name: 'Kate Morrison', avatar: '/static/images/avatar/7.jpg' }],
    },
    {
        tag: 'Company',
        title: "Our company's journey: milestones and achievements",
        description:
            "Take a look at our company's journey and the milestones we've achieved along the way. From humble beginnings to industry leader, discover our story of growth and success.",
        authors: [{ name: 'Cindy Baker', avatar: '/static/images/avatar/3.jpg' }],
    },
];


export const data = [
    { label: 'India', value: 50000 },
    { label: 'USA', value: 35000 },
    { label: 'Brazil', value: 10000 },
    { label: 'Other', value: 5000 },
];


export const countries = [
    {
        name: 'India',
        value: 50,
        flag: <IndiaFlag />,
        color: 'hsl(220, 25%, 65%)',
    },
    {
        name: 'USA',
        value: 35,
        flag: <UsaFlag />,
        color: 'hsl(220, 25%, 45%)',
    },
    {
        name: 'Brazil',
        value: 10,
        flag: <BrazilFlag />,
        color: 'hsl(220, 25%, 30%)',
    },
    {
        name: 'Other',
        value: 5,
        flag: <GlobeFlag />,
        color: 'hsl(220, 25%, 20%)',
    },
];

export const ITEMS = [
    {
        id: '1',
        label: 'Website',
        children: [
            { id: '1.1', label: 'Home', color: 'green' },
            { id: '1.2', label: 'Pricing', color: 'green' },
            { id: '1.3', label: 'About us', color: 'green' },
            {
                id: '1.4',
                label: 'Blog',
                children: [
                    { id: '1.1.1', label: 'Announcements', color: 'blue' },
                    { id: '1.1.2', label: 'April lookahead', color: 'blue' },
                    { id: '1.1.3', label: "What's new", color: 'blue' },
                    { id: '1.1.4', label: 'Meet the team', color: 'blue' },
                ],
            },
        ],
    },
    {
        id: '2',
        label: 'Store',
        children: [
            { id: '2.1', label: 'All products', color: 'green' },
            {
                id: '2.2',
                label: 'Categories',
                children: [
                    { id: '2.2.1', label: 'Gadgets', color: 'blue' },
                    { id: '2.2.2', label: 'Phones', color: 'blue' },
                    { id: '2.2.3', label: 'Wearables', color: 'blue' },
                ],
            },
            { id: '2.3', label: 'Bestsellers', color: 'green' },
            { id: '2.4', label: 'Sales', color: 'green' },
        ],
    },
    { id: '4', label: 'Contact', color: 'blue' },
    { id: '5', label: 'Help', color: 'blue' },
];
