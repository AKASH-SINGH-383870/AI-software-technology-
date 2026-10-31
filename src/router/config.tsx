import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Contact from "../pages/contact/page";
import Services from "../pages/services/page";
import ServiceDetail from "../pages/services/ServiceDetail";
import Portfolio from "../pages/portfolio/page";
import PortfolioDetail from "../pages/portfolio/PortfolioDetail";
import Industries from "../pages/industries/page";
import CaseStudies from "../pages/case-studies/page";
import CaseStudyDetail from "../pages/case-studies/CaseStudyDetail";
import BlogDetail from "../pages/blogs/detail/page";
import Blogs from "../pages/blogs/page";
import Careers from "../pages/careers/page";
import Calculators from "../pages/calculators/page";
import Healthcare from "../pages/industries/healthcare/page";
import FinanceIndustry from "../pages/industries/finance/page";
import Manufacturing from "../pages/industries/manufacturing/page";
import Education from "../pages/industries/education/page";
import Retail from "../pages/industries/retail/page";
import Hospitality from "../pages/industries/hospitality/page";
import Construction from "../pages/industries/construction/page";
import RealEstate from "../pages/industries/realestate/page";
import AIFeatures from "../pages/ai-features/page";
import ReactVsAngular from "../pages/comparisons/react-vs-angular/page";
import FlutterVsReactNative from "../pages/comparisons/flutter-vs-react-native/page";
import CustomSoftwareVsSaaS from "../pages/comparisons/custom-software-vs-saas/page";
import KnowledgeCenter from "../pages/knowledge-center/page";
import SitemapPage from "../pages/sitemap/page";
import OurJourney from "../pages/our-journey/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/sitemap",
    element: <SitemapPage />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/:slug",
    element: <ServiceDetail />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/portfolio/:slug",
    element: <PortfolioDetail />,
  },
  {
    path: "/industries",
    element: <Industries />,
  },
  {
    path: "/case-studies",
    element: <CaseStudies />,
  },
  {
    path: "/case-studies/:slug",
    element: <CaseStudyDetail />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/blogs/:slug",
    element: <BlogDetail />,
  },
  {
    path: "/careers",
    element: <Careers />,
  },
  {
    path: "/calculators",
    element: <Calculators />,
  },
  {
    path: "/industries/healthcare",
    element: <Healthcare />,
  },
  {
    path: "/industries/finance",
    element: <FinanceIndustry />,
  },
  {
    path: "/industries/manufacturing",
    element: <Manufacturing />,
  },
  {
    path: "/industries/education",
    element: <Education />,
  },
  {
    path: "/industries/retail",
    element: <Retail />,
  },
  {
    path: "/industries/hospitality",
    element: <Hospitality />,
  },
  {
    path: "/industries/construction",
    element: <Construction />,
  },
  {
    path: "/industries/real-estate",
    element: <RealEstate />,
  },
  {
    path: "/ai-features",
    element: <AIFeatures />,
  },
  {
    path: "/comparisons/react-vs-angular",
    element: <ReactVsAngular />,
  },
  {
    path: "/comparisons/flutter-vs-react-native",
    element: <FlutterVsReactNative />,
  },
  {
    path: "/comparisons/custom-software-vs-saas",
    element: <CustomSoftwareVsSaaS />,
  },
  {
    path: "/knowledge-center",
    element: <KnowledgeCenter />,
  },
  {
    path: "/our-journey",
    element: <OurJourney />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;