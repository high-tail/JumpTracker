import React from "react";
import { Alert } from "react-bootstrap";
interface AlertMessageProps {
  isOpen: boolean;
  variant: "danger" | "success";
  text: string;
  error: string;
  onClose: () => void;
}

// アラートメッセージ（何かアクションを行なった際の案内用に使い回す）
const AlertMessage: React.FC<AlertMessageProps> = ({
  isOpen,
  variant,
  text,
  error,
  onClose,
}) => {
  return (
    <>
      <Alert
        variant={variant}
        onClose={onClose}
        dismissible
        show={isOpen}
        transition
        className="mt-3"
      >
        {text}
        {error}
      </Alert>
    </>
  );
};

export default AlertMessage;
