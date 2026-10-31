import IndustryDetail from '@/components/feature/IndustryDetail';
import { industriesData } from '@/mocks/industryDetails';

export default function Construction() {
  return <IndustryDetail data={industriesData.construction} />;
}