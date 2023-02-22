import Deposit from "./transection/Deposit";
import Transfer from "./transection/Transfer";
import Withdraw from "./transection/Withdraw";

function TransectionCard({ accountId, bankId, reRender }) {
  return (
    <div className="flex justify-center gap-5">
      <Deposit accountId={accountId} bankId={bankId} reRender={reRender} />
      <Withdraw accountId={accountId} bankId={bankId} reRender={reRender} />
      <Transfer accountId={accountId} bankId={bankId} reRender={reRender} />
    </div>
  );
}

export default TransectionCard;
