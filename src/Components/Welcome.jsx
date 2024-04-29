import Alert from "react-bootstrap/Alert";

function MyAlert() {
  return (
    <>
      {["danger"].map((danger) => (
        <Alert key={danger} variant={danger}>
          BookShop Di Matteo
        </Alert>
      ))}
      <h3>Compra i tuoi libri preferiti</h3>
    </>
  );
}

export default MyAlert;
