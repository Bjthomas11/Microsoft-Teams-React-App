import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

import "./App.css";
import LoginForm from "./components/LoginForm";
import LogoutButton from "./components/LogoutButton";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <>
      {localStorage.getItem("username") ? (
        <>
          <ChatEngine
            height="100vh"
            projectID="af961b30-dd9a-4de6-b085-1a2b53982205"
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
          />
          <LogoutButton />
        </>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

export default App;
