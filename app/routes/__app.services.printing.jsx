import ServiceLanding from "../components/serviceLanding";

export const meta = () => {
  return [{ title: "Enhnace Printing | Northern Colorado's One-Stop-Shop" }];
};

export default function PrintingPage() {
  return (
    <main>
      <ServiceLanding />
      <div className="textArea">
        <p>Testing the <em>fonts</em> on this site.<br/>Line Two</p>
      </div>
    </main>
  );
}
