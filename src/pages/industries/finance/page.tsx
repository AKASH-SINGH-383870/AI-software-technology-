import IndustryDetail from '@/components/feature/IndustryDetail';
import { industriesData } from '@/mocks/industryDetails';

export default function Finance() {
  return <IndustryDetail data={industriesData.finance} />;
}