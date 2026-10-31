import IndustryDetail from '@/components/feature/IndustryDetail';
import { industriesData } from '@/mocks/industryDetails';

export default function Healthcare() {
  return <IndustryDetail data={industriesData.healthcare} />;
}