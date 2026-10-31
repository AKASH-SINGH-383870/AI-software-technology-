import IndustryDetail from '@/components/feature/IndustryDetail';
import { industriesData } from '@/mocks/industryDetails';

export default function Manufacturing() {
  return <IndustryDetail data={industriesData.manufacturing} />;
}