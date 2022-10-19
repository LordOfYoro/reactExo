import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );

  return (
    <div onClick={() => handleClick(careType, scaleValue)}>
      {range.map((rangeElem) => {
        if (scaleValue >= rangeElem) {
          return <span key={rangeElem.toString()}>{scaleType}</span>;
        }
        return null;
      })}
    </div>
  );
}

function handleClick(careType, scaleValue) {
  const typeWording = careType === "light" ? "de lumière" : "d'arrosage";
  let scaleWording = "";
  switch (scaleValue) {
    case 1:
      scaleWording = "peu ";
      break;
    case 2:
      scaleWording = "modérement ";
      break;
    case 3:
      scaleWording = "beaucoup ";
      break;
    default:
      scaleWording = "pas ";
      break;
  }

  alert("Cette plante requiert " + scaleWording + typeWording);
}

export default CareScale;
