import { useUser } from "@/lib/hooks";

const ReferralCard = () => {
  const { user } = useUser();
  const referralLink = `${window.location.origin}/register?ref=${user.referralCode}`;

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4">
      <h3 className="text-lg font-bold mb-2">Refer & Earn AK Coins</h3>
      <p className="mb-2">Share your referral link with friends and earn bonus coins when they make their first purchase!</p>
      <div className="bg-zinc-100 p-2 rounded my-2 text-sm break-all">{referralLink}</div>
      <div className="text-xs text-zinc-500">You have earned: <span className="font-bold">{user.referralCoinsEarned || 0} AK Coins</span> from referrals.</div>
    </div>
  );
};

export default ReferralCard;
