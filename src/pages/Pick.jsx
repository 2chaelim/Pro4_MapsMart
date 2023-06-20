import Select from "../components/Select";
import SubHeader from "../components/subHeader";

function Pick({ subName }) {
  return (
    <section className="pick">
      <SubHeader subName={subName} />
      <Select />
    </section>
  );
}

export default Pick;
