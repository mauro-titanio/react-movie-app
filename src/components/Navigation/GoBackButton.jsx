import styles from "./GoBackButton.module.scss";
import { ArrowLeft } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";

export default function GoBackButton() {
  const history = useHistory();

  return (
    <div>
      <p
        variant="outline-dark"
        className={`${styles.goBackButton} btn-sm`}
        onClick={() => history.goBack()}
      >
        <ArrowLeft size={25} className="align-top me-2" />BACK
      </p>
    </div>
  );
}
