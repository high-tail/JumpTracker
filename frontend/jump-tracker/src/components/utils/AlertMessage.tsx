import React from "react";
import { Alert } from "react-bootstrap";

interface AlertMessageProps {
  open: boolean;
  setOpen: Function;
  severity: "error" | "success" | "info" | "warning";
  message: string;
}

// アラートメッセージ（何かアクションを行なった際の案内用に使い回す）
const AlertMessage = ({
  open,
  setOpen,
  severity,
  message,
}: AlertMessageProps) => {
  const handleCloseAlertMessage = (
    e?: React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") return;

    setOpen(false);
  };

  return (
    <>
      <Alert onClose={handleCloseAlertMessage}>{message}</Alert>
    </>
  );
};

export default AlertMessage;
