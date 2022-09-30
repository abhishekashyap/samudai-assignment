import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEthers } from "../../context/EthereumSignInContext";
import { createSiweMessage } from "../../utils";
import Button from "../Button";
import { setIsAuthenticated, setWalletAddress } from "./signInSlice";

export const SignInWithEthereum = () => {
  const { provider } = useEthers();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    // await postSignInData(signerAddress);
    dispatch(setWalletAddress(signerAddress));
    dispatch(setIsAuthenticated(true));
    navigate("/dashboard");
  }

  return (
    <Button
      className="text-blue-500 border-blue-500 hover:bg-blue-500"
      onClick={signInWithEthereum}
    >
      Sign In With Ethereum
    </Button>
  );
};
