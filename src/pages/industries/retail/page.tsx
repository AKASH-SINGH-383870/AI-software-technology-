import IndustryDetail from '@/components/feature/IndustryDetail';
import { industriesData } from '@/mocks/industryDetails';

export default function Retail() {
  return <IndustryDetail data={industriesData.retail} />;
}