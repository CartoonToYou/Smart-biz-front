import React, { forwardRef } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Zoom
} from "@material-ui/core";

const Transition = forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

const C = ({
  title,
  detail,
  confirmText,
  cancelText,
  isOpen,
  handleClose,
  handleCancel,
  handleConfirm
}) => {
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{detail}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {cancelText && <Button onClick={handleCancel}>{cancelText}</Button>}
        {confirmText && <Button onClick={handleConfirm}>{confirmText}</Button>}
      </DialogActions>
    </Dialog>
  );
};

export default C;
