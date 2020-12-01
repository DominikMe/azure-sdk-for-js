import {
  CommunicationIdentityClient,
  CommunicationUserToken
} from "@azure/communication-administration";
import { ChatClient, ChatThreadClient } from "@azure/communication-chat";
import { AzureCommunicationUserCredential } from "@azure/communication-common";
import { AbortSignalLike } from "@azure/core-http";

async function createCommunicationUserIssueToken() {
  const identityClient = new CommunicationIdentityClient("CONNECTION_STRING");

  const user = await identityClient.createUser();
  const token = await identityClient.issueToken(user, ["chat"]);

  console.log("Communication user id: ", user.communicationUserId);
  console.log("Communication user token: ", token.token);
}

async function createChatClientWithStringToken(communicationUserToken: CommunicationUserToken) {
  const userToken = communicationUserToken.token;
  const chatClient = new ChatClient("ENDPOINT", new AzureCommunicationUserCredential(userToken));
}

async function fetchTokenForUserFromMyServer(
  userId: string,
  abortSignal?: AbortSignalLike
): Promise<string> {
  return "";
}

async function createChatClientWithTokenFromCallbackProactiveRefreshing() {
  const chatClient = new ChatClient(
    "ENDPOINT",
    new AzureCommunicationUserCredential({
      tokenRefresher: (abortSignal) =>
        fetchTokenForUserFromMyServer("bob@contoso.com", abortSignal),
      refreshProactively: true
    })
  );
}

async function listChatParticipants(
  chatThreadClient: ChatThreadClient,
  communicationUserToken1: CommunicationUserToken,
  communicationUserToken2: CommunicationUserToken,
  communicationUserToken3: CommunicationUserToken
) {
  chatThreadClient.addMembers({
    members: [
      { user: communicationUserToken1.user, displayName: "Alice" },
      { user: communicationUserToken2.user, displayName: "Bob" },
      { user: communicationUserToken3.user, displayName: "Mallory" }
    ]
  });

  for await (const member of chatThreadClient.listMembers()) {
    console.log("Chat member id", member.user.communicationUserId);
  }
}
