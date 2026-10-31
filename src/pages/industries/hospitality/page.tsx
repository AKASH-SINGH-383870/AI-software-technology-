import IndustryDetail from '@/components/feature/IndustryDetail';
import { industriesData } from '@/mocks/industryDetails';

export default function Hospitality() {
  return <IndustryDetail data={industriesData.hospitality} />;
}