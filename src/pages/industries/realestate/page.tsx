import IndustryDetail from '@/components/feature/IndustryDetail';
import { industriesData } from '@/mocks/industryDetails';

export default function RealEstate() {
  return <IndustryDetail data={industriesData.realestate} />;
}