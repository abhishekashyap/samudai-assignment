import { postSignInData } from "../../api";
import { useEthers } from "../../context/EthereumSignInContext";
import { createSiweMessage } from "../../utils";
import Button from "../Button";

export const SignInWithEthereum = () => {
  const { provider } = useEthers();

  const signer = provider.getSigner();

  async function signInWithEthereum() {
    const signerAddress = await signer.getAddress();
    const message = createSiweMessage(
      signerAddress,
      "Sign in with Ethereum to the app."
    );
    console.log(
      "await signer.signMessage(message): ",
      await signer.signMessage(message)
    );
    await postSignInData(signerAddress);
  }

  return <Button onClick={signInWithEthereum}>Sign In With Ethereum</Button>;
};
