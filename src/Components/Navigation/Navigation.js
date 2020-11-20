import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../services/routes";
import style from "./style.module.scss";

const Navigation = () => (
  <div className={style.slider}>
    <ul className={style.navigation_list}>
      {routes.map((item) => {
        return (
          <>
            {item.label && (
              <li>
                <NavLink
                  exact={item.exact}
                  to={item.path}
                  className={style.navigation_link}
                  activeClassName={style.active_link}
                >
                  {item.label}
                </NavLink>
              </li>
            )}
            )
          </>
        );
      })}
    </ul>
  </div>
);

export default Navigation;
