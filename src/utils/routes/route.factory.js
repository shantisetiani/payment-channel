import React from "react";
import { Route } from "react-router-dom";

export const routeFactory = routeObj => {
  return routeObj.map((value, index) => {
    return (
      <Route
        key={index}
        exact
        params={value.params}
        path={value.path}
        render={props => {
          if (value.middleware) {
            const mdRet = value.middleware
              .map(cl => {
                const obj = new cl();
                const handle = obj.handle();
                return handle ? handle : null;
              })
              .filter(el => el != null);

            if (mdRet.length > 0) {
              return mdRet[0];
            }
          }

          return <value.component {...props} routes={value.childrens} />;
        }}
      />
    );
  });
};
