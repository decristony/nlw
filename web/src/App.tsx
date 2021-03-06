import styles from "./App.module.scss";
import { MessageList } from "./components/MassegeList";
import { LoginBox } from "./components/LoginBox";
import { useContext } from "react";
import { AuthContext } from "./context/auth";
import { SendMessageForm } from "./components/SendMessageForm";

export function App() {
  const { user } = useContext(AuthContext);

  return (
    <main className={styles.contentWrapper}>
      <MessageList />

      {!!user ? <SendMessageForm /> : <LoginBox />}
    </main>
  );
}
