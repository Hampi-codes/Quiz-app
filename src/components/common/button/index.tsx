import { Button, CircularProgress } from "@mui/material";

interface Buttonprops {
    className?: string;
    textClassName?: string;
    variant: "outlined" | "contained" | "text";
    buttonType?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
    isLoading?: boolean;
    text?: string;
    startIcon?: string;
    endIcon?: string;
    onClick?: any;
    type?: "primary" | "secondary";
    children?: any;
    primaryBtnTextClass?: string;
    SecoundaryBtnTextClass?: string;
    icon?:any;
  }

export const CustomButton = (props: Buttonprops) => {
  const {
    className,
    variant,
    textClassName,
    isLoading,
    disabled,
    text,
    endIcon,
    onClick,
    type,
    buttonType,
    primaryBtnTextClass,
    SecoundaryBtnTextClass,
    icon,
  } = props;
  return (
    <div className={disabled ? "btnwrapper" : ""} style={{ display: "flex" }}>
      <Button
        data-testid="buttons"
        className={className ? `${type} ${className}` : `${type}`}
        variant={variant}
        disabled={disabled}
        endIcon={endIcon}
        fullWidth={true}
        onClick={onClick}
        type={buttonType}
        disableFocusRipple={true}
      >
        {!isLoading ? (
          <span
            className={
              `${textClassName}` +
              " " +
              (type == "primary"
                ? `primaryText ${primaryBtnTextClass}`
                : `secondaryText ${SecoundaryBtnTextClass}`)
            }
          >
            {text}
            {icon}
          </span>
        ) : (
          <CircularProgress className="circularProgress" />
        )}
      </Button>
    </div>
  );
};
