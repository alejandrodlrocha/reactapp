import { Button } from "@material-ui/core";
import { Http2SecureServer } from "http2";
import React, { FC } from "react";

type addRemoveProps = {
    add:Function,
    remove:Function,
    disableRemove:boolean
}

const AddRemove: FC<addRemoveProps> = ({add, remove, disableRemove}) => {
    const handleAdd = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        add();
    }

    const handleRemove = (event:React.MouseEvent<HTMLButtonElement>) => {
        remove();
    }

    return (
    <>
      <Button color="primary" variant="contained" onClick={handleAdd}>
        Add
      </Button>
      <Button color="primary" variant="contained" onClick={handleRemove} disabled={disableRemove}>
        Remove
      </Button>
    </>
  );
};

export default AddRemove;