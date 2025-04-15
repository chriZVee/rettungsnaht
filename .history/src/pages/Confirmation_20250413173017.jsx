import Page from "../components/Page";
import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();

  return (
    <Page>
      <h1>Bestätigung</h1>
      <p>Hier kommt eine Zusammenfassung des Formulars</p>
    </Page>
  );
}
