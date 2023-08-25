import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Uudised() {
  const { t } = useTranslation();

  const uudised = JSON.parse(localStorage.getItem("uudised") || []);

  return (
    <div>
      <div>
        {t("total-news")}
        {uudised.length}
      </div>
      <div>See on uudiste leht, nähtav localhost:3000/uudised aadressil</div>
      <div>Uued uudised iga päev.</div>
      {uudised.length === 0 && (
        <div>Ühtegi uudist hetkel pole! Lisame õige pea!</div>
      )}
      {uudised.map((uudis, index) => (
        <Link to={"/yks-uudis/" + index}>
          <div>{uudis}</div>
        </Link>
      ))}
    </div>
  );
}

export default Uudised;
