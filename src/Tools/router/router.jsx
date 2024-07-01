import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../Layouts/MainLayout';
import Error from '../../components/error/Error';
import HomePageLayout from '../../Layouts/HomePageLayout';
import ServicesLayout from '../../Layouts/ServicesLayout';
import ServicePanel from '../../components/services/servicesPage/ServicePanel';
import TextAnalysisLayout from '../../Layouts/TextAnalysisLayout';
import TextAnalysis from '../../components/services/textAnalysis/TextAnalysis';
import Sentiment from '../../components/services/sentimentPage/Sentiment';
import Bots from '../../components/services/botsPage/Bots';

export const router = [

    {
        name: "Anasayfa",
        link: "/",
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        breadcrumb: "Anasayfa",
        children: [
            {
                index: true,
                element: <HomePageLayout />,
            },
            {
                name: "Hizmetler",
                link: "/services",
                path: "/services",
                element: <ServicesLayout />,
                breadcrumb: "Hizmetler",
                children: [
                    {
                        index: true,
                        element: <ServicePanel />
                    },
                    {
                        name: "Text Analizi",
                        link: "/services/text-analysis",
                        path: "text-analysis",
                        element: <TextAnalysisLayout />,
                        breadcrumb: "Text Analysis",
                        children: [
                            {
                                index: true,
                                element: <TextAnalysis />
                            },
                            {
                                name: "Sentiment Analiz",
                                link: "/services/text-analysis/sentiment",
                                path: "sentiment",
                                element: <Sentiment />,
                                breadcrumb: "Sentiment",
                            }
                        ]
                    },
                    {
                        name: "Bot Analizi",
                        link: "/services/bots",
                        path: "bots",
                        element: <Bots />,
                        breadcrumb: "Bots",
                    }
                ]
            }
        ]
    }

]

export default createBrowserRouter(router);