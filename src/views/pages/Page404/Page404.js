import React from "react";
import { Result, Button } from "antd";
/**
 * @author
 * @function Page404
 **/

export const Page404 = (props) => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};
