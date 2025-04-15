import Page from "../components/Page";

export default function Confirmation() {
  navigate("/confirmation", { state: formData });

  return (
    <Page>
      <p>Hier kommt eine Zusammenfassung des Formulars</p>
    </Page>
  );
}
