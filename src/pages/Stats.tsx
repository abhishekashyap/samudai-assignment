import LatestBlockHeight from "../components/LatestBlockHeight";
import RecentTransactionsWidget from "../components/RecentTransactionsWidget";
import { PageLayout, ProtectedPageLayout } from "../layouts";

export const Stats = () => (
  <ProtectedPageLayout>
    <PageLayout>
      <RecentTransactionsWidget />
      <LatestBlockHeight />
    </PageLayout>
  </ProtectedPageLayout>
);
