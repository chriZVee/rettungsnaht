import Page from "../components/Page";
import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();

  return (
    <Page>
      <p>Hier kommt eine Zusammenfassung des Formulars</p>
    </Page>
  );
}
