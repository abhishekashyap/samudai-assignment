import { useState } from "react";
import ConnectWallet from "../components/ConnectWallet";
import DialogBox from "../components/DialogBox";
import SignInWithEthereum from "../components/SignInWithEthereum";
import { PageLayout } from "../layouts";

export const SignIn = () => {
  const [showWalletConfirmationModal, setShowWalletConfirmationModal] =
    useState(false);

  return (
    <>
      <DialogBox
        header="Connection successful"
        content="Your wallet has been connected successfully. You can now sign in to your account"
        isOpen={showWalletConfirmationModal}
        onCloseModal={() => setShowWalletConfirmationModal(false)}
      />
      <PageLayout header="Sign in with Ethereum">
        <div className="flex gap-2 items-center justify-center">
          <ConnectWallet
            onConnect={() => setShowWalletConfirmationModal(true)}
          />
          <SignInWithEthereum />
        </div>
      </PageLayout>
    </>
  );
};
