export async function postSignInData(address: string) {
  try {
    const postDataRes = await fetch(
      "https://dev-gcn.samudai.xyz/api/member/signup",
      {
        method: "POST",
        body: JSON.stringify({
          walletAddress: address,
          chainId: 1,
          member: {
            did: "",
          },
        }),
      }
    );
    return await postDataRes.json();
  } catch (error) {
    console.error(error);
  }
}
